module Website.Config

open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Html
open IntelliFactory.WebSharper.JQuery

type Config = 
    {IndentOnTryWith : bool
     IndentSpaceNum : string
     PageWidth : string
     ParseAsFsi : bool
     ReorderOpenDeclaration : bool
     SemicolonAtEndOfLine : bool
     SpaceAfterComma : bool
     SpaceAfterSemicolon : bool
     SpaceAroundDelimiter : bool
     SpaceBeforeArgument : bool
     SpaceBeforeColon : bool
     StrictMode : bool}

[<JavaScript>]
module Client = 
    let indentSpaceHtml = 
        String.concat
            "" 
            ["<select>"; "<option>1</option>"; "<option>2</option>"; 
             "<option>3</option>"; """<option selected="selected">4</option>"""; 
             "<option>5</option>"; "<option>6</option>"; "<option>7</option>"; 
             "<option>8</option>"; "<option>9</option>"; "<option>10</option>"; 
             "</select>"]

    let indentSpaceNum = 
        Select [Attr.Class "form-control"] 
        |>! OnAfterRender(fun elt -> elt.Html <- indentSpaceHtml)
    
    let pageWidth = 
        Input [
            Attr.Class "form-control"
            Attr.Value "80"
        ]
    
    let inputCheckbox isChecked = 
        let elt = Input [Attr.Type "checkbox"]
        match isChecked with
        | false -> elt
        | true -> elt -< [Attr.Checked "checked"]
    
    let semicolonAtEndOfLine = inputCheckbox true
    let spaceBeforeArgument = inputCheckbox false
    let spaceBeforeColon = inputCheckbox true
    let spaceAfterComma = inputCheckbox true
    let spaceAfterSemicolon = inputCheckbox true
    let indentOnTryWith = inputCheckbox false
    let parseAsFsi = inputCheckbox false
    let reorderOpenDeclaration = inputCheckbox false
    let spaceAroundDelimiter = inputCheckbox false
    let strictMode = inputCheckbox false
    
    let label elt text = 
        Label [Attr.Class "checkbox"] -< [
            elt :> IPagelet
            Text text
        ]
    
    let configForm = 
        Form [
            Legend [Text "Formatting Configuration"]
            Div [Attr.Class "form-group"] -< [
                Label [Text "Indentation"]
                indentSpaceNum
            ]
            Div [Attr.Class "form-group"] -< [
                Label [Text "Page width"]
                pageWidth
            ]
            Hr []
            label semicolonAtEndOfLine "Semicolon at end of line"
            label spaceBeforeArgument "Space before argument"
            label spaceBeforeColon "Space before colon"
            label spaceAfterComma "Space after comma"
            label spaceAfterSemicolon "Space after semicolon"
            label indentOnTryWith "Indent on try with"
            label parseAsFsi "Parse as F# signatures"
            label reorderOpenDeclaration "Reorder Open Declaration"
            label spaceAroundDelimiter "Space Around Delimiter"
            label strictMode "Strict Mode"
        ]
    
    let main() = 
        Div [Attr.Id "config"] -< [
            Div [
                Attr.Id "config-text"
                Text "Config"
            ]
            |>! OnClick (fun _ _ -> 
                JQuery.Of("#config-form").Toggle().Ignore)
            Div [Id "config-form"] -- configForm
        ]
    
    let isChecked(elt : Element) = JQuery.Of(elt.Dom).Is(":checked")
    
    let getConfig() = 
        {IndentOnTryWith = isChecked indentOnTryWith
         IndentSpaceNum = indentSpaceNum.Value
         PageWidth = pageWidth.Value
         ParseAsFsi = isChecked parseAsFsi
         ReorderOpenDeclaration = isChecked reorderOpenDeclaration
         SemicolonAtEndOfLine = isChecked semicolonAtEndOfLine
         SpaceAfterComma = isChecked spaceAfterComma
         SpaceAfterSemicolon = isChecked spaceAfterSemicolon
         SpaceAroundDelimiter = isChecked spaceAroundDelimiter
         SpaceBeforeArgument = isChecked spaceBeforeArgument
         SpaceBeforeColon = isChecked spaceBeforeColon
         StrictMode = isChecked strictMode}

type Control() = 
    inherit Web.Control()

    [<JavaScript>]
    override __.Body = Client.main() :> _