(this["webpackJsonpedtechwishlist-web"]=this["webpackJsonpedtechwishlist-web"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),r=n(6),i=n.n(r),o=(n(13),n.p+"static/media/logo.103b5fa1.svg"),l=(n(14),n(7)),d=n(2);function j(e,t,n,c){var s;c&&(s=JSON.stringify(c));var a=new XMLHttpRequest,r="http://localhost:8000".concat(t);a.responseType="json",a.open(e,r);var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");i&&a.setRequestHeader("X-CSRFToken",i),a.onload=function(){("/ideas/list/"===t||"/ideas/create/"===t)&&n(a.response,a.status)},a.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},a.send(s)}function u(e){var t=a.a.createRef(),n=Object(s.useState)([]),r=Object(d.a)(n,2),i=(r[0],r[1],Object(s.useState)([])),o=Object(d.a)(i,2),j=o[0],u=o[1];return Object(c.jsxs)("div",{className:e.className,children:[Object(c.jsx)("div",{className:"col-12 mb-3",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value,c=Object(l.a)(j);c.unshift({content:n,id:12345}),u(c),t.current.value="",t.current.value=""},children:[Object(c.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"idea"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Post Idea"})]})}),Object(c.jsx)(b,{newIdeas:j})]})}function b(e){var t=Object(s.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1],i=Object(s.useState)([]),o=Object(d.a)(i,2),u=o[0],b=o[1],m=Object(s.useState)(!1),p=Object(d.a)(m,2),f=p[0],O=p[1];return Object(s.useEffect)((function(){console.log("This is called");var t=Object(l.a)(e.newIdeas).concat(a);t.length!==u.length&&b(t)}),[e.newIdeas,u,a]),Object(s.useEffect)((function(){if(!1===f){j("GET","/ideas/list/",(function(e,t){200===t?(r(e),O(!0)):alert("There was an error")}))}}),[a,f,O]),u.map((function(e,t){return Object(c.jsx)(h,{idea:e,className:"my-5 py-5 border"},"".concat(t,"-{item.id}"))}))}function m(e){e.idea;var t=e.action,n=e.className?e.className:"btn btn-primary btn-sm",s=t.display?t.display:"Action";return Object(c.jsxs)("button",{className:n,onClick:function(e){e.preventDefault(),"delete"===t.type&&console.log("Trying to delete the idea")},children:[s," "]})}function h(e){var t=e.idea,n=e.className?e.className:"col-10 mx-auto col-md-6";return Object(c.jsxs)("div",{className:n,children:[Object(c.jsxs)("p",{children:[t.id," - ",t.content," - ",t.user]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(m,{idea:t,action:{type:"delete",display:"Delete"}}),Object(c.jsx)("br",{}),Object(c.jsx)(m,{idea:t,action:{type:"comment",display:"Comment"}})]})]})}var p=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)(u,{})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))},O=document.getElementById("root");O&&i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),O);var v=document.getElementById("edtech-wishlist");v&&i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u,{})}),v),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.477679e5.chunk.js.map