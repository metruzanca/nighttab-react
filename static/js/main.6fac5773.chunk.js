(this["webpackJsonpnighttab-react"]=this["webpackJsonpnighttab-react"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),c=n(15),i=n.n(c),a=n(8),s=n(11),l=n(25),d=n(7),u=n(5),b=n(17),j=[],h={name:{show:!0,text:""},openAll:{show:!0},items:[]},O={display:{direction:"vertical",order:"visualname",alignment:"centercenter",gutter:2,rotate:0,translate:{x:0,y:0},visual:{show:!0,type:"letter",letter:{size:3,text:""},image:{size:4,url:""},icon:{size:3,name:"",prefix:"",label:""},shadow:{size:0}},name:{show:!0,text:"",size:.9}},url:"",accent:{by:"theme",hsl:{h:0,s:0,l:0},rgb:{r:0,g:0,b:0}},color:{by:"theme",hsl:{h:0,s:0,l:0},rgb:{r:0,g:0,b:0},opacity:1},wide:!1,tall:!1,searchMatch:!1,timeStamp:1623971654999,background:{show:!1,type:"video",opacity:1,image:{url:""},video:{url:""}}},g={init:function(){return{type:"bookmarks/INIT"}},createGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{type:"bookmarks/CREATE_GROUP",payload:{group:Object(u.a)(Object(u.a)({},e),{},{items:[]}),index:t}}},deleteGroup:function(e){return{type:"bookmarks/DELETE_GROUP",payload:e}},editGroup:function(e,t){return{type:"bookmarks/EDIT_GROUP",payload:{group:e,index:t}}},moveGroup:function(e,t){return{type:"bookmarks/MOVE_GROUP",payload:{from:e,to:t}}},createBookmark:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;return{type:"bookmarks/CREATE_BOOKMARK",payload:{bookmark:e,group:t,index:n}}},editBookmark:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2?arguments[2]:void 0;return{type:"bookmarks/EDIT_BOOKMARK",payload:{bookmark:e,group:t,index:n}}},deleteBookmark:function(e,t){return{type:"bookmarks/DELETE_BOOKMARK",payload:{group:e,index:t}}},moveBookmark:function(e,t,n){return{type:"bookmarks/MOVE_BOOKMARK",payload:{group:e,from:t,to:n}}}},p={editing:!1},f={header:{area:{width:100,justify:"center",align:"center"},item:{justify:"left"},greeting:{show:!1,type:"good",name:"",size:1,newLine:!1},clock:{hours:{show:!0,display:"number"},minutes:{show:!0,display:"number"},seconds:{show:!1,display:"number"},separator:{show:!0,text:""},meridiem:{show:!0},hour24:{show:!0},size:1,newLine:!1},transitional:{show:!1,type:"timeanddate",size:1,newLine:!1},date:{day:{show:!0,display:"word",weekStart:"monday",length:"long"},date:{show:!0,display:"number",ordinal:!0},month:{show:!0,display:"word",length:"long",ordinal:!0},year:{show:!1,display:"number"},separator:{show:!0,text:""},format:"datemonth",size:1,newLine:!1},search:{show:!0,style:"box",width:{by:"auto",size:30},focus:!1,engine:{selected:"google",google:{url:"https://www.google.com/search",name:"Google"},duckduckgo:{url:"https://duckduckgo.com/",name:"DuckDuckGo"},youtube:{url:"https://www.youtube.com/results?search_query=",name:"YouTube"},giphy:{url:"https://giphy.com/search/",name:"Giphy"},bing:{url:"https://www.bing.com/search?q=",name:"Bing"},custom:{url:"",name:"",queryName:""}},text:{justify:"center"},size:1,opacity:1,newLine:!1,newTab:!1},editAdd:{show:!0,size:1,opacity:1,newLine:!1},colorAccent:{dot:{show:!0},show:!0,size:1,opacity:1,newLine:!1},menu:{show:!0,size:1,opacity:1,newLine:!1},order:["greeting","transitional","clock","date","search","editAdd","colorAccent","menu"],border:{top:0,bottom:0},color:{by:"theme",hsl:{h:0,s:0,l:0},rgb:{r:0,g:0,b:0},style:"scroll",opacity:.95,show:!1,newLine:!1},position:"inline",radius:!1},link:{area:{width:100,direction:"ltr",justify:"center"},item:{color:{by:"theme",hsl:{h:0,s:0,l:0},rgb:{r:0,g:0,b:0},opacity:1},accent:{by:"theme",hsl:{h:0,s:0,l:0},rgb:{r:0,g:0,b:0}},background:{opacity:1},display:{visual:{letter:{size:3},icon:{size:3},image:{size:3},shadow:{size:0}},name:{show:!0,size:.9},gutter:2,direction:"vertical",order:"visualname",alignment:"centercenter",rotate:0,translate:{x:0,y:0}},url:{show:!0},line:{show:!0},shadow:{show:!0},hoverScale:{show:!0},newTab:!1,size:1,border:0},show:!0,add:!1,edit:!1,style:"block",orientation:"bottom",breakpoint:"lg"},group:{area:{justify:"left"},name:{show:!0,size:1},openAll:{show:!0,size:1,opacity:1},border:0,order:"headerbody",add:!1,edit:!1},layout:{alignment:"centercenter",order:"headerlink",direction:"vertical",padding:4,gutter:2,size:1,width:80,scrollPastEnd:!1,scrollbars:"auto",title:""},theme:{accent:{hsl:{h:221,s:100,l:50},rgb:{r:0,g:80,b:255},random:{active:!1,style:"any"},cycle:{active:!1,speed:300,step:10}},color:{hsl:{h:222,s:14,l:56},rgb:{r:129,g:138,b:160},contrast:{light:4,dark:4},generated:{negative:{1:{r:117,g:127,b:151},2:{r:107,g:117,b:142},3:{r:98,g:107,b:130},4:{r:89,g:98,b:118},5:{r:80,g:88,b:107},6:{r:72,g:78,b:95},7:{r:63,g:69,b:83},8:{r:54,g:59,b:72},9:{r:45,g:50,b:60},10:{r:37,g:40,b:48}},positive:{1:{r:141,g:149,b:169},2:{r:152,g:160,b:178},3:{r:164,g:170,b:186},4:{r:176,g:181,b:195},5:{r:187,g:192,b:204},6:{r:199,g:203,b:213},7:{r:210,g:214,b:221},8:{r:222,g:224,b:230},9:{r:234,g:235,b:239},10:{r:245,g:246,b:248}}}},font:{display:{name:"",weight:400,style:"normal"},ui:{name:"",weight:400,style:"normal"}},style:"dark",radius:.25,shadow:.75,shade:{opacity:.4},custom:{all:[],edit:!1}},background:{color:{by:"theme",hsl:{h:0,s:0,l:0},rgb:{r:0,g:0,b:0}},visual:{show:!1,type:"video",image:{type:"file",file:{name:"",data:""},url:""},video:{url:""},blur:0,scale:1,opacity:1,grayscale:0,accent:0,vignette:{opacity:0,start:90,end:70}}},pagelock:!1,shade:!1,edge:!1,search:!1,menu:!1,modal:!1,dropdown:!1,autoSuggest:!1},m=Object(s.combineReducers)({bookmarks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"bookmarks/CREATE_GROUP":var n=-1===t.payload.index?e.length:t.payload.index,r=Object(b.a)(e);return r.splice(n,0,t.payload.group),r;case"bookmarks/DELETE_GROUP":return e.filter((function(e,n){return n!==t.payload}));case"bookmarks/EDIT_GROUP":return e.map((function(e,n){return n===t.payload.index?{items:e.items,name:Object(u.a)(Object(u.a)({},e.name),t.payload.group.name),openAll:Object(u.a)(Object(u.a)({},e.openAll),t.payload.group.openAll)}:e}));case"bookmarks/MOVE_GROUP":var o=Object(b.a)(e),c=o.splice(t.payload.from,1),i=Object(d.a)(c,1),a=i[0];return o.splice(t.payload.to,0,a),o;case"bookmarks/CREATE_BOOKMARK":var s=-1===t.payload.index?e.length:t.payload.index,l=Object(b.a)(e);return l[t.payload.group].items.splice(s,0,t.payload.bookmark),l;case"bookmarks/EDIT_BOOKMARK":return console.error("EDIT_BOOKMARK is a work in progress... \xaf\\_(\u30c4)_/\xaf"),e;case"bookmarks/DELETE_BOOKMARK":return e.map((function(e,n){return n===t.payload.group?Object(u.a)(Object(u.a)({},e),{},{items:e.items.map((function(e,n){return t.payload.index,e}))}):e}));case"bookmarks/MOVE_BOOKMARK":default:return e}},edit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"edit/SET_EDITING":return{editing:t.payload};case"edit/TOGGLE_EDITING":return{editing:!e.editing};default:return e}},state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),v=g,x={setEditing:function(e){return{type:"edit/SET_EDITING",payload:e}},toggle:function(){return{type:"edit/TOGGLE_EDITING"}}};function y(e){switch(e){default:case"localstorage":return{save:function(e){try{localStorage.setItem("nighttab",JSON.stringify(e))}catch(t){console.error(t)}},load:function(){var e=localStorage.getItem("nighttab");if(e)return JSON.parse(e)}};case"nighttab-servers":case"selfhosted":return{save:function(e){},load:function(){}}}}var k,w,E=Object(l.composeWithDevTools)({}),A=y("localstorage"),M=Object(s.createStore)(m,A.load(),E(Object(s.applyMiddleware)((k=A,function(e){return function(t){return function(n){var r=t(n);return k.save(e.getState()),r}}})))),z=M;w=M.dispatch,window.App={setEditing:function(e){w(x.setEditing(e))},toggleEditing:function(){w(x.toggle())},createGroup:function(e){w(v.createGroup(e))},deleteGroup:function(e){w(v.deleteGroup(e))},editGroup:function(e,t){w(v.editGroup(e,t))},moveGroup:function(e,t){w(v.moveGroup(e,t))},createBookmark:function(){w(v.createBookmark())}};var I=n(2),G=n(3),T=n(44),C=n(6);function S(e){var t=e.r,n=e.g,r=e.b;t/=255,n/=255,r/=255;var o=Math.min(t,n,r),c=Math.max(t,n,r),i=c-o,a=0;a=0===i?0:c===t?(n-r)/i%6:c===n?(r-t)/i+2:(t-n)/i+4,(a=Math.round(60*a))<0&&(a+=360);var s=(c+o)/2;return{h:a,s:+(100*(0===i?0:i/(1-Math.abs(2*s-1)))).toFixed(1),l:+(100*s).toFixed(1)}}function D(e){var t=e.h,n=e.s,r=e.l;n/=100,r/=100;var o=(1-Math.abs(2*r-1))*n,c=o*(1-Math.abs(t/60%2-1)),i=function(e){return function(t,n,r){return{r:Math.round(255*(t+e)),g:Math.round(255*(n+e)),b:Math.round(255*(r+e))}}}(r-o/2);return 0<=t&&t<60?i(o,c,0):60<=t&&t<120?i(c,o,0):120<=t&&t<180?i(0,o,c):180<=t&&t<240?i(0,c,o):240<=t&&t<300?i(c,0,o):i(o,0,c)}function R(e){return e.toString(16).padStart(2,"0")}function L(e){var t=e.r,n=e.g,r=e.b,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c="#".concat(R(t)).concat(R(r)).concat(R(n));return 0!==o?c+R(o):c}function _(e){var t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2);return{r:parseInt(t,16),g:parseInt(n,16),b:parseInt(r,16)}}var B,K,P,F,U,N,J,V,q=n(0),H=G.c.div(B||(B=Object(I.a)(["\n\n"]))),W=G.c.div(K||(K=Object(I.a)(["\n\n"]))),Y=G.c.hr(P||(P=Object(I.a)(["\n\n"]))),Q=G.c.div(F||(F=Object(I.a)(["\n\n"]))),X=G.c.input(U||(U=Object(I.a)(["\n\n"]))),Z=G.c.input(N||(N=Object(I.a)(["\n  \n"]))),$=G.c.input(J||(J=Object(I.a)(["\n  \n"]))),ee=G.c.input(V||(V=Object(I.a)(["\n  \n"]))),te=function(e){return Object(q.jsx)(Z,Object(u.a)({type:"text"},e))},ne=function(e){return Object(q.jsx)(X,Object(u.a)({type:"color"},e))},re=function(e){return Object(q.jsx)($,Object(u.a)({type:"number"},e))},oe=function(e){return Object(q.jsx)(ee,Object(u.a)({type:"range"},e))};var ce,ie,ae,se,le,de,ue,be,je=function(e){Object(C.a)(e);var t=Object(r.useState)({r:0,g:0,b:0}),n=Object(d.a)(t,2),o=n[0],c=n[1],i=o.r,a=o.g,s=o.b,l=Object(r.useMemo)((function(){return S(o)}),[o]),b=l.h,j=l.s,h=l.l;function O(e){c(Object(u.a)(Object(u.a)({},o),e))}function g(e){c(D(Object(u.a)(Object(u.a)({},l),e)))}return Object(q.jsx)(H,{children:Object(q.jsxs)(W,{children:[Object(q.jsx)(Oe,{color:o,onChange:function(e){return c(e)}}),Object(q.jsx)(Y,{}),Object(q.jsx)(he,{label:"Hue",max:359,value:b,onInput:function(e){return g({h:e})}}),Object(q.jsx)(he,{label:"Saturation",max:100,value:j,onInput:function(e){return g({s:e})}}),Object(q.jsx)(he,{label:"Lightness",max:100,value:h,onInput:function(e){return g({l:e})}}),Object(q.jsx)(Y,{}),Object(q.jsx)(he,{label:"Red",onInput:function(e){return O({r:e})},value:i}),Object(q.jsx)(he,{label:"Green",onInput:function(e){return O({g:e})},value:a}),Object(q.jsx)(he,{label:"Blue",onInput:function(e){return O({b:e})},value:s}),Object(q.jsx)(Y,{})]})})},he=function(e){var t=e.label,n=e.onInput,o=e.value,c=e.max,i=void 0===c?255:c,a=Object(r.useRef)(Object(T.a)()),s=function(e){return n(parseInt(e.target.value))};return Object(q.jsx)(H,{children:Object(q.jsxs)(Q,{children:[Object(q.jsx)("label",{htmlFor:a.current,children:t}),Object(q.jsx)(oe,{id:a.current,value:o,onInput:s,max:i,min:0}),Object(q.jsx)(re,{value:o,onInput:s,max:i,min:0})]})})},Oe=function(e){var t=e.color,n=e.onChange;return Object(q.jsx)(H,{children:Object(q.jsxs)(Q,{children:[Object(q.jsx)(ne,{value:L(t),onChange:function(e){return n(_(e.target.value))}}),Object(q.jsx)(te,{onFocus:function(){},onBlur:function(){},value:L(t),onChange:function(e){return n(_(e.target.value))}})]})})},ge=G.c.input(ce||(ce=Object(I.a)(["\n  color: red;\n"]))),pe=function(e){var t=e.onFileChanged;return Object(q.jsx)(ge,{type:"file",onChange:function(e){var n;if(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.files){var r,o=null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.files[0],c=new FileReader;c.onload=function(e){var n,r;"string"===typeof(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.result)?t({file:null===e||void 0===e||null===(r=e.target)||void 0===r?void 0:r.result}):t({error:"Invalid file format"})},c.readAsText(o)}}})};!function(e){e[e.left=0]="left",e[e.right=1]="right",e[e.center=2]="center"}(be||(be={}));var fe,me,ve,xe,ye=G.c.div(le||(le=Object(I.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  display: flex;\n  ","\n  align-items: center;\n"])),(function(e){return function(e){switch(e){default:case be.center:return Object(G.b)(ie||(ie=Object(I.a)(["\n      justify-content: center;\n    "])));case be.left:return Object(G.b)(ae||(ae=Object(I.a)(["\n      justify-content: flex-start;\n    "])));case be.right:return Object(G.b)(se||(se=Object(I.a)(["\n      justify-content: flex-end;\n    "])))}}(e.position)})),ke=G.c.section(de||(de=Object(I.a)(["\n  z-index: 11;\n"]))),we=G.c.div(ue||(ue=Object(I.a)(["\n  background-color: rgba(78, 78, 214, .3);\n  position: fixed;\n  top: -1em;\n  left: -1em;\n  width: 101vw;\n  height: 1001vh;\n  /* transition: opacity var(--layout-transition-extra-fast),background-color var(--layout-transition-extra-fast); */\n  z-index: 10;\n  /* TODO use cssvar here */\n  /* z-index: var(--z-index-shade); */\n"]))),Ee=function(e){var t,n,o=e.closeMenu,c=e.position,i=e.children,a=Object(r.useRef)(null);return t=a,n=o,Object(r.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&n(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[t,n]),Object(q.jsxs)(ye,{position:c,children:[Object(q.jsx)(ke,{ref:a,children:i}),Object(q.jsx)(we,{})]})},Ae=G.c.div(fe||(fe=Object(I.a)(["\n  background-color: #302929;\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: .5em;\n  display: flex;\n  flex-direction: column;\n  z-index: 1000;\n"]))),Me=G.c.button(me||(me=Object(I.a)(["\n  background-color: #000000;\n  color: red;\n  padding: .5em;\n  margin: .4em 0;\n  border-radius: .5em;\n  &:hover{\n    background-color: #1f1f1f;\n  }\n  cursor: pointer;\n"]))),ze=G.c.div(ve||(ve=Object(I.a)(["\n  background-color: #302929;\n  color: red;\n  margin-bottom: .5em;\n"]))),Ie=G.c.div(xe||(xe=Object(I.a)(["\n  height: 500px;\n  width: 500px;\n  background: lime;\n"])));function Ge(e,t){var n=Object(r.useState)(!1),o=Object(d.a)(n,2),c=o[0],i=o[1];return{Modal:Object(q.jsx)(q.Fragment,{children:c&&Object(q.jsx)(Ee,{position:e,closeMenu:function(){return i(!1)},children:Object(q.jsx)(Ie,{children:t})})}),setOpen:function(){return i(!0)}}}var Te,Ce,Se,De,Re,Le,_e,Be,Ke,Pe,Fe=function(e){Object(C.a)(e);var t=Object(a.c)((function(e){return e.edit.editing})),n=Object(a.b)(),o=Ge(be.center,"Add bookmark/group"),c=o.Modal,i=o.setOpen,s=Ge(be.right,"Settings"),l=s.Modal,u=s.setOpen,b=Ge(be.left,Object(q.jsx)(je,{})),j=b.Modal,h=b.setOpen,O=Object(r.useState)(null),g=Object(d.a)(O,2),p=g[0],f=g[1];return Object(q.jsxs)(Ae,{children:[Object(q.jsx)(ze,{children:"Debug Tools"}),Object(q.jsx)(Me,{onClick:function(){return n(x.setEditing(!t))},children:"Toggle Edit Mode"}),Object(q.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(q.jsx)(Me,{onClick:h,children:"Modal Left with colorPicker"}),Object(q.jsx)(Me,{onClick:i,children:"Modal Center"}),Object(q.jsx)(Me,{onClick:u,children:"Modal Right"})]}),Object(q.jsxs)("div",{children:[Object(q.jsx)(pe,{onFileChanged:function(e){e.error,(null===e||void 0===e?void 0:e.file)&&f(e.file)}}),Object(q.jsx)(Me,{onClick:function(){return p&&function(e){var t=JSON.parse(e);y("localstorage").save(t)}(p)},children:"Inject Uploaded Config"}),Object(q.jsx)(Me,{onClick:function(){return localStorage.clear()},children:"Delete Config"})]}),j,c,l]})},Ue=G.c.div(Te||(Te=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ne=G.c.div(Ce||(Ce=Object(I.a)(["\n  display: flex;\n"]))),Je=G.c.h1(Se||(Se=Object(I.a)(["\n  \n"]))),Ve=G.c.div(De||(De=Object(I.a)(["\n  background-color:red;\n  & > * {\n    background-color: white;\n    height:50px;\n    width: 50px;\n    &:hover {\n      background-color: blue;\n    }\n  }  \n"]))),qe=G.c.button(Re||(Re=Object(I.a)(["\n  \n"]))),He=G.c.div(Le||(Le=Object(I.a)(["\n  display: inline-block;\n"]))),We=G.c.button(_e||(_e=Object(I.a)(["\n  \n"]))),Ye=G.c.button(Be||(Be=Object(I.a)(["\n  \n"]))),Qe=G.c.button(Ke||(Ke=Object(I.a)(["\n  \n"]))),Xe=G.c.div(Pe||(Pe=Object(I.a)(["\n  background-color: transparent;\n  font-size: var(--link-item-size);\n  /* position: relative; */\n  display: grid;\n  grid-auto-rows: var(--link-item-height);\n  grid-gap: calc(var(--layout-space) * var(--layout-gutter));\n  grid-template-columns: repeat(auto-fill, minmax(var(--link-item-width), 1fr));\n  grid-auto-flow: dense;\n"]))),Ze=n(10),$e=n(9),et={Edit:Object(q.jsx)($e.a,{icon:Ze.f}),Delete:Object(q.jsx)($e.a,{icon:Ze.g}),LeftArrow:Object(q.jsx)($e.a,{icon:Ze.c}),RightArrow:Object(q.jsx)($e.a,{icon:Ze.d}),UpArrow:Object(q.jsx)($e.a,{icon:Ze.e}),DownArrow:Object(q.jsx)($e.a,{icon:Ze.b}),Drag:Object(q.jsx)($e.a,{icon:Ze.a})},tt=".25em",nt="11em",rt="10em";var ot,ct,it,at,st,lt,dt,ut,bt,jt,ht,Ot,gt,pt,ft,mt=function(e){var t=e.items,n=e.name,r=(e.openAll,e.editing);return Object(q.jsxs)(Ue,{children:[Object(q.jsxs)(Ne,{children:[r&&Object(q.jsxs)(Ve,{children:[Object(q.jsx)(qe,{children:et.UpArrow}),Object(q.jsx)(He,{children:et.Drag}),Object(q.jsx)(We,{children:et.DownArrow}),Object(q.jsx)(Ye,{children:et.Edit}),Object(q.jsx)(Qe,{children:et.Delete})]}),n.show&&Object(q.jsx)(Je,{children:n.text})]}),Object(q.jsx)(Xe,{children:t.map((function(e){return Object(q.jsx)(o.a.Fragment,{children:Object(q.jsx)(en,Object(u.a)({editing:r},e),Object(T.a)())},Object(T.a)())}))})]})},vt=G.c.header(ot||(ot=Object(I.a)(["\n  display: flex;\n  color: red;\n  & > * {\n    margin-right: .5em;\n  }\n"]))),xt=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"Clock"})},yt=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"Date"})},kt=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"Greeting"})},wt=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"SearchBar"})},Et=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"Transitional"})},At=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"ColorAccent"})},Mt=function(e){return Object(C.a)(e),Object(q.jsx)("div",{children:"EditAdd"})},zt=function(e){var t=e.setOpen;return Object(q.jsx)("button",{onClick:t,children:"Menu"})},It=new Map([["clock",Object(q.jsx)(xt,{})],["date",Object(q.jsx)(yt,{})],["greeting",Object(q.jsx)(kt,{})],["searchbar",Object(q.jsx)(wt,{})],["transitional",Object(q.jsx)(Et,{})]]),Gt=["greeting","transitional","clock","date","search","editAdd","colorAccent","menu"],Tt=function(e){var t=e.setOpen,n=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("button",{onClick:function(){return o(!0)},children:"Debug"}),n&&Object(q.jsx)(Ee,{closeMenu:function(){return o(!1)},position:be.right,children:Object(q.jsx)(Fe,{})})]});return null}();It.set("coloraccent",Object(q.jsx)(At,{})),It.set("editadd",Object(q.jsx)(Mt,{})),It.set("menu",Object(q.jsx)(zt,{setOpen:t}));var o=function(e,t){var n=[];return e.forEach((function(e){var r=t.get(e);n.push(r)})),n}(Gt,It);return Object(q.jsxs)(vt,{children:[o,n]})};var Ct,St,Dt,Rt,Lt,_t,Bt,Kt,Pt,Ft=G.c.div(ct||(ct=Object(I.a)(["\n  background-color: #413d69;\n  color: white;\n  & > a:visited {\n    color: lightblue;\n  }\n  /*I placed this here for initial development. Should be removed later */\n  width: ",";\n  height: ",";\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  margin: 1em;\n"])),nt,rt),Ut=G.c.a(it||(it=Object(I.a)(["\n\n"]))),Nt=G.c.div(at||(at=Object(I.a)(["\n\n"]))),Jt=G.c.a(st||(st=Object(I.a)(["\n\n"]))),Vt=G.c.p(lt||(lt=Object(I.a)(["\n  font-size: calc("," * var(--theme-root-font-size));\n"])),(function(e){return e.size})),qt=(G.c.div(dt||(dt=Object(I.a)(["\n\n"]))),G.c.div(ut||(ut=Object(I.a)(["\n\n"])))),Ht=G.c.div(bt||(bt=Object(I.a)(["\n\n"]))),Wt=G.c.div(jt||(jt=Object(I.a)(["\n  display: ",";\n  flex-wrap: wrap;\n"])),(function(e){return e.editing?"flex":"none"})),Yt=G.c.div(ht||(ht=Object(I.a)(["\n  flex-grow: 1;\n"]))),Qt=G.c.button(Ot||(Ot=Object(I.a)(["\n  flex-basis: 30%;\n  height: 30px;\n\n"]))),Xt=G.c.button(gt||(gt=Object(I.a)(["\n  flex-basis: 30%;\n  height: 30px;\n\n"]))),Zt=G.c.button(pt||(pt=Object(I.a)(["\n  height: 30px;\n  width: 50%;\n  /*I placed this here for initial development. Should be removed later */\n  border-bottom-left-radius: ",";\n"])),tt),$t=G.c.button(ft||(ft=Object(I.a)(["\n  height: 30px;\n  width: 50%;\n  /*I placed this here for initial development. Should be removed later */\n  border-bottom-right-radius: ",";\n"])),tt),en=function(e){var t=e.editing,n=void 0!==t&&t,r=e.display.name,o=r.show,c=r.text,i=r.size;return Object(q.jsxs)(Ft,{children:[Object(q.jsxs)(Ut,{href:"",children:[Object(q.jsxs)(Nt,{children:[Object(q.jsx)(Jt,{}),o&&Object(q.jsx)(Vt,{size:i,children:c})]}),!1]}),Object(q.jsxs)(qt,{children:[Object(q.jsx)(Ht,{children:Object(q.jsx)("p",{})}),Object(q.jsxs)(Wt,{editing:n,children:[Object(q.jsx)(Qt,{children:et.LeftArrow}),Object(q.jsx)(Yt,{children:et.Drag}),Object(q.jsx)(Xt,{children:et.RightArrow}),Object(q.jsx)(Zt,{children:et.Edit}),Object(q.jsx)($t,{children:et.Delete})]})]})]})},tn=G.c.section(Ct||(Ct=Object(I.a)(["\n  height: 95vh;\n  width: 900px;\n  background: gray;\n  margin: 2em;\n"]))),nn=G.c.div(St||(St=Object(I.a)(["\n\n"]))),rn=G.c.button(Dt||(Dt=Object(I.a)(["\n\n"]))),on=G.c.div(Rt||(Rt=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),cn=function(e){var t=e.items,n=e.onChange,r=e.subMenu;return Object(q.jsx)("div",{children:t.map((function(e,t){return Object(q.jsx)(an,{sections:e.sections,onClick:function(){return n(t)},active:t===r,title:e.title},Object(T.a)())}))})},an=function(e){var t=e.active,n=e.sections,r=e.onClick,o=e.title;return Object(q.jsxs)(nn,{children:[Object(q.jsx)(rn,{onClick:r,children:o}),Object(q.jsx)(on,{children:t&&n.map((function(e){return Object(q.jsx)("a",{href:e.href,children:e.name},Object(T.a)())}))})]})},sn=[{title:"Layout",sections:[{name:"Scaling",href:"idk yet"},{name:"Area",href:"idk yet"},{name:"Alignment",href:"idk yet"},{name:"Padding",href:"idk yet"},{name:"Gutter",href:"idk yet"},{name:"Page",href:"idk yet"}]},{title:"Header",sections:[{name:"Area",href:"idk yet"},{name:"Alignment",href:"idk yet"},{name:"Order",href:"idk yet"},{name:"Greeting",href:"idk yet"},{name:"Transitional words",href:"idk yet"},{name:"Clock",href:"idk yet"},{name:"Data",href:"idk yet"},{name:"Search",href:"idk yet"},{name:"Edit/Add",href:"idk yet"},{name:"Colour/Accent",href:"idk yet"},{name:"Settings menu",href:"idk yet"},{name:"Border",href:"idk yet"},{name:"Position when scrolling",href:"idk yet"},{name:"Background colour",href:"idk yet"}]}],ln=function(e){Object(C.a)(e);var t=Object(r.useState)(0),n=Object(d.a)(t,2),o=n[0],c=n[1];return Object(q.jsx)(tn,{children:Object(q.jsx)(cn,{items:sn,onChange:function(e){return c(e)},subMenu:o})})},dn=G.c.main(Lt||(Lt=Object(I.a)(["\n\n"]))),un=G.c.div(_t||(_t=Object(I.a)(["\n\n"]))),bn=G.c.section(Bt||(Bt=Object(I.a)(["\n\n"]))),jn=G.c.div(Kt||(Kt=Object(I.a)(["\n\n"]))),hn=Object(G.a)(Pt||(Pt=Object(I.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  button {\n    border: none;\n  }\n  /* Temporary dark mode*/\n  body {\n    background-color: black;\n  }\n\n  :root {\n    font-size: var(--theme-root-font-size);\n  }\n\n  *, ::after, ::before {\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    color: white;\n  }\n"])));var On=function(){var e=Object(a.c)((function(e){return e.edit.editing})),t=Object(a.c)((function(e){return e.bookmarks})),n=Object(r.useState)(!1),o=Object(d.a)(n,2),c=o[0],i=o[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(hn,{}),Object(q.jsx)(un,{}),Object(q.jsxs)(dn,{children:[Object(q.jsx)(Tt,{setOpen:function(){return i(!0)}}),Object(q.jsx)(bn,{children:Object(q.jsx)(jn,{children:t.map((function(t){return Object(q.jsx)(mt,Object(u.a)(Object(u.a)({},t),{},{editing:e}),Object(T.a)())}))})})]}),c&&Object(q.jsx)(Ee,{closeMenu:function(){return i(!1)},position:be.right,children:Object(q.jsx)(ln,{})})]})};n(42);i.a.render(Object(q.jsx)(o.a.StrictMode,{children:Object(q.jsx)(a.a,{store:z,children:Object(q.jsx)(On,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.6fac5773.chunk.js.map