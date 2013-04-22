namespace Website

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

        let main() =
            Button [Attr.Class "btn btn-primary btn-large"; Attr.Style "float: left;"] -- Text "Format"
            |>! OnClick (fun elt _ ->
                async {
                    elt.SetAttribute("disabled", "disabled")
                    let loaderJq = JQuery.Of("#loader")
                    let formattedJq = JQuery.Of("#formatted-textarea")
                    loaderJq.Css("visibility", "visible").Ignore
                    let config = getConfig()
                    formattedJq.Text("").Ignore
                    let code = JQuery.Of("#code-textarea").Val() |> string
                    let! result = Server.format code config
                    match result with
                        | Failure      -> displayAlert false
                        | Success (code, html) ->
                            formattedJq.Text(code).Ignore
                            JQuery.Of("#html-textarea").Text(html).Ignore
                            JQuery.Of("#html-preview").Html(html).Ignore
                            displayAlert true
                    loaderJq.Css("visibility", "hidden").Ignore
                    elt.RemoveAttribute("disabled")
                } |> Async.Start)

    type Control() =
        
        inherit Web.Control()

        [<JavaScript>]
        override __.Body = Client.main() :> _