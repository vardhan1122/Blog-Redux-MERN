(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,a,t){e.exports=t.p+"static/media/spinner.26ef8bb4.gif"},41:function(e,a,t){e.exports=t(74)},42:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);t(42),t(43),t(44);var n=t(0),l=t.n(n),c=t(17),r=t.n(c),o=(t(49),t(50),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"home-image"},l.a.createElement("div",{className:"landing-page"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"d-flex flex-column text-center justify-content-center align-items-center"},l.a.createElement("h2",{className:"display-4 animated slideInDown font-weight-bold"},l.a.createElement("i",{className:"fa fa-blog"})," Blog's Redux(MERN)"),l.a.createElement("p",{className:"px-3 animated slideInUp"},"A blog (a shortened version of \u201cweblog\u201d) is an online journal or informational website displaying information in the reverse chronological order, with the latest posts appearing first, at the top. It is a platform where a writer or a group of writers share their views on an individual subject."),l.a.createElement("p",{className:"px-3 animated slideInUp"},"So, the main purpose of a blog is to connect you to the relevant audience. Another one is to boost your traffic and send quality leads to your website."),l.a.createElement("p",{className:"px-3 animated slideInUp"},"The more frequent and better your blog posts are, the higher the chances for your website to get discovered and visited by your target audience. This means that a blog is an effective lead generation tool. Add a great call to action (CTA) to your content, and it will convert your website traffic into high-quality leads. A blog also allows you to showcase your niche authority and build a brand."))))))}),m=t(9),s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-dark bg-success navbar-expand-sm"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(m.b,{to:"/",className:"navbar-brand"},l.a.createElement("i",{className:"fa fa-blog"})," BLOG-REDUX(MERN)"),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#simpleNavbar"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"simpleNavbar"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"nav-link"},"HOME")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/blogs",className:"nav-link"},"BLOGS"))),l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/admin",className:"nav-link"},"ADMIN-USER")))))))},i=t(3),d=t(6),E=t(15),u=t.n(E),g=function(){return function(e){e({type:"FETCH_ALL_BLOGS_REQUEST"});u.a.get("https://blog-portal-mern-backend.herokuapp.com/api/blogs").then((function(a){e({type:"FETCH_ALL_BLOGS_SUCCESS",payload:a.data})})).catch((function(a){e({type:"FETCH_ALL_BLOGS_FAILURE",payload:a})}))}},p=function(e,a){return function(t){t({type:"UPDATE_BLOG_FORM",payload:{key:e,value:a}})}},b=t(12),f=t(2),h={loading:!1,blogs:[],selectedBlog:{},errorMessage:""},v=t(36),N=t.n(v),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("img",{src:N.a,alt:"",className:"d-block m-auto"})))},L=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.blogRedux}));Object(n.useEffect)((function(){e(g())}),[]);var t=function(a){e(function(e){return function(a){a({type:"DELETE_BLOG_REQUEST"});var t="https://blog-portal-mern-backend.herokuapp.com/api/blogs/".concat(e);u.a.delete(t).then((function(e){a({type:"DELETE_BLOG_SUCCESS",payload:e.data}),a(g())})).catch((function(e){a({type:"DELETE_BLOG_FAILURE",payload:e})}))}}(a))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"admin-page-full"},l.a.createElement("section",{className:"admin-page"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row animated slideInLeft"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"h2 text-white"},"Admin Blog's"),l.a.createElement(m.b,{to:"/create-blog",className:"btn btn-success btn-sm"},"Create Blog"))),a.loading?l.a.createElement(O,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row mt-3 animated zoomIn"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{id:"table-wrapper"},l.a.createElement("div",{id:"table-scroll"},l.a.createElement("table",{className:"table table-hover text-center table-striped table-success"},l.a.createElement("thead",{className:"bg-dark text-white"},l.a.createElement("tr",null,l.a.createElement("th",null,"SNO"),l.a.createElement("th",null,"Blog Image"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Heading"),l.a.createElement("th",null,"Info"),l.a.createElement("th",null,"Info URL"),l.a.createElement("th",null,"Created"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,a.blogs.length>0?l.a.createElement(l.a.Fragment,null,a.blogs.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e._id.substr(e._id.length-4)),l.a.createElement("td",null,l.a.createElement("img",{src:e.image,alt:"",width:"70",height:"70"})),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.heading),l.a.createElement("td",null,e.info.slice(0,9),"..."),l.a.createElement("td",null,l.a.createElement("a",{href:e.infoURL,alt:"",target:"_blank"},"Info-URL")),l.a.createElement("td",null,e.created),l.a.createElement("td",null,l.a.createElement(m.b,{to:"/update-blog/".concat(e._id),className:"btn btn-secondary btn-sm text-white"},"Update"),l.a.createElement("button",{onClick:t.bind(void 0,e._id),className:"btn btn-danger btn-sm text-white"},"Delete")))}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"6",className:"text-danger font-weight-bold"},"------------- No BLOGS are Available ------------ "))))))))))))))},y=t(37),_=t.n(y),B=function(){var e=Object(d.b)(),a=Object(d.c)((function(e){return e.blogRedux}));return Object(n.useEffect)((function(){e(g())}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"blog-page-full"},l.a.createElement("section",{className:"blog-page"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row animated slideInLeft"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"h2 text-black"},"Blog's Details"))),a.loading?l.a.createElement(O,null):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row animated zoomIn"},a.blogs.length>0?l.a.createElement(l.a.Fragment,null,a.blogs.map((function(e){return l.a.createElement("div",{className:"col-md-12",key:e._id},l.a.createElement("div",{className:"card mt-3"},l.a.createElement("div",{className:"card-header text-center bg-warning text-white"},l.a.createElement("div",null," ",l.a.createElement("span",{className:"topic"},"Topic")," : ",l.a.createElement("span",{className:"topic-text"},e.name))),l.a.createElement("div",{className:"card-body bg-info text-white"},l.a.createElement("div",{className:"row flex-column-reverse flex-md-row"},l.a.createElement("div",{className:"col-md-7"},l.a.createElement("span",null,l.a.createElement("span",{className:"heading"},"Heading")," : ",l.a.createElement("span",{className:"heading-text"},e.heading)),l.a.createElement("br",null),l.a.createElement("span",{className:"info"},"Info")," : ",l.a.createElement("span",{className:"info-text"},e.info)),l.a.createElement("div",{className:"col-md-5"},l.a.createElement("img",{className:"img-fluid blog-image",src:e.image,alt:"",width:"400",height:"250"})))),l.a.createElement("div",{className:"card-footer bg-success text-white"},l.a.createElement("a",{className:"infoURL",href:e.infoURL,alt:"",target:"_blank"},"continue reading.."),l.a.createElement("span",{className:"float-right"},l.a.createElement("span",{className:"created"},"Created at")," : ",l.a.createElement("span",{className:"created-text"}," ",_()(e.created,"mmm dS, yyyy, hh:mm:ss TT"))))))}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("p",{className:"h5 text-danger"},"---------------- No BLOG'S are Available --------------")))))),l.a.createElement("div",{style:{paddingBottom:"50px"}}))))},w=t(14),U=t.n(w),S=t(19),C=t(20),R=function(){var e=Object(d.b)(),a=Object(i.f)(),t=Object(n.useState)(Object(i.g)().id),c=Object(C.a)(t,2),r=c[0],o=(c[1],Object(d.c)((function(e){return e.blogRedux})));Object(n.useEffect)((function(){e(function(e){return function(a){a({type:"FETCH_BLOG_REQUEST"});var t="https://blog-portal-mern-backend.herokuapp.com/api/blogs/".concat(e);u.a.get(t).then((function(e){a({type:"FETCH_BLOG_SUCCESS",payload:e.data})})).catch((function(e){a({type:"FETCH_BLOG_FAILURE",payload:e})}))}}(r))}),[r]);var m=function(a){var t=a.target.name,n=a.target.value;e(p(t,n))},s=function(){var a=Object(S.a)(U.a.mark((function a(t){var n,l;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=t.target.files[0],(l=new FileReader).readAsDataURL(n),l.addEventListener("load",(function(){if(l.result){var a=l.result;e(p("image",a))}else alert("Error Occurred")}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"update-page"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row animated slideInLeft"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"h2 text-white"},"Update Blog"))),l.a.createElement("div",{className:"row animated flipInY delay-1s"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header bg-secondary text-white"},l.a.createElement("p",{className:"h4"},"Update Blog")),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,a,t){return function(n){n({type:"UPDATE_BLOG_REQUEST"});var l="https://blog-portal-mern-backend.herokuapp.com/api/blogs/".concat(e);u.a.put(l,a).then((function(e){n({type:"UPDATE_BLOG_SUCCESS",payload:e.data}),t.push("/admin")})).catch((function(e){n({type:"UPDATE_BLOG_FAILURE",payload:e})}))}}(r,o.selectedBlog,a))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"name",value:o.selectedBlog.name,onChange:m,type:"text",className:"form-control",placeholder:"Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{onChange:s,type:"file",className:"custom-file-input",id:"customFile"}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Product Image"),o.selectedBlog.image&&l.a.createElement("img",{src:o.selectedBlog.image,alt:"",width:"20",height:"20"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"heading",value:o.selectedBlog.heading,onChange:m,type:"string",className:"form-control",placeholder:"Heading.."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{name:"info",value:o.selectedBlog.info,onChange:m,type:"string",className:"form-control",rows:"3",placeholder:"Information.."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{name:"infoURL",value:o.selectedBlog.infoURL,onChange:m,className:"form-control",placeholder:"Info URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-secondary btn-sm",value:"Update Blog"})))))))),l.a.createElement("div",{style:{paddingBottom:"50px"}})))},x=function(){var e=Object(d.b)(),a=Object(i.f)(),t=Object(n.useState)({name:"",image:"",heading:"",info:"",infoURL:""}),c=Object(C.a)(t,2),r=c[0],o=c[1],m=function(e){o(Object(f.a)(Object(f.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))},s=function(){var e=Object(S.a)(U.a.mark((function e(a){var t,n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.target.files[0],(n=new FileReader).readAsDataURL(t),n.addEventListener("load",(function(){n.result?o(Object(f.a)(Object(f.a)({},r),{},{image:n.result})):alert("Error Occurred")}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"create-page"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row animated slideInLeft"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:"h2 text-black"},"Create Blog"))),l.a.createElement("div",{className:"row animated flipInY delay-1s"},l.a.createElement("div",{className:"col-md-5"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header bg-dark text-white"},l.a.createElement("p",{className:"h4"},"Create Blog")),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(function(e,a){return function(t){t({type:"CREATE_BLOG_REQUEST"});u.a.post("https://blog-portal-mern-backend.herokuapp.com/api/blogs/",e).then((function(e){t({type:"CREATE_BLOG_SUCCESS",payload:e.data}),a.push("/admin")})).catch((function(e){t({type:"CREATE_BLOG_FAILURE",payload:e})}))}}(r,a))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{required:!0,name:"name",value:r.name,onChange:m,type:"text",className:"form-control",placeholder:"Blog Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"custom-file"},l.a.createElement("input",{required:!0,onChange:s,type:"file",className:"custom-file-input",id:"customFile"}),l.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Blog Image"),r.image&&l.a.createElement("img",{src:r.image,alt:"",width:"20",height:"20"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{required:!0,name:"heading",value:r.heading,onChange:m,type:"string",className:"form-control",placeholder:"Heading.."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{required:!0,name:"info",value:r.info,onChange:m,type:"string",className:"form-control",rows:"3",placeholder:"Information.."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{required:!0,name:"infoURL",value:r.infoURL,onChange:m,className:"form-control",placeholder:"Info URL"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",className:"btn btn-dark btn-sm",value:"Create Blog"})))))))),l.a.createElement("div",{style:{marginBottom:"100px"}})))},T=t(11),j=Object(T.combineReducers)(Object(b.a)({},"blogRedux",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case"FETCH_ALL_BLOGS_REQUEST":case"CREATE_BLOG_REQUEST":case"FETCH_BLOG_REQUEST":case"UPDATE_BLOG_REQUEST":case"DELETE_BLOG_REQUEST":return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case"FETCH_ALL_BLOGS_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,blogs:n});case"CREATE_BLOG_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case"FETCH_BLOG_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,selectedBlog:n});case"UPDATE_BLOG_FORM":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,selectedBlog:Object(f.a)(Object(f.a)({},e.selectedBlog),{},Object(b.a)({},n.key,n.value))});case"UPDATE_BLOG_SUCCESS":case"DELETE_BLOG_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{loading:!1});case"FETCH_ALL_BLOGS_FAILURE":case"CREATE_BLOG_FAILURE":case"FETCH_BLOG_FAILURE":case"UPDATE_BLOG_FAILURE":case"DELETE_BLOG_FAILURE":return Object(f.a)(Object(f.a)({},e),{},{loading:!1,errorMessage:n});default:return e}}))),F=t(38),A=t(39),G=t.n(A),I=t(40),k=[G.a,I.a],D=Object(T.createStore)(j,Object(F.composeWithDevTools)(T.applyMiddleware.apply(void 0,k))),H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{store:D},l.a.createElement(m.a,null,l.a.createElement(s,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:o}),l.a.createElement(i.a,{exact:!0,path:"/blogs",component:B}),l.a.createElement(i.a,{exact:!0,path:"/admin",component:L}),l.a.createElement(i.a,{exact:!0,path:"/create-blog",component:x}),l.a.createElement(i.a,{exact:!0,path:"/update-blog/:id",component:R})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.110b8136.chunk.js.map