(this["webpackJsonpedtechwishlist-web"]=this["webpackJsonpedtechwishlist-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(4),i=n.n(r),o=(n(15),n.p+"static/media/logo.103b5fa1.svg"),l=(n(16),n(8));function u(e){var t=e.username;return Object(c.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profile/".concat(t)},children:e.children})}function d(e){var t=e.user,n=e.includeFullName,s=e.hideLink,r=n?"".concat(t.first_name," ").concat(t.last_name," "):null;return Object(c.jsxs)(a.a.Fragment,{children:[r,s?"@".concat(t.username):Object(c.jsxs)(u,{username:t.username,children:["@",t.username]})]})}function j(e){var t=e.user,n=e.hideLink,s=Object(c.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.username[0]});return n?s:Object(c.jsx)(u,{username:t.username,children:s})}var b=n(2);function m(e,t,n,c){var s;c&&(s=JSON.stringify(c));var a=new XMLHttpRequest,r="https://edtech-wishlist.herokuapp.com".concat(t);console.log("url",r),a.responseType="json",a.open(e,r);var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");a.setRequestHeader("Content-Type","application/json"),i&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",i)),a.onload=function(){403===a.status&&a.response&&("Authentication credentials were not provided."===a.response.detail&&(window.location.href="/login?showLoginRequired=true"));n(a.response,a.status)},a.onerror=function(e){console.log("error:",e),n({message:"The request was an error"},400)},a.send(s)}function f(e){var t=e.user;console.log(t);return t?Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{user:t,hideLink:!0}),Object(c.jsx)("p",{children:Object(c.jsx)(d,{user:t,includeFullName:!0,hideLink:!0})}),Object(c.jsxs)("p",{children:["Profession: ",t.profession]}),Object(c.jsxs)("p",{children:["Bio: ",t.bio]}),Object(c.jsx)("button",{onClick:function(e){console.log("trying to email",e)},className:"btn btn-primary",children:"Email"})]}):null}function h(e){var t=e.username,n=Object(s.useState)(!1),a=Object(b.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(null),l=Object(b.a)(o,2),u=l[0],d=l[1],j=function(e,t){200===t&&d(e)};return Object(s.useEffect)((function(){r||(!function(e,t){m("GET","/profiles/api/".concat(e),t)}(t,j),i(!0))}),[t,r,i]),r?u?Object(c.jsx)(f,{user:u}):null:Object(c.jsx)("h1",{children:'"Loading..."'})}function p(e){e.idea;var t=e.action,n=e.className?e.className:"btn btn-primary btn-sm",s=t.display?t.display:"Action";return Object(c.jsxs)("button",{className:n,onClick:function(e){e.preventDefault(),"delete"===t.type&&console.log("Trying to delete the idea")},children:[s," "]})}function O(e){var t=e.idea,n=e.className?e.className:"col-10 mx-auto col-md-6",s=window.location.pathname.match(Object(l.a)(/([0-9]+)/,{ideaId:1})),a=s?s.groups.ideaId:-1,r="".concat(t.id)==="".concat(a);return Object(c.jsx)("div",{className:n,children:Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)(j,{user:t.user})}),Object(c.jsxs)("div",{className:"col-11",children:[Object(c.jsx)(d,{user:t.user,includeFullName:!0}),Object(c.jsx)("p",{children:t.content}),Object(c.jsxs)("div",{className:"btn btn-group px-0",children:[Object(c.jsx)(p,{idea:t,action:{type:"delete",display:"Delete"}}),Object(c.jsx)(p,{idea:t,action:{type:"comment",display:"Comment"}}),r?null:Object(c.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})]})})}function x(e){var t=a.a.createRef(),n=e.didPost,s=function(e,t){201===t?n(e):(console.log(e),alert("An error occured. Please try again. "))};return Object(c.jsx)("div",{className:e.className,children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;m("POST","/ideas/create/",s,{content:n}),t.current.value=""},children:[Object(c.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"idea"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Post Idea"})]})})}var v=n(6);function g(e){var t=Object(s.useState)([]),n=Object(b.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)([]),o=Object(b.a)(i,2),l=o[0],u=o[1],d=Object(s.useState)(!1),j=Object(b.a)(d,2),f=j[0],h=j[1];return Object(s.useEffect)((function(){var t=Object(v.a)(e.newIdeas).concat(a);t.length!==l.length&&u(t)}),[e.newIdeas,l,a]),Object(s.useEffect)((function(){if(!1===f){!function(e,t){var n="/ideas/list/";e&&(n="/ideas/list/?username=".concat(e)),m("GET",n,t)}(e.username,(function(e,t){200===t?(r(e),h(!0)):alert("There was an error")}))}}),[a,f,e.username,h]),l.map((function(e,t){return Object(c.jsx)(O,{idea:e,className:"my-5 py-5 border"},"".concat(t,"-{item.id}"))}))}var N=n(9);function w(e){var t="false"!==e.canPost;console.log("props:",e);var n=Object(s.useState)([]),a=Object(b.a)(n,2),r=a[0],i=a[1];return Object(c.jsxs)("div",{className:e.className,children:[!0===t&&Object(c.jsx)(x,{didPost:function(e){var t=Object(v.a)(r);t.unshift(e),i(t)},className:"col-12 mb-3"}),Object(c.jsx)(g,Object(N.a)({newIdeas:r},e))]})}function y(e){var t=e.ideaId,n=Object(s.useState)(!1),a=Object(b.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(null),l=Object(b.a)(o,2),u=l[0],d=l[1];return Object(s.useEffect)((function(){r||(!function(e,t){m("GET","/ideas/".concat(e),t)}(t,(function(e,t){200===t?d(e):alert("There's an error finding this Idea. ")})),i(!0))}),[t,r,i]),null===u?null:Object(c.jsx)(O,{idea:u,className:e.className})}var k=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)(w,{})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},E=document.getElementById("root");E&&i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),E);var T=a.a.createElement,I=document.getElementById("edtech-wishlist");I&&i.a.render(T(w,I.dataset),I),document.querySelectorAll(".edtech-wishlist-detail").forEach((function(e){i.a.render(T(y,e.dataset),e)})),document.querySelectorAll(".edtech-wishlist-profile-badge").forEach((function(e){i.a.render(T(h,e.dataset),e)})),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.28a8ca80.chunk.js.map