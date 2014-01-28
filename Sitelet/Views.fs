module Website.Views

open Content
open IntelliFactory.Html
open Model
open Skin

let home = 
    withTemplate<Action>
        Templates.home
        "Online F# Code Formatting Tool" 
        "A Web-based FSharp code formatting tool."
        Home.body

let about = 
    withTemplate<Action>
        Templates.about
        "FSharp Code Formatting Tool" 
        "Online tool for F# code formatting powered by Fantomas and WebSharper." 
        About.body

let error = 
    withTemplate<Action>
        Templates.error
        "Error - Page Not Found"
        ""
        Error.body