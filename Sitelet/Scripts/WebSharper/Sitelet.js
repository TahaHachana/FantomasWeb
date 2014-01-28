(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Default,List,Operators,Website,Config,Client,T,Strings,jQuery,EventsPervasives,Remoting,Fantomas,Client1,Concurrency;
 Runtime.Define(Global,{
  Website:{
   Config:{
    Client:{
     configForm:Runtime.Field(function()
     {
      var x,_this,x1,_this1,x2,_this2;
      return Default.Form(List.ofArray([(x=List.ofArray([Default.Text("Formatting Configuration")]),(_this=Default.Tags(),_this.NewTag("legend",x))),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([(x1=List.ofArray([Default.Text("Indentation")]),(_this1=Default.Tags(),_this1.NewTag("label",x1))),Client.indentSpaceNum()])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("form-group")])),List.ofArray([(x2=List.ofArray([Default.Text("Page width")]),(_this2=Default.Tags(),_this2.NewTag("label",x2))),Client.pageWidth()])),Default.Hr(Runtime.New(T,{
       $:0
      })),Client.label(Client.semicolonAtEndOfLine(),"Semicolon at end of line"),Client.label(Client.spaceBeforeArgument(),"Space before argument"),Client.label(Client.spaceBeforeColon(),"Space before colon"),Client.label(Client.spaceAfterComma(),"Space after comma"),Client.label(Client.spaceAfterSemicolon(),"Space after semicolon"),Client.label(Client.indentOnTryWith(),"Indent on try with"),Client.label(Client.parseAsFsi(),"Parse as F# signatures"),Client.label(Client.reorderOpenDeclaration(),"Reorder Open Declaration"),Client.label(Client.spaceAroundDelimiter(),"Space Around Delimiter"),Client.label(Client.strictMode(),"Strict Mode")]));
     }),
     getConfig:function()
     {
      return{
       IndentOnTryWith:Client.isChecked(Client.indentOnTryWith()),
       IndentSpaceNum:Client.indentSpaceNum().get_Value(),
       PageWidth:Client.pageWidth().get_Value(),
       ParseAsFsi:Client.isChecked(Client.parseAsFsi()),
       ReorderOpenDeclaration:Client.isChecked(Client.reorderOpenDeclaration()),
       SemicolonAtEndOfLine:Client.isChecked(Client.semicolonAtEndOfLine()),
       SpaceAfterComma:Client.isChecked(Client.spaceAfterComma()),
       SpaceAfterSemicolon:Client.isChecked(Client.spaceAfterSemicolon()),
       SpaceAroundDelimiter:Client.isChecked(Client.spaceAroundDelimiter()),
       SpaceBeforeArgument:Client.isChecked(Client.spaceBeforeArgument()),
       SpaceBeforeColon:Client.isChecked(Client.spaceBeforeColon()),
       StrictMode:Client.isChecked(Client.strictMode())
      };
     },
     indentOnTryWith:Runtime.Field(function()
     {
      return Client.inputCheckbox(false);
     }),
     indentSpaceHtml:Runtime.Field(function()
     {
      return Strings.concat("",List.ofArray(["<select>","<option>1</option>","<option>2</option>","<option>3</option>","<option selected=\"selected\">4</option>","<option>5</option>","<option>6</option>","<option>7</option>","<option>8</option>","<option>9</option>","<option>10</option>","</select>"]));
     }),
     indentSpaceNum:Runtime.Field(function()
     {
      var x,f;
      x=Default.Select(List.ofArray([Default.Attr().Class("form-control")]));
      f=function(w)
      {
       return Operators.OnAfterRender(function(elt)
       {
        return elt.set_Html(Client.indentSpaceHtml());
       },w);
      };
      f(x);
      return x;
     }),
     inputCheckbox:function(isChecked)
     {
      var elt,_this,_this1;
      elt=Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox"))]));
      if(isChecked)
       {
        return Operators.add(elt,List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("checked","checked"))]));
       }
      else
       {
        return elt;
       }
     },
     isChecked:function(elt)
     {
      return jQuery(elt.Body).is(":checked");
     },
     label:function(elt,text)
     {
      var x,_this;
      return Operators.add((x=List.ofArray([Default.Attr().Class("checkbox")]),(_this=Default.Tags(),_this.NewTag("label",x))),List.ofArray([elt,Default.Text(text)]));
     },
     main:function()
     {
      var _this,x,_this1,f,arg00,el,inner;
      return Operators.add(Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("id","config"))])),List.ofArray([(x=Default.Div(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("id","config-text")),Default.Text("Config")])),(f=(arg00=function()
      {
       return function()
       {
        return jQuery("#config-form").toggle();
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(arg00,arg10);
      }),(f(x),x))),(el=Default.Div(List.ofArray([Default.Id("config-form")])),(inner=Client.configForm(),Operators.add(el,List.ofArray([inner]))))]));
     },
     pageWidth:Runtime.Field(function()
     {
      var _this;
      return Default.Input(List.ofArray([Default.Attr().Class("form-control"),(_this=Default.Attr(),_this.NewAttr("value","80"))]));
     }),
     parseAsFsi:Runtime.Field(function()
     {
      return Client.inputCheckbox(false);
     }),
     reorderOpenDeclaration:Runtime.Field(function()
     {
      return Client.inputCheckbox(false);
     }),
     semicolonAtEndOfLine:Runtime.Field(function()
     {
      return Client.inputCheckbox(true);
     }),
     spaceAfterComma:Runtime.Field(function()
     {
      return Client.inputCheckbox(true);
     }),
     spaceAfterSemicolon:Runtime.Field(function()
     {
      return Client.inputCheckbox(true);
     }),
     spaceAroundDelimiter:Runtime.Field(function()
     {
      return Client.inputCheckbox(false);
     }),
     spaceBeforeArgument:Runtime.Field(function()
     {
      return Client.inputCheckbox(false);
     }),
     spaceBeforeColon:Runtime.Field(function()
     {
      return Client.inputCheckbox(true);
     }),
     strictMode:Runtime.Field(function()
     {
      return Client.inputCheckbox(false);
     })
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client.main();
     }
    })
   },
   Fantomas:{
    Client:{
     clearBtn:function()
     {
      var x,el,_this,inner,f,arg00;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-default btn-lg"),(_this=Default.Attr(),_this.NewAttr("style","margin-left: 10px;"))])),(inner=Default.Text("Clear"),Operators.add(el,List.ofArray([inner]))));
      f=(arg00=function()
      {
       return function()
       {
        return jQuery("#code-textarea").val("");
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(arg00,arg10);
      });
      f(x);
      return x;
     },
     displayAlert:function(success)
     {
      var alertJq;
      alertJq=jQuery("#alert");
      if(success)
       {
        alertJq.removeClass("alert-warning").addClass("alert-success").text("Code formatted successfully.");
       }
      else
       {
        alertJq.removeClass("alert-success").addClass("alert-warning").text("Formatting the code failed.");
       }
      alertJq.fadeIn();
      return alertJq.fadeOut(5000);
     },
     highlightBtn:function()
     {
      var x,el,inner,f,arg00;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-lg")])),(inner=Default.Text("Format"),Operators.add(el,List.ofArray([inner]))));
      f=(arg00=function(elt)
      {
       return function()
       {
        var x1,f1,f6;
        x1=(f1=function()
        {
         var objectArg,arg001,loaderJq,formattedJq,htmlJq,previewJq,config,code,x2,f2,x3,f3;
         objectArg=elt["HtmlProvider@32"];
         ((arg001=elt.Body,function(arg10)
         {
          return function(arg20)
          {
           return objectArg.SetAttribute(arg001,arg10,arg20);
          };
         })("disabled"))("disabled");
         loaderJq=jQuery("#loader");
         loaderJq.css("visibility","visible");
         formattedJq=jQuery("#formatted-textarea");
         htmlJq=jQuery("#html-textarea");
         previewJq=jQuery("#html-preview");
         formattedJq.val("");
         htmlJq.val("");
         previewJq.html("");
         config=Client.getConfig();
         code=(x2=jQuery("#code-textarea").val(),(f2=function(value)
         {
          return Global.String(value);
         },f2(x2)));
         x3=Remoting.Async("Sitelet:0",[code,config]);
         f3=function(_arg1)
         {
          var a,html,code1,b,f4,f5;
          loaderJq.css("visibility","hidden");
          a=_arg1.$==1?(html=_arg1.$1,(code1=_arg1.$0,(formattedJq.val(code1).click(function()
          {
           return formattedJq.select();
          }),(htmlJq.val(html).click(function()
          {
           return htmlJq.select();
          }),(previewJq.html(html),(Client1.displayAlert(true),Concurrency.Return(null))))))):(Client1.displayAlert(false),Concurrency.Return(null));
          b=(f4=function()
          {
           var objectArg1,arg002;
           objectArg1=elt["HtmlProvider@32"];
           (arg002=elt.Body,function(arg10)
           {
            return objectArg1.RemoveAttribute(arg002,arg10);
           })("disabled");
           return Concurrency.Return(null);
          },Concurrency.Delay(f4));
          f5=function()
          {
           return b;
          };
          return Concurrency.Bind(a,f5);
         };
         return Concurrency.Bind(x3,f3);
        },Concurrency.Delay(f1));
        f6=function(arg001)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg001);
        };
        return f6(x1);
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(arg00,arg10);
      });
      f(x);
      return x;
     },
     main:function()
     {
      return Default.Div(List.ofArray([Client1.highlightBtn(),Client1.clearBtn()]));
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client1.main();
     }
    })
   }
  }
 });
 Runtime.OnInit(function()
 {
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Operators=Runtime.Safe(Html.Operators);
  Website=Runtime.Safe(Global.Website);
  Config=Runtime.Safe(Website.Config);
  Client=Runtime.Safe(Config.Client);
  T=Runtime.Safe(List.T);
  Strings=Runtime.Safe(WebSharper.Strings);
  jQuery=Runtime.Safe(Global.jQuery);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Fantomas=Runtime.Safe(Website.Fantomas);
  Client1=Runtime.Safe(Fantomas.Client);
  return Concurrency=Runtime.Safe(WebSharper.Concurrency);
 });
 Runtime.OnLoad(function()
 {
  Client.strictMode();
  Client.spaceBeforeColon();
  Client.spaceBeforeArgument();
  Client.spaceAroundDelimiter();
  Client.spaceAfterSemicolon();
  Client.spaceAfterComma();
  Client.semicolonAtEndOfLine();
  Client.reorderOpenDeclaration();
  Client.parseAsFsi();
  Client.pageWidth();
  Client.indentSpaceNum();
  Client.indentSpaceHtml();
  Client.indentOnTryWith();
  Client.configForm();
 });
}());
