namespace Website

#if INTERACTIVE
#r """C:\Users\AHMED\Documents\GitHub\FantomasWeb\packages\Fantomas.0.9.0\lib\FantomasLib.dll"""
#endif

open IntelliFactory.WebSharper
open Fantomas
open Fantomas.FormatConfig
open Config
open Config.Client

module Fantomas =

    let private toFormatConfig (config : Config) : FormatConfig =
        {
            IndentSpaceNum = Num.Parse config.IndentSpaceNum
            PageWidth = Num.Parse config.PageWidth
            SemicolonAtEndOfLine = config.SemicolonAtEndOfLine
            SpaceBeforeArgument = config.SpaceBeforeArgument
            SpaceBeforeColon = config.SpaceBeforeColon
            SpaceAfterComma = config.SpaceAfterComma
            SpaceAfterSemicolon = config.SpaceAfterSemicolon
            IndentOnTryWith= config.IndentOnTryWith
        }

    type Result = Failure | Success of string * string

    module private Server =

        [<Rpc>]
        let format src config =
            async {
                try
                    let fsi = config.ParseAsFsi
                    let config' = toFormatConfig config
                    let config = FormatConfig.Default
                    let strOption = CodeFormatter.tryFormatSourceString fsi src config'
                    match strOption with
                        | None     -> return Failure
                        | Some str ->
                            let html = Highlight.highlight str
                            return Success (str , html)
                with _ -> return Failure
            }

    [<JavaScript>]
    module private Client =
        
        open IntelliFactory.WebSharper.Html
        open IntelliFactory.WebSharper.JQuery
        open IntelliFactory.WebSharper.Formlet

        let displayAlert success =
            let ajq = JQuery.Of("#alert")
            let pjq = JQuery.Of("#msg")
            match success with
                | false -> ajq.RemoveClass("alert-success").Text("Formatting the code failed.").Ignore
                | true  -> ajq.AddClass("alert-success").Text("Code formatted successfully.").Ignore
            ajq.FadeIn().Ignore
            ajq.FadeOut(5000.).Ignore

        let alert = Div [Id "alert"; Attr.Style "position: fixed; top: 40px; display: none;"; Attr.Class "offset4 span4 alert text-center"]

        let main() =
            let textArea = TextArea [Attr.Style "overflow: scroll; word-wrap: normal; height: 300px;"; Attr.Class "span12"]
            let textArea' = TextArea [Attr.Style "overflow: scroll; word-wrap: normal; height: 300px;"; Attr.Class "span12"]
            let formatBtn =
                Button [Attr.Class "btn btn-primary btn-large"; Attr.Style "float: left;"] -- Text "Format"
                |>! OnClick (fun elt _ ->
                    async {
                        elt.SetAttribute("disabled", "disabled")
                        let loaderJq = JQuery.Of("#loader")
                        loaderJq.Css("visibility", "visible").Ignore
                        let config = getConfig()
                        textArea'.Value <- ""
                        let! result = Server.format textArea.Value config
                        match result with
                            | Failure      -> displayAlert false
                            | Success (code, html) ->
                                textArea'.Value <- code
                                JQuery.Of("#html-textarea").Text(html).Ignore
                                JQuery.Of("#html-preview").Html(html).Ignore
                                displayAlert true
                        loaderJq.Css("visibility", "hidden").Ignore
                        elt.RemoveAttribute("disabled")
                    } |> Async.Start)
            Div [
                alert
                Client.main()
                H3 [Text "F# Code"]
                textArea
                Div [Attr.Style "padding: 10px;"] -< [
                    formatBtn
                    Div [Img [Attr.Style "padding: 10px; visibility: hidden;"; Src "Images/Loader.gif"; Id "loader"]]
                ]
                Div [Attr.Style "height: 500px;"] -< [
                    Div [Attr.Class "tabbable"] -< [
                        UL [Attr.Class "nav nav-tabs"] -< [
                            LI [Attr.Class "active"] -< [A [HRef "#output"; HTML5.Attr.Data "toggle" "tab"] -< [Text "Output"]]
                            LI [A [HRef "#html"; HTML5.Attr.Data "toggle" "tab"] -< [Text "HTML"]]
                            LI [A [HRef "#html-preview"; HTML5.Attr.Data "toggle" "tab"] -< [Text "HTML Preview"]]
                        ]
                        Div [Attr.Class "tab-content"] -< [
                            Div [Attr.Class "tab-pane active"; Id "output"] -< [textArea']
                            Div [Attr.Class "tab-pane"; Id "html"] -- TextArea [Id "html-textarea"; Attr.Style "overflow: scroll; word-wrap: normal; height: 300px;"; Attr.Class "span12"]
                            Div [Attr.Class "tab-pane"; Id "html-preview"]
                        ]
                    ]
                ]
            ]

    type Control() =
        
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _