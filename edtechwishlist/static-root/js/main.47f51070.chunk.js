(this["webpackJsonpedtechwishlist-web"]=this["webpackJsonpedtechwishlist-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(6),o=n.n(r),i=(n(15),n.p+"static/media/logo.103b5fa1.svg"),l=(n(16),n(8));function d(e){e.idea;var t=e.action,n=e.className?e.className:"btn btn-primary btn-sm",c=t.display?t.display:"Action";return Object(a.jsxs)("button",{className:n,onClick:function(e){e.preventDefault(),"delete"===t.type&&console.log("Trying to delete the idea")},children:[c," "]})}function u(e){var t=e.idea,n=e.className?e.className:"col-10 mx-auto col-md-6",c=window.location.pathname.match(Object(l.a)(/([0-9]+)/,{ideaId:1})),s=c?c.groups.ideaId:-1,r="".concat(t.id)==="".concat(s);return Object(a.jsxs)("div",{className:n,children:[Object(a.jsxs)("p",{children:[t.id," - ",t.content," - ",t.user]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(d,{idea:t,action:{type:"delete",display:"Delete"}}),Object(a.jsx)("br",{}),Object(a.jsx)(d,{idea:t,action:{type:"comment",display:"Comment"}}),Object(a.jsx)("br",{}),r?null:Object(a.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})}function j(e,t,n,a){var c;a&&(c=JSON.stringify(a));var s=new XMLHttpRequest,r="http://localhost:8000".concat(t);s.responseType="json",s.open(e,r);var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");s.setRequestHeader("Content-Type","application/json"),o&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",o)),s.onload=function(){n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},s.send(c)}function b(e){var t=s.a.createRef(),n=e,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured. Please try again. "))};return Object(a.jsx)("div",{className:e.className,children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;j("POST","/ideas/create/",c,{content:n}),t.current.value=""},children:[Object(a.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"idea"}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Post Idea"})]})})}var m=n(5),f=n(2);function p(e){var t=Object(c.useState)([]),n=Object(f.a)(t,2),s=n[0],r=n[1],o=Object(c.useState)([]),i=Object(f.a)(o,2),l=i[0],d=i[1],b=Object(c.useState)(!1),p=Object(f.a)(b,2),h=p[0],O=p[1];return Object(c.useEffect)((function(){var t=Object(m.a)(e.newIdeas).concat(s);t.length!==l.length&&d(t)}),[e.newIdeas,l,s]),Object(c.useEffect)((function(){if(!1===h){!function(e,t){var n="/ideas/list/";e&&(n="/ideas/list/?username=".concat(e)),j("GET",n,t)}(e.username,(function(e,t){200===t?(r(e),O(!0)):alert("There was an error")}))}}),[s,h,e.username,O]),l.map((function(e,t){return Object(a.jsx)(u,{idea:e,className:"my-5 py-5 border"},"".concat(t,"-{item.id}"))}))}var h=n(9);function O(e){var t="false"!==e.canPost;console.log("props:",e);var n=Object(c.useState)([]),s=Object(f.a)(n,2),r=s[0],o=s[1];return Object(a.jsxs)("div",{className:e.className,children:[!0===t&&Object(a.jsx)(b,{didPost:function(e){var t=Object(m.a)(r);t.unshift(e),o(t)},className:"col-12 mb-3"}),Object(a.jsx)(p,Object(h.a)({newIdeas:r},e))]})}function v(e){var t=e.ideaId,n=Object(c.useState)(!1),s=Object(f.a)(n,2),r=s[0],o=s[1],i=Object(c.useState)(null),l=Object(f.a)(i,2),d=l[0],b=l[1];return Object(c.useEffect)((function(){r||(!function(e,t){j("GET","/ideas/".concat(e),t)}(t,(function(e,t){200===t?b(e):alert("There's an error finding this Idea. ")})),o(!0))}),[t,r,o]),null===d?null:Object(a.jsx)(u,{idea:d,className:e.className})}var g=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(a.jsx)("div",{children:Object(a.jsx)(O,{})}),Object(a.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},y=document.getElementById("root");y&&o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g,{})}),y);var N=s.a.createElement,w=document.getElementById("edtech-wishlist");w&&o.a.render(N(O,w.dataset),w),document.querySelectorAll(".edtech-wishlist-detail").forEach((function(e){o.a.render(N(v,e.dataset),e)})),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.47f51070.chunk.js.map