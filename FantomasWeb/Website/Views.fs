namespace Website

module Views =

    open IntelliFactory.Html
    open ExtSharper
    open Content
    open Model
    open Utils.Server

    let mainTemplate = Skin.MakeDefaultTemplate "~/Main.html" Skin.LoadFrequency.PerRequest
    let withMainTemplate = Skin.WithTemplate<Action> mainTemplate

    let home =
        withMainTemplate "Online F# Code Formatting Tool" "A Web-based FSharp code formatting tool. " <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Home.navigation
                    Div [new ForkMe.Control()]
                    Div [Class "container"; Id "push"] -< [
                        Home.header
                        Div [new Fantomas.Control()]
                    ]
                ]
                Shared.footer
                Script [Src "/Scripts/BootstrapTabs.min.js"]
            ]

    let about =
        withMainTemplate About.title About.metaDescription <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    About.navigation
                    Div [new ForkMe.Control()]
                    Div [Class "container"; Id "push"] -< [
                        Text "Online FSharp source code formatter powered by "
                        A [HRef "https://github.com/dungpa/fantomas"] -< [Text "Fantomas"]
                        Text " and "
                        A [HRef "http://www.websharper.com/"] -< [Text "WebSharper"]
                        Text "."
                    ]
                ]
                Shared.footer
            ]

    let error =
        withMainTemplate "Error - Page Not Found" "" <| fun ctx ->
            [
                Div [Class "wrap"] -< [
                    Shared.navigation
                    Div [Class "container"] -< [
                        Div [Style "padding-top: 100px;"] -< [
                            H2 [Text "Page Not Found"]
                            P [Text "The requested URL doesn't exist."]
                        ]
                    ]
                ]
                Shared.footer
            ]