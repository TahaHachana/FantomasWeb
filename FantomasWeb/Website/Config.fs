namespace Website

module Config =

    open IntelliFactory.WebSharper

    [<JavaScript>]    
    module Client =

        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.JQuery

        let indentSpaceNum =
            Select[]
            |>! OnAfterRender (fun elt ->
                elt.Html <-
                    "<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option selected='selected'>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>")

        let pageWidth = Input [Attr.Value "80"]
        let semicolonAtEndOfLine = Input [Attr.Type "checkbox"; Attr.Checked "checked"]
        let spaceBeforeArgument = Input [Attr.Type "checkbox"]
        let spaceBeforeColon = Input [Attr.Type "checkbox"; Attr.Checked "checked"]
        let spaceAfterComma = Input [Attr.Type "checkbox"; Attr.Checked "checked"]
        let spaceAfterSemicolon = Input [Attr.Type "checkbox"; Attr.Checked "checked"]
        let indentOnTryWith = Input [Attr.Type "checkbox"]
        let parseAsFsi = Input [Attr.Type "checkbox"]

        let main() =
            Div [Attr.Style "position: fixed; top: 45px; right: 200px; background-color: white; border: 1px solid;"] -< [
                Div [Attr.Style "font-weight: bold; background-color: #0044cc; color: white; padding: 10px; cursor: pointer;"] -< [Text "Config"]
                |>! OnClick (fun elt _ ->
                    do JQuery.Of("#form").Toggle().Ignore)
                Div [Id "form"; Attr.Style "display: none; margin: 10px; width: 300px;"] -< [
                    Form [
                        FieldSet [
                            Legend [Text "Formatting Configuration"]
                            Label [Text "Indentation"]
                            indentSpaceNum
                            Label [Text "Page width"]
                            pageWidth
                            Hr []
                            Label [Attr.Class "checkbox"] -< [semicolonAtEndOfLine :> IPagelet; Text "Semicolon at end of line"]
                            Label [Attr.Class "checkbox"] -< [spaceBeforeArgument  :> IPagelet; Text "Space before argument"]
                            Label [Attr.Class "checkbox"] -< [spaceBeforeColon     :> IPagelet; Text "Space before colon"]
                            Label [Attr.Class "checkbox"] -< [spaceAfterComma      :> IPagelet; Text "Space after comma"]
                            Label [Attr.Class "checkbox"] -< [spaceAfterSemicolon  :> IPagelet; Text "Space after semicolon"]
                            Label [Attr.Class "checkbox"] -< [indentOnTryWith      :> IPagelet; Text "Indent on try with"]
                            Label [Attr.Class "checkbox"] -< [parseAsFsi           :> IPagelet; Text "Parse as F# signatures"]
                        ]
                    ]
                ]
            ]

        type Config =
            {
                IndentSpaceNum : string
                PageWidth : string
                SemicolonAtEndOfLine : bool
                SpaceBeforeArgument : bool
                SpaceBeforeColon : bool
                SpaceAfterComma : bool
                SpaceAfterSemicolon : bool
                IndentOnTryWith : bool
                ParseAsFsi : bool
            }

        let getConfig() =
            {
                IndentSpaceNum = indentSpaceNum.Value
                PageWidth = pageWidth.Value
                SemicolonAtEndOfLine = semicolonAtEndOfLine.HasAttribute("checked")
                SpaceBeforeArgument = spaceBeforeArgument.HasAttribute("checked")
                SpaceBeforeColon = spaceBeforeColon.HasAttribute("checked")
                SpaceAfterComma = spaceAfterComma.HasAttribute("checked")
                SpaceAfterSemicolon = spaceAfterSemicolon.HasAttribute("checked")
                IndentOnTryWith = indentOnTryWith.HasAttribute("checked")
                ParseAsFsi = parseAsFsi.HasAttribute("checked")
            }

    type Control() =

        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _