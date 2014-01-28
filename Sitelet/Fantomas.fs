module Website.Fantomas

#if INTERACTIVE
#r """..\packages\Fantomas.1.0.5.1\lib\FantomasLib.dll"""
#r """..\packages\FSharp.Compiler.Service.0.0.9-alpha\lib\net40\FSharp.Compiler.Service.dll"""
#endif

open Config
open Fantomas
open Fantomas.FormatConfig
open IntelliFactory.WebSharper

let private toFormatConfig(config : Config) : FormatConfig = 
    {IndentSpaceNum = Num.Parse config.IndentSpaceNum
     PageWidth = Num.Parse config.PageWidth
     SemicolonAtEndOfLine = config.SemicolonAtEndOfLine
     SpaceBeforeArgument = config.SpaceBeforeArgument
     SpaceBeforeColon = config.SpaceBeforeColon
     SpaceAfterComma = config.SpaceAfterComma
     SpaceAfterSemicolon = config.SpaceAfterSemicolon
     IndentOnTryWith = config.IndentOnTryWith
     ReorderOpenDeclaration = config.ReorderOpenDeclaration
     SpaceAroundDelimiter = config.SpaceAroundDelimiter
     StrictMode = config.StrictMode}

type Result = 
    | Error
    | Success of string * string

module private Server =

    [<Remote>]
    let format src config = 
        async {
            try 
                let fsi = config.ParseAsFsi
                let config' = toFormatConfig config
                let strOption = CodeFormatter.tryFormatSourceString fsi src config'
                match strOption with
                | None -> return Error
                | Some str -> 
                    let trimmedStr = str.TrimEnd()
                    return Success(trimmedStr, Highlight.highlight trimmedStr)
            with _ -> return Error
        }

[<JavaScript>]
module private Client = 
    open IntelliFactory.WebSharper.Html
    open IntelliFactory.WebSharper.JQuery
    
    let displayAlert success = 
        let alertJq = JQuery.Of("#alert")
        match success with
        | false -> 
            alertJq.RemoveClass("alert-success").AddClass("alert-warning")
                   .Text("Formatting the code failed.").Ignore
        | true -> 
            alertJq.RemoveClass("alert-warning").AddClass("alert-success")
                   .Text("Code formatted successfully.").Ignore
        alertJq.FadeIn().Ignore
        alertJq.FadeOut(5000.).Ignore
    
    let highlightBtn() = 
        Button [Attr.Class "btn btn-primary btn-lg"] -- Text "Format" 
        |>! OnClick(fun elt _ -> 
                async {
                    elt.SetAttribute("disabled", "disabled")
                    let loaderJq = JQuery.Of("#loader")
                    loaderJq.Css("visibility", "visible").Ignore
                    let formattedJq = JQuery.Of("#formatted-textarea")
                    let htmlJq = JQuery.Of("#html-textarea")
                    let previewJq = JQuery.Of("#html-preview")
                    formattedJq.Val("").Ignore
                    htmlJq.Val("").Ignore
                    previewJq.Html("").Ignore
                    let config = Client.getConfig()
                    let code = JQuery.Of("#code-textarea").Val() |> string
                    let! result = Server.format code config
                    loaderJq.Css("visibility", "hidden").Ignore
                    match result with
                    | Error -> displayAlert false
                    | Success(code, html) -> 
                        formattedJq.Val(code)
                                   .Click(fun _ _ -> formattedJq.Select().Ignore).Ignore
                        htmlJq.Val(html)
                              .Click(fun _ _ -> htmlJq.Select().Ignore).Ignore
                        previewJq.Html(html).Ignore
                        displayAlert true
                    elt.RemoveAttribute("disabled")
                }
                |> Async.Start)
    
    let clearBtn() = 
        Button [Attr.Class "btn btn-default btn-lg"
                Attr.Style "margin-left: 10px;"] -- Text "Clear" 
        |>! OnClick(fun _ _ -> JQuery.Of("#code-textarea").Val("").Ignore)
    
    let main() = 
        Div [highlightBtn()
             clearBtn()]

type Control() = 
    inherit Web.Control()
    [<JavaScript>]
    override __.Body = Client.main() :> _