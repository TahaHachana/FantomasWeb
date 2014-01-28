module Website.Content

open IntelliFactory.Html
open IntelliFactory.WebSharper
open IntelliFactory.WebSharper.Sitelets.Content

module Home = 
    let header = 
        Div [Class "page-header"] -< [
            H1 [Text "F# Code Formatting"]
            P [Text "Paste your FSharp code and press 'Format' to generate a properly formatted output."]
        ]
    
    let alert = 
        Div [
            Id "alert"
            Class "col-lg-offset-3 col-lg-4 alert text-center"
        ]
    
    let tabLi isActive href text = 
        let li = 
            match isActive with
            | false -> LI []
            | true -> LI [Class "active"]
        li -< [
            A [
                HRef href
                HTML5.Data "toggle" "tab"
            ] -< [Text text]
        ]
    
    let textarea id = 
        TextArea [
            Class "code-textarea"
            Id id
            HTML5.SpellCheck "false"
        ]
    
    let tabs = 
        Div [Id "tabs"] -< [
            Div [Class "tabbable"] -< [
                UL [Class "nav nav-tabs"] -< [
                    tabLi true "#output" "Output"
                    tabLi false "#html" "HTML"
                    tabLi false "#html-preview" "HTML Preview"
                ]
                Div [Class "tab-content"] -< [
                    Div [
                        Class "tab-pane active"
                        Id "output"
                    ] -< [textarea "formatted-textarea"]                      
                    Div [
                        Class "tab-pane"
                        Id "html"
                    ] -< [textarea "html-textarea"]
                    Div [
                        Class "tab-pane"
                        Id "html-preview"
                    ]
                ]
            ]
        ]
    
    let loading = 
        Div [
            Img [
                Id "loader"
                Src "/Images/Loader.gif"
            ]
        ]
    
    let body _ = 
        Div [Class "wrap"] -< [
            Nav.navElt(Some "Home")
            Div [
                Class "container"
                Id "push"
            ] -< [
                header
                alert
                Div [new Config.Control()]
                H3 [Text "F# Code"]
                textarea "code-textarea" -< [HTML5.AutoFocus "autofocus"]                                
                Div [Style "padding: 10px 0px 10px 0px; padding-left: 0px"] -< [
                    Div [new Fantomas.Control()]
                    loading
                ]
                tabs
            ]
        ]

module About = 
    let header =
        Div [Class "page-header"] -< [
            H1 [Text "About FantomasWeb"]
        ]
    
    let body _ = 
        Div [Class "wrap"] -< [
            Nav.navElt(Some "About")
            Div [
                Class "container"
                Id "push"
            ] -< [
                header
                Div [Class "lead"] -< [
                    Text "FantomasWeb is an online tool for formatting F# code powered by "
                    A [
                        HRef "https://github.com/dungpa/fantomas/"
                        Target "_blank"
                    ] -< [Text "Fantomas"]
                    Text " and "                                                       
                    A [
                        HRef "http://www.websharper.com/"
                        Target "_blank"
                    ] -< [Text "WebSharper"]
                    Text "."
                ]
            ]
        ]

module Error = 
    let body _ = 
        Div [Class "wrap"] -< [
            Nav.navElt None
            Div [
                Class "container"
                Id "push"
            ] -< [
                Div [Class "page-header"] -< [H1 [Text "Error"]]
                H2 [Text "Page Not Found"]
                P [Text "The requested URL doesn't exist."]]]