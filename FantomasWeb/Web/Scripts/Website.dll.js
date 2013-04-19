(function()
{
 var Global=this,Runtime=this.IntelliFactory.Runtime,WebSharper,Html,Default,List,Operators,jQuery,EventsPervasives,Website,Fantomas,Client,T,JavaScript,Concurrency,HTML5,ForkMe;
 Runtime.Define(Global,{
  Website:{
   Fantomas:{
    Client:{
     alert:Runtime.Field(function()
     {
      var _this;
      return Default.Div(List.ofArray([Default.Id("alert"),(_this=Default.Attr(),_this.NewAttr("style","position: fixed; top: 40px; display: none;")),Default.Attr().Class("offset4 span4 alert text-center")]));
     }),
     config:Runtime.Field(function()
     {
      var _this,x,_this1,f,x1,_this2,x2,x3,_this3,x4,_this4,x5,_this5,x6,_this6,x7,_this7,x8,_this8,x9,_this9,xa,_thisa,xb,_thisb,xc,_thisc,_thisd;
      return Operators.add(Default.Div(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","position: fixed; top: 45px; right: 200px; background-color: white; border: 1px solid;"))])),List.ofArray([(x=Operators.add(Default.Div(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("style","font-weight: bold; background-color: black; color: white; padding: 10px; cursor: pointer;"))])),List.ofArray([Default.Text("Config")])),(f=(x1=function()
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
     }),
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
      var textArea,_this,_textArea_,_this1,formatBtn,x,el,_this2,inner,f,x1,_thisa,_thisb,_thisc,_thisd,arg009,_thise,arg00a,_thisf,arg00b;
      textArea=Default.TextArea(List.ofArray([(_this=Default.Attr(),_this.NewAttr("style","overflow: scroll; word-wrap: normal; height: 300px;")),Default.Attr().Class("span12")]));
      _textArea_=Default.TextArea(List.ofArray([(_this1=Default.Attr(),_this1.NewAttr("style","overflow: scroll; word-wrap: normal; height: 300px;")),Default.Attr().Class("span12")]));
      formatBtn=(x=(el=Default.Button(List.ofArray([Default.Attr().Class("btn btn-primary btn-large"),(_this2=Default.Attr(),_this2.NewAttr("style","float: left;"))])),(inner=Default.Text("Format"),Operators.add(el,List.ofArray([inner])))),(f=(x1=function(elt)
      {
       return function()
       {
        var x2,f1,f2;
        x2=(f1=function()
        {
         var objectArg,arg00,loaderJquery,config,_this3,objectArg1,arg001,_this4,objectArg2,arg002,_this5,objectArg3,arg003,_this6,objectArg4,arg004,_this7,objectArg5,arg005,_this8,objectArg6,arg006,_this9,objectArg7,arg007,objectArg8,arg008;
         objectArg=elt["HtmlProvider@32"];
         ((arg00=elt.Body,function(arg10)
         {
          return function(arg20)
          {
           return objectArg.SetAttribute(arg00,arg10,arg20);
          };
         })("disabled"))("disabled");
         loaderJquery=jQuery("#loader");
         loaderJquery.css("visibility","visible");
         config={
          IndentSpaceNum:Client.indentSpaceNum().get_Value(),
          PageWidth:Client.pageWidth().get_Value(),
          SemicolonAtEndOfLine:(_this3=Client.semicolonAtEndOfLine(),(objectArg1=_this3["HtmlProvider@32"],(arg001=_this3.Body,function(arg10)
          {
           return objectArg1.HasAttribute(arg001,arg10);
          })("checked"))),
          SpaceBeforeArgument:(_this4=Client.spaceBeforeArgument(),(objectArg2=_this4["HtmlProvider@32"],(arg002=_this4.Body,function(arg10)
          {
           return objectArg2.HasAttribute(arg002,arg10);
          })("checked"))),
          SpaceBeforeColon:(_this5=Client.spaceBeforeColon(),(objectArg3=_this5["HtmlProvider@32"],(arg003=_this5.Body,function(arg10)
          {
           return objectArg3.HasAttribute(arg003,arg10);
          })("checked"))),
          SpaceAfterComma:(_this6=Client.spaceAfterComma(),(objectArg4=_this6["HtmlProvider@32"],(arg004=_this6.Body,function(arg10)
          {
           return objectArg4.HasAttribute(arg004,arg10);
          })("checked"))),
          SpaceAfterSemicolon:(_this7=Client.spaceAfterSemicolon(),(objectArg5=_this7["HtmlProvider@32"],(arg005=_this7.Body,function(arg10)
          {
           return objectArg5.HasAttribute(arg005,arg10);
          })("checked"))),
          IndentOnTryWith:(_this8=Client.indentOnTryWith(),(objectArg6=_this8["HtmlProvider@32"],(arg006=_this8.Body,function(arg10)
          {
           return objectArg6.HasAttribute(arg006,arg10);
          })("checked"))),
          ParseAsFsi:(_this9=Client.parseAsFsi(),(objectArg7=_this9["HtmlProvider@32"],(arg007=_this9.Body,function(arg10)
          {
           return objectArg7.HasAttribute(arg007,arg10);
          })("checked")))
         };
         _textArea_.set_Value("");
         JavaScript.Log(config);
         loaderJquery.css("visibility","hidden");
         objectArg8=elt["HtmlProvider@32"];
         (arg008=elt.Body,function(arg10)
         {
          return objectArg8.RemoveAttribute(arg008,arg10);
         })("disabled");
         return Concurrency.Return(null);
        },Concurrency.Delay(f1));
        f2=function(arg00)
        {
         var t;
         t={
          $:0
         };
         return Concurrency.Start(arg00);
        };
        return f2(x2);
       };
      },function(arg10)
      {
       return EventsPervasives.Events().OnClick(x1,arg10);
      }),(f(x),x)));
      return Default.Div(List.ofArray([Client.alert(),Client.config(),Default.H3(List.ofArray([Default.Text("F# Code")])),textArea,Operators.add(Default.Div(List.ofArray([(_thisa=Default.Attr(),_thisa.NewAttr("style","padding: 10px;"))])),List.ofArray([formatBtn,Default.Div(List.ofArray([Default.Img(List.ofArray([(_thisb=Default.Attr(),_thisb.NewAttr("style","padding: 10px; visibility: hidden;")),Default.Src("Images/Loader.gif"),Default.Id("loader")]))]))])),Operators.add(Default.Div(List.ofArray([(_thisc=Default.Attr(),_thisc.NewAttr("style","height: 500px;"))])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tabbable")])),List.ofArray([Operators.add(Default.UL(List.ofArray([Default.Attr().Class("nav nav-tabs")])),List.ofArray([Operators.add(Default.LI(List.ofArray([Default.Attr().Class("active")])),List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef("#output"),(_thisd=HTML5.Attr(),(arg009="data-"+"toggle",_thisd.NewAttr(arg009,"tab")))])),List.ofArray([Default.Text("Output")]))])),Default.LI(List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef("#html"),(_thise=HTML5.Attr(),(arg00a="data-"+"toggle",_thise.NewAttr(arg00a,"tab")))])),List.ofArray([Default.Text("HTML")]))])),Default.LI(List.ofArray([Operators.add(Default.A(List.ofArray([Default.HRef("#html-preview"),(_thisf=HTML5.Attr(),(arg00b="data-"+"toggle",_thisf.NewAttr(arg00b,"tab")))])),List.ofArray([Default.Text("HTML Preview")]))]))])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-content")])),List.ofArray([Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-pane active"),Default.Id("output")])),List.ofArray([_textArea_])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-pane"),Default.Id("html")])),List.ofArray([Default.Text("Coming soon ...")])),Operators.add(Default.Div(List.ofArray([Default.Attr().Class("tab-pane"),Default.Id("html-preview")])),List.ofArray([Default.Text("Coming soon ...")]))]))]))]))]));
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
  WebSharper=Runtime.Safe(Global.IntelliFactory.WebSharper);
  Html=Runtime.Safe(WebSharper.Html);
  Default=Runtime.Safe(Html.Default);
  List=Runtime.Safe(WebSharper.List);
  Operators=Runtime.Safe(Html.Operators);
  jQuery=Runtime.Safe(Global.jQuery);
  EventsPervasives=Runtime.Safe(Html.EventsPervasives);
  Website=Runtime.Safe(Global.Website);
  Fantomas=Runtime.Safe(Website.Fantomas);
  Client=Runtime.Safe(Fantomas.Client);
  T=Runtime.Safe(List.T);
  JavaScript=Runtime.Safe(WebSharper.JavaScript);
  Concurrency=Runtime.Safe(WebSharper.Concurrency);
  HTML5=Runtime.Safe(Default.HTML5);
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
  Client.config();
  Client.alert();
 });
}());
