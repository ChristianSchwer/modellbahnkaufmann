(this.webpackJsonpmodellbahnkaufmann=this.webpackJsonpmodellbahnkaufmann||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(9),i=t.n(n),l=(t(15),t(10)),r=t(3),o=(t(16),t(2)),j=t(5),d=t.p+"static/media/logo.b3eb05b5.png",b=(t(17),t(0));var m=function(e){var a=Object(c.useState)(!1),t=Object(r.a)(a,2),s=t[0],n=t[1],i=function(){return n(!1)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsxs)("div",{className:"navbar-container",children:[Object(b.jsx)("div",{className:"menu-icon",onClick:function(){return n(!s)},children:Object(b.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(b.jsx)(j.b,{to:"/",className:"navbar-logo",onClick:i,children:Object(b.jsx)("img",{src:d,className:"app-logo",alt:"logo"})}),Object(b.jsxs)("div",{className:s?"nav-menu active":"nav-menu",children:[Object(b.jsx)(j.b,{to:"/",className:"nav-links",onClick:i,children:"Startseite"}),Object(b.jsx)(j.b,{to:"/inventar",className:"nav-links",onClick:i,children:"Inventar"}),Object(b.jsx)(j.b,{to:"/about",className:"nav-links",onClick:i,children:"About"}),Object(b.jsx)("a",{className:"nav-links social",href:"//www.instagram.com/modellbahnkaufmann/",target:"_blank",rel:"noreferrer noopener","aria-label":"Instagram",onClick:i,children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)("a",{className:"nav-links social",href:"//github.com/ChristianSchwer",target:"_blank",rel:"noreferrer noopener","aria-label":"Facebook",onClick:i,children:Object(b.jsx)("i",{className:"fab fa-facebook"})}),Object(b.jsx)("div",{className:"nav-links social",onClick:i,children:Object(b.jsx)("i",{className:"fas fa-shopping-cart",children:function(e){var a=0;return e.forEach((function(e){a+=e.value})),a}(e.data)})})]})]})})})};t(19);var h=function(){return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"news",children:[Object(b.jsx)("h1",{children:"Home Page comming soon!"}),Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:"Im Dezember ist es soweit!"})}),Object(b.jsx)("p",{children:"Wir \xfcbernehmen das Gesch\xe4ft Modellbahn Kaufmann"}),Object(b.jsx)("p",{children:"in Dornbirn am neuen Standort in der Bahnhofsstra\xdfe 12."}),Object(b.jsx)("p",{children:"Wir sind schon flei\xdfig am Vorbereiten"}),Object(b.jsx)("p",{children:"und halten euch auf dem laufenden."}),Object(b.jsx)("p",{children:"Fam. Bereuter"})]})})};var u=function(){return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.jsx)("div",{children:"This is the About site!"})};t(20),t(21);var f=function(e){var a=Object(c.useState)(1),t=Object(r.a)(a,2),s=t[0],n=t[1];return Object(b.jsx)("div",{id:"myModal",className:"modal",style:{display:e.data.show},children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsx)("span",{className:"close",onClick:function(a){e.data.close()},children:"\xd7"}),Object(b.jsxs)("div",{className:"modal-content-layout",children:[Object(b.jsx)("img",{src:e.data.image,alt:"train",className:"modal-image"}),Object(b.jsxs)("div",{className:"modal-content-description",children:[Object(b.jsx)("p",{children:e.data.title}),Object(b.jsx)("p",{children:e.data.desc}),Object(b.jsx)("p",{children:e.data.price}),Object(b.jsx)("p",{children:"more information"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"modal-content-description-button",onClick:function(e){n(s<2?1:s-1)},children:"-"}),Object(b.jsx)("input",{type:"text",className:"modal-content-description-input",value:s,readOnly:!0}),Object(b.jsx)("button",{className:"modal-content-description-button",onClick:function(e){n(s+1)},children:"+"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"modal-content-description-button-add",onClick:function(a){e.data.addToShoppingcart({value:s,title:e.data.title})},children:"In den Einkaufswagen"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"modal-content-description-button-add",onClick:function(e){console.log("click")},children:"Zum Einkaufswagen"})})]})]})]})})};var x=function(e){var a=Object(c.useState)("none"),t=Object(r.a)(a,2),s=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"card",onClick:function(e){n("block")},children:[Object(b.jsx)("div",{className:"card-image-wrap",children:Object(b.jsx)("img",{src:e.data.value.image,alt:"train",className:"card-image"})}),Object(b.jsxs)("div",{className:"card-text-wrap",children:[Object(b.jsx)("p",{className:"title",children:e.data.value.title}),Object(b.jsx)("p",{className:"description",children:e.data.value.desc}),Object(b.jsx)("p",{className:"price",children:e.data.value.price})]})]}),Object(b.jsx)(f,{data:{close:function(e){n("none")},show:s,image:e.data.value.image,title:e.data.value.title,desc:e.data.value.desc,price:e.data.value.price,addToShoppingcart:e.data.addToShoppingcart}})]})},O=(t(22),[{image:t.p+"static/media/train1.056fc34e.jpg",title:"Lokomotive",desc:"Zug im Bahnhof",price:"100\u20ac"},{image:t.p+"static/media/train2.7164681c.jpg",title:"Magnetschwebebahn",desc:"Zug \xfcber Wasser",price:"120\u20ac"},{image:t.p+"static/media/train3.f106d234.jpg",title:"Stra\xdfenbahn",desc:"Zug in der Stadt",price:"1002\u20ac"},{image:t.p+"static/media/train4.385a1161.jpg",title:"Personen Zug",desc:"Zug im Bahnhof",price:"344\u20ac"},{image:t.p+"static/media/train5.7d9c6563.jpg",title:"Lokomotive",desc:"Zug in Winter",price:"834\u20ac"}]);var p=function(e){Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var a=Object(c.useState)(!1),t=Object(r.a)(a,2),s=t[0],n=t[1];return Object(b.jsxs)("div",{className:"inventar",children:[Object(b.jsxs)("div",{className:"filter",children:[Object(b.jsxs)("label",{className:"filter-label",children:["Suchbegriff:",Object(b.jsxs)("div",{className:"filter-group",children:[Object(b.jsx)("input",{type:"text",placeholder:"Suchbegriff",className:"filter-search"}),Object(b.jsx)("div",{className:"filter-icon",onClick:function(){return n(!s)},children:Object(b.jsx)("i",{className:"fas fa-filter"})})]})]}),Object(b.jsxs)("label",{className:s?"filter-label":"filter-label deactive",children:["Kategorie:",Object(b.jsxs)("select",{className:"filter-kategorie",children:[Object(b.jsx)("option",{children:"Zug"}),Object(b.jsx)("option",{children:"Wagen"}),Object(b.jsx)("option",{children:"Zubeh\xf6r"}),Object(b.jsx)("option",{children:"H\xe4user"}),Object(b.jsx)("option",{children:"Deko"})]})]}),Object(b.jsxs)("label",{className:s?"filter-label":"filter-label deactive",children:["Hersteller:",Object(b.jsxs)("select",{className:"filter-producer",children:[Object(b.jsx)("option",{children:"LGB"}),Object(b.jsx)("option",{children:"usw"})]})]}),Object(b.jsxs)("label",{className:s?"filter-label":"filter-label deactive",children:["Preis ab:",Object(b.jsx)("input",{type:"number",placeholder:"Preis ab",className:"filter-priceup"})]}),Object(b.jsxs)("label",{className:s?"filter-label":"filter-label deactive",children:["Preis bis:",Object(b.jsx)("input",{type:"number",placeholder:"Preis bis",className:"filter-pricedown"})]}),Object(b.jsx)("button",{className:"filter-button",children:"SUCHEN"})]}),Object(b.jsxs)("div",{className:"cards",children:[O.map((function(a,t){return Object(b.jsx)(x,{data:{value:a,addToShoppingcart:e.data}},t)})),O.map((function(a,t){return Object(b.jsx)(x,{data:{value:a,addToShoppingcart:e.data}},t)})),O.map((function(a,t){return Object(b.jsx)(x,{data:{value:a,addToShoppingcart:e.data}},t)})),O.map((function(a,t){return Object(b.jsx)(x,{data:{value:a,addToShoppingcart:e.data}},t)})),O.map((function(a,t){return Object(b.jsx)(x,{data:{value:a,addToShoppingcart:e.data}},t)}))]})]})};t(23);var g=function(){return Object(b.jsxs)("div",{className:"footer-container",children:[Object(b.jsx)("section",{className:"footer-subscription-head",children:Object(b.jsx)("p",{className:"footer-subscription-heading",children:"Kontaktiere uns oder schreibe eine Nachricht:"})}),Object(b.jsxs)("section",{className:"footer-subscription",children:[Object(b.jsx)("p",{className:"footer-subscription-text",children:"Modellbahn Kaufmann"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"Bahnhofstra\xdfe 12"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"6850 Dornbirn"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"+43 5572/54149"}),Object(b.jsx)("p",{className:"footer-subscription-text",children:"modellbahn@avidonet.at"})]}),Object(b.jsxs)("section",{className:"footer-message",children:[Object(b.jsx)("input",{type:"email",placeholder:"Deine E-Mail Adresse",className:"footer-massage-email"}),Object(b.jsx)("textarea",{type:"textarea",placeholder:"Deine Nachricht",className:"footer-message-text"}),Object(b.jsxs)("button",{className:"footer-message-button",children:["Send ",Object(b.jsx)("i",{className:"fas fa-angle-double-right"})]})]}),Object(b.jsx)("section",{className:"footer-map",children:Object(b.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.843348791864!2d9.738107515294514!3d47.41499660918793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6b4cec95d0cb%3A0xef51b367d9f6bfbe!2sBahnhofstra%C3%9Fe%2012%2C%206850%20Dornbirn!5e0!3m2!1sde!2sat!4v1637874754549!5m2!1sde!2sat",width:"100%",height:"300px",style:{border:"0"},allowFullScreen:"",loading:"lazy",className:"footer-map-iframe"})}),Object(b.jsxs)("section",{className:"footer-links",children:[Object(b.jsx)("div",{className:"footer-logo",children:Object(b.jsx)(j.b,{to:"/",className:"social-logo",children:Object(b.jsx)("img",{src:d,className:"app-logo-footer",alt:"logo"})})}),Object(b.jsxs)("div",{className:"social-icons",children:[Object(b.jsx)("a",{className:"social-icon-link instagram",href:"//www.instagram.com/modellbahnkaufmann/",target:"_blank",rel:"noreferrer noopener","aria-label":"Instagram",children:Object(b.jsx)("i",{className:"fab fa-instagram"})}),Object(b.jsx)("a",{className:"social-icon-link github",href:"//github.com/ChristianSchwer",target:"_blank",rel:"noreferrer noopener","aria-label":"Github",children:Object(b.jsx)("i",{className:"fab fa-github"})})]}),Object(b.jsxs)("div",{className:"footer-links-item",children:[Object(b.jsx)(j.b,{to:"/",className:"footer-link",children:"Imprint"}),Object(b.jsx)(j.b,{to:"/",className:"footer-link",children:"Privacy"})]})]})]})};var v=function(){var e=Object(c.useState)([]),a=Object(r.a)(e,2),t=a[0],s=a[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{data:t}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",element:Object(b.jsx)(h,{})}),Object(b.jsx)(o.a,{path:"/about",element:Object(b.jsx)(u,{})}),Object(b.jsx)(o.a,{path:"/inventar",element:Object(b.jsx)(p,{data:function(e){s([].concat(Object(l.a)(t),[e]))}})}),Object(b.jsx)(o.a,{path:"*",element:Object(b.jsx)("main",{style:{padding:"1rem"},children:Object(b.jsx)("p",{children:"There's nothing here!"})})})]}),Object(b.jsx)(g,{})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(j.a,{children:Object(b.jsx)(v,{})})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.7f001c40.chunk.js.map