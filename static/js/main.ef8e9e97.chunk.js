(this["webpackJsonpedtechwishlist-web"]=this["webpackJsonpedtechwishlist-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(4),i=n.n(r),o=(n(15),n.p+"static/media/logo.103b5fa1.svg"),l=(n(16),n(8));function d(e){var t=e.username;return Object(c.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profile/".concat(t)},children:e.children})}function u(e){var t=e.user,n=e.includeFullName,s=e.hideLink,a=e.className,r=n?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(c.jsxs)("div",{className:a,children:[r,s?"@".concat(t.username):Object(c.jsxs)(d,{username:t.username,children:["@",t.username]})]})}function j(e){var t=e.user,n=e.hideLink,s=Object(c.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return n?s:Object(c.jsx)(d,{username:t.username,children:s})}var b=n(2);function m(e,t,n,c){var s;c&&(s=JSON.stringify(c));var a=new XMLHttpRequest,r="http://localhost:8000".concat(t);console.log("current request",r),a.responseType="json",a.open(e,r);var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");a.setRequestHeader("Content-Type","application/json"),i&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",i)),a.onload=function(){403===a.status&&a.response&&("Authentication credentials were not provided."===a.response.detail&&(window.location.href="/login?showLoginRequired=true"));n(a.response,a.status)},a.onerror=function(e){console.log("error:",e),n({message:"The request was an error"},400)},a.send(s)}function h(e){var t=e.user;console.log(t);return t?Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{user:t,hideLink:!0}),Object(c.jsx)("p",{children:Object(c.jsx)(u,{user:t,includeFullName:!0,hideLink:!0})}),Object(c.jsxs)("p",{children:["Profession: ",t.profession]}),Object(c.jsxs)("p",{children:["Bio: ",t.bio]}),Object(c.jsx)("button",{onClick:function(e){console.log("trying to email",e)},className:"btn btn-primary",children:"Email"})]}):null}function f(e){var t=e.username,n=Object(s.useState)(!1),a=Object(b.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(null),l=Object(b.a)(o,2),d=l[0],u=l[1],j=function(e,t){200===t&&u(e)};return Object(s.useEffect)((function(){r||(!function(e,t){m("GET","/profiles/api/".concat(e),t)}(t,j),i(!0))}),[t,r,i]),r?d?Object(c.jsx)(h,{user:d}):null:Object(c.jsx)("h1",{children:'"Loading..."'})}function p(e){e.idea;var t=e.action,n=e.className?e.className:"btn btn-primary btn-sm",s=t.display?t.display:"Action";return Object(c.jsxs)("button",{className:n,onClick:function(e){e.preventDefault(),"delete"===t.type&&console.log("Trying to delete the idea")},children:[s," "]})}function O(e){var t=e.idea,n=e.className?e.className:"col-10 mx-auto col-md-6",s=window.location.pathname.match(Object(l.a)(/([0-9]+)/,{ideaId:1})),a=s?s.groups.ideaId:-1,r="".concat(t.id)==="".concat(a);return Object(c.jsx)("div",{className:n,children:Object(c.jsx)("div",{className:"d-flex",children:Object(c.jsxs)("div",{className:"col-11",children:[Object(c.jsx)("article",{className:"media content-section",children:Object(c.jsxs)("div",{className:"media-body",children:[Object(c.jsx)("div",{className:"article-metadata",children:Object(c.jsx)(u,{className:"mr-2",user:t.user,includeFullName:!0})}),Object(c.jsx)("h2",{children:Object(c.jsx)("a",{class:"article-title",href:"#",children:t.title})}),Object(c.jsx)("p",{className:"article-content",children:t.content})]})}),Object(c.jsxs)("div",{className:"btn btn-group px-0",children:[Object(c.jsx)(p,{idea:t,action:{type:"delete",display:"Delete"}}),Object(c.jsx)(p,{idea:t,action:{type:"comment",display:"Comment"}}),r?null:Object(c.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})})})}var x=n(6);function v(e){var t=Object(s.useState)([]),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)([]),o=Object(b.a)(i,2),l=o[0],d=o[1],u=Object(s.useState)(!1),j=Object(b.a)(u,2),h=j[0],f=j[1];return Object(s.useEffect)((function(){var t=Object(x.a)(e.newIdeas).concat(a);t.length!==l.length&&d(t)}),[e.newIdeas,l,a]),Object(s.useEffect)((function(){if(!1===h){!function(e,t){var n="/ideas/list/";e&&(n="/ideas/list/?username=".concat(e)),m("GET",n,t)}(e.username,(function(e,t){200===t?(r(e),f(!0)):alert("There was an error")}))}}),[a,h,e.username,f]),l.map((function(e,t){return Object(c.jsx)(O,{idea:e,className:"my-5 py-5 border"},"".concat(t,"-{item.id}"))}))}var g=n(9);function N(e){e.canPost;console.log("props:",e);var t=Object(s.useState)([]),n=Object(b.a)(t,2),a=n[0];n[1];return Object(c.jsx)("div",{className:e.className,children:Object(c.jsx)(v,Object(g.a)({newIdeas:a},e))})}function w(e){var t=e.ideaId,n=Object(s.useState)(!1),a=Object(b.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(null),l=Object(b.a)(o,2),d=l[0],u=l[1];return Object(s.useEffect)((function(){r||(!function(e,t){m("GET","/ideas/".concat(e),t)}(t,(function(e,t){200===t?u(e):alert("There's an error finding this Idea. ")})),i(!0))}),[t,r,i]),null===d?null:Object(c.jsx)(O,{idea:d,className:e.className})}var y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)(N,{})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},E=document.getElementById("root");E&&i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),E);var S=a.a.createElement,T=document.getElementById("idea-list");T&&i.a.render(S(N,T.dataset),T),document.querySelectorAll(".edtech-wishlist-detail").forEach((function(e){i.a.render(S(w,e.dataset),e)})),document.querySelectorAll(".edtech-wishlist-profile-badge").forEach((function(e){i.a.render(S(f,e.dataset),e)})),k()}},[[17,1,2]]]);
//# sourceMappingURL=main.ef8e9e97.chunk.js.map