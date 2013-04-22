(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,Website,Config,Client,WebSharper,Html,Default,List,T,Operators,jQuery,EventsPervasives,Remoting,Fantomas,Client1,Concurrency,ForkMe;
 Runtime.Define(Global,{
  Website:{
   Config:{
    Client:{
     getConfig:function()
     {
      var _this,objectArg,arg00,_this1,objectArg1,arg001,_this2,objectArg2,arg002,_this3,objectArg3,arg003,_this4,objectArg4,arg004,_this5,objectArg5,arg005,_this6,objectArg6,arg006;
      return{
       IndentSpaceNum:Client.indentSpaceNum().get_Value(),
       PageWidth:Client.pageWidth().get_Value(),
       SemicolonAtEndOfLine:(_this=Client.semicolonAtEndOfLine(),(objectArg=_this["HtmlProvider@32"],(arg00=_this.Body,function(arg10)
       {
        return objectArg.HasAttribute(arg00,arg10);
       })("checked"))),
       SpaceBeforeArgument:(_this1=Client.spaceBeforeArgument(),(objectArg1=_this1["HtmlProvider@32"],(arg001=_this1.Body,function(arg10)
       {
        return objectArg1.HasAttribute(arg001,arg10);
       })("checked"))),
       SpaceBeforeColon:(_this2=Client.spaceBeforeColon(),(objectArg2=_this2["HtmlProvider@32"],(arg002=_this2.Body,function(arg10)
       {
        return objectArg2.HasAttribute(arg002,arg10);
       })("checked"))),
       SpaceAfterComma:(_this3=Client.spaceAfterComma(),(objectArg3=_this3["HtmlProvider@32"],(arg003=_this3.Body,function(arg10)
       {
        return objectArg3.HasAttribute(arg003,arg10);
       })("checked"))),
       SpaceAfterSemicolon:(_this4=Client.spaceAfterSemicolon(),(objectArg4=_this4["HtmlProvider@32"],(arg004=_this4.Body,function(arg10)
       {
        return objectArg4.HasAttribute(arg004,arg10);
       })("checked"))),
       IndentOnTryWith:(_this5=Client.indentOnTryWith(),(objectArg5=_this5["HtmlProvider@32"],(arg005=_this5.Body,function(arg10)
       {
        return objectArg5.HasAttribute(arg005,arg10);
       })("checked"))),
       ParseAsFsi:(_this6=Client.parseAsFsi(),(objectArg6=_this6["HtmlProvider@32"],(arg006=_this6.Body,function(arg10)
       {
        return objectArg6.HasAttribute(arg006,arg10);
       })("checked")))
      };
     },
     indentOnTryWith:Runtime.Field(function()
     {
      var _this;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox"))]));
     }),
     indentSpaceNum:Runtime.Field(function()
     {
      var x,f,f1;
      x=Default.Select(Runtime.New(T,{
       $:0
      }));
      f=(f1=function(elt)
      {
       return elt.set_Html("<select>\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option selected='selected'>4</option>\r\n                        <option>5</option>\r\n                        <option>6</option>\r\n                        <option>7</option>\r\n                        <option>8</option>\r\n                        <option>9</option>\r\n                        <option>10</option>\r\n                    </select>");
      },function(w)
      {
       return Operators.OnAfterRender(f1,w);
      });
      f(x);
      return x;
     }),
     main:function()
     {
      var _this,x,_this1,f,x1,_this2,x2,x3,_this3,x4,_this4,x5,_this5,x6,_this6,x7,_this7,x8,_this8,x9,_this9,xa,_thisa,xb,_thisb,xc,_thisc,_thisd;
      return Operators.add(Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","position: fixed; top: 45px; right: 200px; background-color: white; border: 1px solid;"))])),List.ofArray([(x=Operators.add(Default.Div(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("style","font-weight: bold; background-color: #0044cc; color: white; padding: 10px; cursor: pointer;"))])),List.ofArray([Default.Text("Config")])),(f=(x1=function()
      {
       return function()
       {
        return jQuery("#form").toggle();
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      }),(f(x),x))),Operators.add(Default.Div(List.ofArray([Default.Id("form"),(_this2=Default.Attr(),_this2.NewAttr("style","display: none; margin: 10px; width: 300px;"))])),List.ofArray([Default.Form(List.ofArray([(x2=List.ofArray([(x3=List.ofArray([Default.Text("Formatting Configuration")]),(_this3=Default.Tags(),_this3.NewTag("legend",x3))),(x4=List.ofArray([Default.Text("Indentation")]),(_this4=Default.Tags(),_this4.NewTag("label",x4))),Client.indentSpaceNum(),(x5=List.ofArray([Default.Text("Page width")]),(_this5=Default.Tags(),_this5.NewTag("label",x5))),Client.pageWidth(),Default.Hr(Runtime.New(T,{
       $:0
      })),Operators.add((x6=List.ofArray([Default.Attr().Class("checkbox")]),(_this6=Default.Tags(),_this6.NewTag("label",x6))),List.ofArray([Client.semicolonAtEndOfLine(),Default.Text("Semicolon at end of line")])),Operators.add((x7=List.ofArray([Default.Attr().Class("checkbox")]),(_this7=Default.Tags(),_this7.NewTag("label",x7))),List.ofArray([Client.spaceBeforeArgument(),Default.Text("Space before argument")])),Operators.add((x8=List.ofArray([Default.Attr().Class("checkbox")]),(_this8=Default.Tags(),_this8.NewTag("label",x8))),List.ofArray([Client.spaceBeforeColon(),Default.Text("Space before colon")])),Operators.add((x9=List.ofArray([Default.Attr().Class("checkbox")]),(_this9=Default.Tags(),_this9.NewTag("label",x9))),List.ofArray([Client.spaceAfterComma(),Default.Text("Space after comma")])),Operators.add((xa=List.ofArray([Default.Attr().Class("checkbox")]),(_thisa=Default.Tags(),_thisa.NewTag("label",xa))),List.ofArray([Client.spaceAfterSemicolon(),Default.Text("Space after semicolon")])),Operators.add((xb=List.ofArray([Default.Attr().Class("checkbox")]),(_thisb=Default.Tags(),_thisb.NewTag("label",xb))),List.ofArray([Client.indentOnTryWith(),Default.Text("Indent on try with")])),Operators.add((xc=List.ofArray([Default.Attr().Class("checkbox")]),(_thisc=Default.Tags(),_thisc.NewTag("label",xc))),List.ofArray([Client.parseAsFsi(),Default.Text("Parse as F# signatures")]))]),(_thisd=Default.Tags(),_thisd.NewTag("fieldset",x2)))]))]))]));
     },
     pageWidth:Runtime.Field(function()
     {
      var _this;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("value","80"))]));
     }),
     parseAsFsi:Runtime.Field(function()
     {
      var _this;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox"))]));
     }),
     semicolonAtEndOfLine:Runtime.Field(function()
     {
      var _this,_this1;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox")),(_this1=Default.Attr(),_this1.NewAttr("checked","checked"))]));
     }),
     spaceAfterComma:Runtime.Field(function()
     {
      var _this,_this1;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox")),(_this1=Default.Attr(),_this1.NewAttr("checked","checked"))]));
     }),
     spaceAfterSemicolon:Runtime.Field(function()
     {
      var _this,_this1;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox")),(_this1=Default.Attr(),_this1.NewAttr("checked","checked"))]));
     }),
     spaceBeforeArgument:Runtime.Field(function()
     {
      var _this;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox"))]));
     }),
     spaceBeforeColon:Runtime.Field(function()
     {
      var _this,_this1;
      return Default.Input(List.ofArray([(_this=Default.Attr(),_this.NewAttr("type","checkbox")),(_this1=Default.Attr(),_this1.NewAttr("checked","checked"))]));
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
     displayAlert:function(success)
     {
      var ajq,pjq;
      ajq=jQuery("#alert");
      pjq=jQuery("#msg");
      if(success)
       {
        ajq.addClass("alert-success").text("Code formatted successfully.");
       }
      else
       {
        ajq.removeClass("alert-success").text("Formatting the code failed.");
       }
      ajq.fadeIn();
      return ajq.fadeOut(5000);
     },
     main:function()
     {
      var x,el,_this,inner,f,x1;
      x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large"),(_this=Default.Attr(),_this.NewAttr("style","float: left;"))])),(inner=Default.Text("Format"),Operators.add(el,List.ofArray([inner]))));
      f=(x1=function(elt)
      {
       return function()
       {
        var x2,f1,f6;
        x2=(f1=function()
        {
         var objectArg,arg00,loaderJq,formattedJq,config,code,x3,f2,x4,f3;
         objectArg=elt["HtmlProvider@32"];
         ((arg00=elt.Body,function(arg10)
         {
          return function(arg20)
          {
           return objectArg.SetAttribute(arg00,arg10,arg20);
          };
         })("disabled"))("disabled");
         loaderJq=jQuery("#loader");
         formattedJq=jQuery("#formatted-textarea");
         loaderJq.css("visibility","visible");
         config=Client.getConfig();
         formattedJq.text("");
         code=(x3=jQuery("#code-textarea").val(),(f2=function(value)
         {
          return Global.String(value);
         },f2(x3)));
         x4=Remoting.Async("Website:0",[code,config]);
         f3=function(_arg11)
         {
          var a,html,code1,b,f4,f5;
          a=_arg11.$==1?(html=_arg11.$1,(code1=_arg11.$0,(formattedJq.text(code1),(jQuery("#html-textarea").text(html),(jQuery("#html-preview").html(html),(Client1.displayAlert(true),Concurrency.Return(null))))))):(Client1.displayAlert(false),Concurrency.Return(null));
          b=(f4=function()
          {
           var objectArg1,arg001;
           loaderJq.css("visibility","hidden");
           objectArg1=elt["HtmlProvider@32"];
           (arg001=elt.Body,function(arg10)
           {
            return objectArg1.RemoveAttribute(arg001,arg10);
           })("disabled");
           return Concurrency.Return(null);
          },Concurrency.Delay(f4));
          f5=function()
          {
           return b;
          };
          return Concurrency.Bind(a,f5);
         };
         return Concurrency.Bind(x4,f3);
        },Concurrency.Delay(f1));
        f6=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f6(x2);
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      });
      f(x);
      return x;
     }
    },
    Control:Runtime.Class({
     get_Body:function()
     {
      return Client1.main();
     }
    })
   },
   ForkMe:{
    Control:Runtime.Class({
     get_Body:function()
     {
      return ForkMe.main();
     }
    }),
    main:function()
    {
     return Operators.add(Default.A(List.ofArray([Default.HRef("https://github.com/TahaHachana/FantomasWeb")])),List.ofArray([Default.Img(List.ofArray([Default.Src("https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"),Default.Alt("Fork me on GitHub"),Default.Id("forkme")]))]));
    }
   }
  }
 });
 Runtime.OnInit(function()
 {
  Website=Runtime.Safe(Global.Website);
  Config=Runtime.Safe(Website.Config);
  Client=Runtime.Safe(Config.Client);
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  T=Runtime.Safe(List.T);
  Operators=Runtime.Safe(Html.Operators);
  jQuery=Runtime.Safe(Global.jQuery);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Remoting=Runtime.Safe(WebSharper.Remoting);
  Fantomas=Runtime.Safe(Website.Fantomas);
  Client1=Runtime.Safe(Fantomas.Client);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  return ForkMe=Runtime.Safe(Website.ForkMe);
 });
 Runtime.OnLoad(function()
 {
  Client.spaceBeforeColon();
  Client.spaceBeforeArgument();
  Client.spaceAfterSemicolon();
  Client.spaceAfterComma();
  Client.semicolonAtEndOfLine();
  Client.parseAsFsi();
  Client.pageWidth();
  Client.indentSpaceNum();
  Client.indentOnTryWith();
 });
}());
