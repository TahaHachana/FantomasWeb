namespace Website

open IntelliFactory.WebSharper

module Highlight =
   
    open System
    open System.Text.RegularExpressions

    type Token =
        | String    of string
        | Else      of string
        | Keyword   of string
        | Comment   of string
        | MLComment of string

    let commentRegex = Regex("///?(.+)?", RegexOptions.Compiled)
    let mlCommentRegex = Regex("(?s)\(\*.+?\*\)", RegexOptions.Compiled)
    let keywordRegex = Regex("(#else|#endif|#help|#I|#if|#light|#load|#quit|#r|#time|abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|let|let!|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|return|return!|select|static|struct|then|to|true|try|type|upcast|use|use!|val|void|when|while|with|yield|yield!)(\ |\n|$)",RegexOptions.Compiled)
    let stringRegex = Regex("(?s)(\"[^\"\\\]*(?:\\\.[^\"\\\]*)*\"|\"{3}[^\"\\\]\*(?:\\\.[^\"\\\]*)*\"{3})", RegexOptions.Compiled)
    let elseRegex = Regex("\w+(\ |\n|$)", RegexOptions.Compiled)

    let (|ParseRegex|_|) (regex : Regex) str =
        let m = regex.Match str
        match m.Success && m.Index = 0 with
            | false -> None
            | true  ->
                let idx = m.Length
                let str' = m.Value
                Some (str', str.[idx ..])

    let (|ParseString|_|) str =
        match str with
            | ParseRegex stringRegex (str, str') -> Some (String str, str')
            | _                                  -> None

    let (|ParseKeyword|_|) str =
        match str with
            | ParseRegex keywordRegex (str, str') -> Some (Keyword str, str')
            | _                                   -> None

    let (|ParseComment|_|) str =
        match str with
            | ParseRegex commentRegex (str, str') -> Some (Comment str, str')
            | _                                   -> None

    let (|ParseMLComment|_|) str =
        match str with
            | ParseRegex mlCommentRegex (str, str') -> Some (MLComment str, str')
            | _                                     -> None

    let (|ParseElse|_|) str =
        match str with
            | ParseRegex elseRegex (str, str') -> Some (Else str, str')
            | _                                     -> None

    let rec tokenize str acc =
        match str with
        | ""                           -> acc
        | ParseString    (token, str') -> tokenize str' <| token :: acc
        | ParseKeyword   (token, str') -> tokenize str' <| token :: acc
        | ParseComment   (token, str') -> tokenize str' <| token :: acc
        | ParseMLComment (token, str') -> tokenize str' <| token :: acc
        | ParseElse      (token, str') -> tokenize str' <| token :: acc
        | _                            -> tokenize str.[1 ..] <| (Else <| str.Substring(0, 1)) :: acc

    let lineNums (str : String) =
        let count = str.Split '\n' |> fun x -> x.Length
        let spans = [for x in 1 .. count -> "<span>" + string x + "</span>"] |> String.concat "<br />"
        "<div style='margin: 0px; padding: 0px; border: 1px solid #ececec; font-family: Consolas; background-color: #f8f8ff; width: auto; overflow: auto;'><table><tr><td style='padding: 5px; background-color: #ececec; color: rgb(150, 150, 150);'>" + spans + "</td><td style='vertical-align: top;'>" + str + "</td></tr></table><div style='font-weight: bold; padding: 10px;'>Created with <a href='http://fantomasweb.apphb.com/' target='_blank'>FantomasWeb</a></div></div>"

    let serialize (tokens : Token list) =
        List.foldBack (fun token str ->
            let token' =
                match token with
                    | String x                -> "<span style='color: #d14;'>" + x + "</span>"
                    | Keyword x               -> "<span style='color: blue;'>" + x + "</span>"
                    | Comment x | MLComment x -> "<span style='color: green; font-style: italic;'>" + x + "</span>"
                    | Else x                  -> x
            str + token') tokens ""
        |> fun x -> "<pre style='padding: 5px; margin: 0px;'>" + x + "</pre>"
        |> lineNums

    let replaceLtGtAmp str =
        Regex("&").Replace(str, "&amp;")
        |> fun x -> Regex("<").Replace(x, "&lt;")
        |> fun x -> Regex(">").Replace(x, "&gt;")
            
    let highlight str =
        replaceLtGtAmp str
        |> fun x -> tokenize x []
        |> serialize