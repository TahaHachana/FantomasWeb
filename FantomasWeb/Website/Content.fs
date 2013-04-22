namespace Website

module Content =

    open IntelliFactory.WebSharper
    open IntelliFactory.Html
    open IntelliFactory.WebSharper.Sitelets.Content
    open Utils.Server

    module Shared =
        
        let navigation : HtmlElement = nav None

        let footer : HtmlElement =
            HTML5.Footer [Id "footer"] -< [
                Div [Class "container"; Style "padding-top: 20px;"] -< [
                    P [Text "Powered by "] -< [
                        A ["WebSharper" => "http://www.websharper.com/"]
                    ]
                ]            
            ]

    module Home =

        let title = "Online F# Code Formatting Tool"

        let metaDescription = "A Web-based FSharp code formatting tool."

        let navigation : HtmlElement = nav <| Some "Home"

        let header : HtmlElement =
            header
                "F# Code Formatting"
                "Paste your FSharp code and press 'Format' to generate a properly formatted output."

    module About =
    
        let title = "FSharp Formatting Tool"

        let metaDescription = "Online tool for F# code formatting powered by Fantomas and WebSharper."

        let navigation : HtmlElement = nav <| Some "About"