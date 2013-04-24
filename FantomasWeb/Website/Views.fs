﻿namespace Website

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
                        Div [Class "pull-right"; Style "height: 30px;"] -< [new AddThis.Control()]
                        Div [Id "alert"; Style "position: fixed; top: 40px; display: none;"; Class "offset4 span4 alert text-center"]
                        Div [new Config.Control()]
                        H3 [Text "F# Code"]
                        TextArea [Id "code-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span12"; HTML5.SpellCheck "false"]
                        Div [Style "padding: 10px 0px 10px 0px; padding-left: 0px"] -< [
                            Div [new Fantomas.Control()]
                            Div [Img [Style "padding-top: 10px; visibility: hidden;"; Src "Images/Loader.gif"; Id "loader"]]
                        ]
                        Div [Style "height: 500px;"] -< [
                            Div [Class "tabbable"] -< [
                                UL [Class "nav nav-tabs"] -< [
                                    LI [Class "active"] -< [A [HRef "#output"; HTML5.Data "toggle" "tab"] -< [Text "Output"]]
                                    LI [A [HRef "#html"; HTML5.Data "toggle" "tab"] -< [Text "HTML"]]
                                    LI [A [HRef "#html-preview"; HTML5.Data "toggle" "tab"] -< [Text "HTML Preview"]]
                                ]
                                Div [Class "tab-content"] -< [
                                    Div [Class "tab-pane active"; Id "output"] -< [TextArea [Id "formatted-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span12"; HTML5.SpellCheck "false"]]
                                    Div [Class "tab-pane"; Id "html"] -< [TextArea [Id "html-textarea"; Style "overflow: scroll; word-wrap: normal; height: 300px;"; Class "span12"; HTML5.SpellCheck "false"]]
                                    Div [Class "tab-pane"; Id "html-preview"; Style "height: 300px;"]
                                ]
                            ]
                        ]
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