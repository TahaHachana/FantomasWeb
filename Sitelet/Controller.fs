module Website.Controller

open IntelliFactory.WebSharper.Sitelets
open Model

let controller =
    {Handle =
        function 
        | About -> Views.about
        | Error -> Views.error
        | Home -> Views.home}