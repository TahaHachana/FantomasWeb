declare module Website {
    module Site {
        interface Website {
        }
    }
    module Model {
        interface Action {
        }
    }
    module Fantomas {
        interface Result {
        }
        interface Control {
            get_Body(): _Html.IPagelet;
        }
    }
    module Highlight {
        interface Token {
        }
    }
    module Skin {
        interface Page {
            Title: string;
            MetaDesc: string;
            Body: _Html1.Element<_Web.Control>;
        }
    }
    module Config {
        module Client {
            var inputCheckbox : {
                (isChecked: boolean): _Html.Element;
            };
            var label : {
                (elt: _Html.IPagelet, text: string): _Html.Element;
            };
            var main : {
                (): _Html.Element;
            };
            var isChecked : {
                (elt: _Html.Element): boolean;
            };
            var getConfig : {
                (): any;
            };
            var indentSpaceHtml : {
                (): string;
            };
            var indentSpaceNum : {
                (): _Html.Element;
            };
            var pageWidth : {
                (): _Html.Element;
            };
            var semicolonAtEndOfLine : {
                (): _Html.Element;
            };
            var spaceBeforeArgument : {
                (): _Html.Element;
            };
            var spaceBeforeColon : {
                (): _Html.Element;
            };
            var spaceAfterComma : {
                (): _Html.Element;
            };
            var spaceAfterSemicolon : {
                (): _Html.Element;
            };
            var indentOnTryWith : {
                (): _Html.Element;
            };
            var parseAsFsi : {
                (): _Html.Element;
            };
            var reorderOpenDeclaration : {
                (): _Html.Element;
            };
            var spaceAroundDelimiter : {
                (): _Html.Element;
            };
            var strictMode : {
                (): _Html.Element;
            };
            var configForm : {
                (): _Html.Element;
            };
        }
        interface Config {
            IndentOnTryWith: boolean;
            IndentSpaceNum: string;
            PageWidth: string;
            ParseAsFsi: boolean;
            ReorderOpenDeclaration: boolean;
            SemicolonAtEndOfLine: boolean;
            SpaceAfterComma: boolean;
            SpaceAfterSemicolon: boolean;
            SpaceAroundDelimiter: boolean;
            SpaceBeforeArgument: boolean;
            SpaceBeforeColon: boolean;
            StrictMode: boolean;
        }
        interface Control {
            get_Body(): _Html.IPagelet;
        }
    }
    
    import _Html = IntelliFactory.WebSharper.Html;
    import _Html1 = IntelliFactory.Html.Html;
    import _Web = IntelliFactory.WebSharper.Web;
}
