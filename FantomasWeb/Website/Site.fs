﻿namespace Website

open IntelliFactory.WebSharper.Sitelets
open Model
open Controller

module Site =

    let router : Router<Action> =
        Router.Table
            [
                About, "about"
                Error, "error"
                Home , "/"
            ]
        <|>
        Router.Infer()

    let Main =
        {
            Controller = controller
            Router     = router
        }
    
type Website() =
    interface IWebsite<Action> with
        member this.Sitelet = Site.Main
        member this.Actions = []

[<assembly: WebsiteAttribute(typeof<Website>)>]
do ()