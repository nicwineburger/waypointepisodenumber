(this.webpackJsonpwaypointepisodenumber=this.webpackJsonpwaypointepisodenumber||[]).push([[0],{38:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);n(33);var c=n(1),r=n(12),a=n.n(r),s=n(21),o=n(13),i=n(14),l=n(17),b=n(16),j=n(5),d=n(59),u=n(11),h=n(56),p=n(60),m=n(57),O=n(58),x=(n(38),n(3)),f=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(x.jsxs)("div",{id:"text",children:[Object(x.jsx)(h.a,{color:"secondary",onClick:function(){return a(!r)},style:{marginBottom:"10px"},children:"About"}),Object(x.jsx)(p.a,{isOpen:r,children:Object(x.jsx)(m.a,{body:!0,className:"text-center",inverse:!0,style:{backgroundColor:"#000000",borderColor:"#000000",color:"#000000"},children:Object(x.jsxs)(O.a,{children:["Created by ",Object(x.jsx)("a",{href:"https://www.twitter.com/baronblissy",children:"@baronblissy"}),Object(x.jsx)("br",{}),"Please let me know if this breaks!"]})})})]})},w=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"content",children:Object(x.jsxs)(d.a,{style:{position:"center"},children:[this.props.children,Object(x.jsx)(f,{})]})})}}]),n}(c.Component);w.displayName=w.name;var y=n(22),v=n.n(y),g=n(30);n(50);var k=function(e){var t=Object(c.useState)(""),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],b=Object(c.useState)(""),j=Object(u.a)(b,2),d=j[0],h=j[1];function p(){return(p=Object(g.a)(v.a.mark((function e(){var t,n,c,r,s,o,i,b,j;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://rss.acast.com/vicegamingsnewpodcast",e.next=3,fetch("https://rss.acast.com/vicegamingsnewpodcast");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("HTTP Error!");case 6:return e.next=8,t.text();case 8:n=e.sent,c=new DOMParser,r=c.parseFromString(n,"application/xml"),s=r.querySelectorAll("item"),o=s[0].querySelectorAll("title")[0].textContent,i=s[0].childNodes[5].textContent,a(o),h("https://play.acast.com/s/vicegamingsnewpodcast/"+i),b=/(\d+)/gm,j=parseInt(o.match(b)[0]),l((j+1).toString());case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){p.apply(this,arguments)}(),Object(x.jsxs)("div",{id:"text",children:[Object(x.jsx)("p",{children:"The next episode of Waypoint Radio should be number..."}),Object(x.jsx)("div",{id:"newNumber",children:i}),Object(x.jsxs)("p",{children:["The last episode was: ",Object(x.jsx)("em",{children:Object(x.jsx)("a",{href:d,children:r})})]})]})},C=(n(51),function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsx)(w,{children:Object(x.jsx)(j.a,{exact:!0,path:"/",component:k})})}}]),n}(c.Component));C.displayName=C.name;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=document.getElementsByTagName("base")[0].getAttribute("href"),N=document.getElementById("root");a.a.render(Object(x.jsx)(s.a,{basename:S,children:Object(x.jsx)(C,{})}),N)}},[[55,1,2]]]);
//# sourceMappingURL=main.cc5e1258.chunk.js.map