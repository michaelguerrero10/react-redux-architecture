(window["webpackJsonpreact-typescript"]=window["webpackJsonpreact-typescript"]||[]).push([[0],{108:function(e,t,r){e.exports={wrapper:"LoadingIndicator_wrapper__3M33C",loaderContainer:"LoadingIndicator_loaderContainer__A450d"}},112:function(e,t,r){"use strict";r.d(t,"a",function(){return v});var n=r(22),a=r(7),c=r(11),o=r(13),u=r(12),i=r(14),s=r(108),p=r.n(s),l=r(0),f=r.n(l),O=r(3),b=r.n(O),h=r(347),v=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.isActive,a=e.className,c=b()(a,Object(n.a)({},p.a.wrapper,r));return f.a.createElement("div",{className:c},r&&f.a.createElement("div",{className:p.a.loaderContainer},f.a.createElement(h.a,{content:"Loading",active:!0,inverted:!0,size:"huge"})),t)}}]),t}(f.a.PureComponent);v.defaultProps={className:void 0,isActive:!1}},168:function(e,t,r){e.exports={wrapper:"Toasts_wrapper__17gGv"}},182:function(e,t,r){e.exports=r(346)},184:function(e,t,r){},31:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r(8),a=r.n(n),c=r(16),o=r(7),u=r(11),i=r(40),s=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"createThunkEffect",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n,c){var o,u,s,p,l,f=arguments;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(r(e.createAction(n)),o=f.length,u=new Array(o>3?o-3:0),s=3;s<o;s++)u[s-3]=f[s];return t.next=4,c.apply(void 0,u);case 4:return p=t.sent,l=p instanceof i.a,r(e.createAction("".concat(n,"_FINISHED"),p,l)),t.abrupt("return",p);case 8:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"createAction",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{type:e,payload:t,error:r,meta:n}}}]),e}()},346:function(e,t,r){"use strict";r.r(t);var n=r(8),a=r.n(n),c=r(16),o=(r(184),r(0)),u=r.n(o),i=r(37),s=r.n(i),p=r(45),l=r(173),f=r(54),O=r(38),b=r(157),h=r(158),v=r(126),d=r(159),j=r.n(d),E=r(47),y=r(64),m=r(22),w=r(7),S=r(11);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var k=function(){function e(){Object(w.a)(this,e)}return Object(S.a)(e,null,[{key:"reducer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.initialState,r=arguments.length>1?arguments[1]:void 0,n=r.type.includes("REQUEST_");if(!1===n)return t;var a=r.type.replace("_FINISHED",""),c=r.type.includes("_FINISHED");return _({},t,Object(m.a)({},a,!1===c))}}]),e}();k.initialState={};var T=r(174),D=r(155),I=r(31),P=function(){function e(){Object(w.a)(this,e)}return Object(S.a)(e,null,[{key:"removeById",value:function(t){return I.a.createAction(e.REMOVE,t)}},{key:"clearAll",value:function(){return I.a.createAction(e.CLEAR_ALL)}}]),e}();function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}P.CLEAR_ALL="ErrorAction.CLEAR_ALL",P.REMOVE="ErrorAction.REMOVE";var x=function(){function e(){Object(w.a)(this,e)}return Object(S.a)(e,null,[{key:"reducer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.initialState,r=arguments.length>1?arguments[1]:void 0,n=r.type,a=r.error,c=r.payload;if(n===P.REMOVE)return Object.entries(t).reduce(function(e,t){var r=Object(D.a)(t,2),n=r[0],a=r[1];return a.id!==c&&(e[n]=a),e},{});if(n===P.CLEAR_ALL)return e.initialState;var o=n.includes("_FINISHED"),u=n.includes("REQUEST_")&&!o;if(u){t["".concat(n,"_FINISHED")];var i=Object(T.a)(t,["".concat(n,"_FINISHED")]);return i}var s=o&&Boolean(a);return!1===s?t:R({},t,Object(m.a)({},n,c))}}]),e}();x.initialState={};var C,U,H,q=r(13),N=r(12),Q=r(14),L=r(66),M=function e(){var t=this;Object(w.a)(this,e),this.initialState={},this.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.initialState,r=arguments.length>1?arguments[1]:void 0,n=t[r.type];return!n||r.error?e:n.call(t,e,r)}};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}C=L.a.REQUEST_SHOW_FINISHED,U=L.a.REQUEST_EPISODES_FINISHED,H=L.a.REQUEST_CAST_FINISHED;var B,V,z=function(e){function t(){var e,r;Object(w.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(q.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(a)))).initialState={currentShowId:"74",show:null,episodes:[],actors:[]},r}return Object(Q.a)(t,e),Object(S.a)(t,[{key:C,value:function(e,t){return W({},e,{show:t.payload})}},{key:U,value:function(e,t){return W({},e,{episodes:t.payload})}},{key:H,value:function(e,t){return W({},e,{actors:t.payload})}}]),t}(M),G=r(77),J=r.n(G),K=function(){function e(){Object(w.a)(this,e)}return Object(S.a)(e,null,[{key:"add",value:function(t,r){return I.a.createAction(e.ADD_TOAST,{message:t,type:r,id:J()()})}},{key:"removeById",value:function(t){return I.a.createAction(e.REMOVE_TOAST,t)}}]),e}();function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(r,!0).forEach(function(t){Object(m.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}K.ADD_TOAST="ToastsAction.ADD_TOAST",K.REMOVE_TOAST="ToastsAction.REMOVE_TOAST",B=K.ADD_TOAST,V=K.REMOVE_TOAST;var Z,$=function(e){function t(){var e,r;Object(w.a)(this,t);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(r=Object(q.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(a)))).initialState={items:[]},r}return Object(Q.a)(t,e),Object(S.a)(t,[{key:B,value:function(e,t){return Y({},e,{items:[].concat(Object(f.a)(e.items),[t.payload])})}},{key:V,value:function(e,t){var r=t.payload;return Y({},e,{items:e.items.filter(function(e){return e.id!==r})})}}]),t}(M);!function(e){e.Error="error",e.Warning="warning",e.Success="success"}(Z||(Z={}));var ee,te=Z,re=function(){return function(e){return function(e){return function(t){if(t.error){var r=t;e(K.add(r.payload.message,te.Error))}e(t)}}}},ne=function(e,t){var r=[E.a.isDevelopment?j.a:null,b.a,Object(v.a)(t),re()].filter(Boolean);return Object(O.createStore)(function(e){var t={error:x.reducer,requesting:k.reducer,router:Object(y.b)(e),shows:(new z).reducer,toasts:(new $).reducer};return Object(O.combineReducers)(t)}(t),e,Object(h.composeWithDevTools)(O.applyMiddleware.apply(void 0,Object(f.a)(r))))},ae=r(30);!function(e){e.Home="/",e.Episodes="/episodes",e.About="/about"}(ee||(ee={}));var ce=ee,oe=r(357),ue=r(356),ie=r(104),se=function(e){return o.createElement(ie.a,Object.assign({exact:!0},e,{activeClassName:"active"}))},pe=function(e){function t(){return Object(w.a)(this,t),Object(q.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return o.createElement(oe.a,{inverted:!0},o.createElement(ue.a,{inverted:!0,pointing:!0,secondary:!0},o.createElement(ue.a.Item,{as:se,to:ce.Home,name:"Home"}),o.createElement(ue.a.Item,{as:se,to:ce.Episodes,name:"Episodes"}),o.createElement(ue.a.Item,{as:se,to:ce.About,name:"About"})))}}]),t}(o.PureComponent),le=r(112),fe=r(168),Oe=r.n(fe),be=r(354),he=r(355),ve=function(e){function t(){var e,r,n;Object(w.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(q.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(c)))).buttonColorMap=(r={},Object(m.a)(r,te.Error,"red"),Object(m.a)(r,te.Warning,"orange"),Object(m.a)(r,te.Success,"green"),r),n._onClickRemoveNotification=function(e){return function(t,r){n.props.dispatch(K.removeById(e))}},n}return Object(Q.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this,t=this.props.toasts;return 0===t.length?null:u.a.createElement("div",{className:Oe.a.wrapper},t.map(function(t){var r=e.buttonColorMap[t.type];return u.a.createElement(be.a,{key:t.id},u.a.createElement(be.a.Content,null,u.a.createElement(be.a.Header,{content:t.type}),u.a.createElement(be.a.Description,{content:t.message})),u.a.createElement(be.a.Content,{extra:!0},u.a.createElement(he.a,{color:r,onClick:e._onClickRemoveNotification(t.id)},"Close")))}))}}]),t}(u.a.Component),de=Object(p.c)(function(e,t){return{toasts:e.toasts.items}})(ve),je=Object(o.lazy)(function(){return r.e(3).then(r.bind(null,369))}),Ee=Object(o.lazy)(function(){return Promise.all([r.e(5),r.e(7)]).then(r.bind(null,372))}),ye=Object(o.lazy)(function(){return r.e(4).then(r.bind(null,370))}),me=Object(o.lazy)(function(){return r.e(6).then(r.bind(null,368))}),we=function(e){function t(){return Object(w.a)(this,t),Object(q.a)(this,Object(N.a)(t).apply(this,arguments))}return Object(Q.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return u.a.createElement(y.a,{history:this.props.history},u.a.createElement(o.Suspense,{fallback:u.a.createElement(le.a,{isActive:!0})},u.a.createElement(pe,null),u.a.createElement(ae.c,null,u.a.createElement(ae.a,{exact:!0,path:ce.Home,component:je}),u.a.createElement(ae.a,{path:ce.Episodes,component:Ee}),u.a.createElement(ae.a,{path:ce.About,component:ye}),u.a.createElement(ae.a,{component:me})),u.a.createElement(de,null)))}}]),t}(u.a.Component);!function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n,c,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r={},n=Object(l.a)(),c=ne(r,n),o=document.getElementById("root"),function(e,t){s.a.render(u.a.createElement(p.a,{store:c},u.a.createElement(e,{history:n,dispatch:c.dispatch})),t)}(we,o);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()(window)},40:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r(7),a=r(77),c=r.n(a),o=function e(){Object(n.a)(this,e),this.id=c()(),this.status=0,this.message="",this.errors=[],this.url="",this.raw=null}},47:function(e,t,r){"use strict";var n=r(22);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var c=function(e){return{api:{shows:"".concat(e,"/shows/:showId"),episodes:"".concat(e,"/shows/:showId/episodes"),cast:"".concat(e,"/shows/:showId/cast"),errorExample:"https://httpstat.us/520"},isProduction:!0,isDevelopment:!1}}("http://api.tvmaze.com");t.a=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(r,!0).forEach(function(t){Object(n.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},c)},66:function(e,t,r){"use strict";var n=r(8),a=r.n(n),c=r(16),o=r(7),u=r(11),i=r(47),s=r(40),p=r(54),l=r(22),f=r(160),O=r.n(f),b=r(113);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(r,!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var d="GET",j="POST",E="PUT",y="DELETE",m=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"get",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n,c){var o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=n?{params:n}:void 0,t.abrupt("return",e._request({url:r,method:d},v({},o,{},c)));case 2:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n){var c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n?{data:n}:void 0,t.abrupt("return",e._request({url:r,method:j},c));case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n){var c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n?{data:n}:void 0,t.abrupt("return",e._request({url:r,method:E},c));case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(c.a)(a.a.mark(function t(r){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._request({url:r,method:y}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},{key:"_request",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n){var c,o,u,i,s,l,f,h,d,j,E,y,m,w;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Boolean(r.url)||console.error("Received ".concat(r.url," which is invalid for a endpoint url")),t.prev=1,c=v({},n,{method:r.method,url:r.url,headers:v({"Content-Type":"application/x-www-form-urlencoded"},Object(b.oc)(n).headers(void 0))}),t.next=5,O()(c);case 5:if(o=t.sent,u=o.status,i=o.data,s=o.request,!1!==i.success){t.next=9;break}return t.abrupt("return",e._fillInErrorWithDefaults({status:u,message:i.errors.join(" - "),errors:i.errors,url:s?s.responseURL:r.url,raw:o},r));case 9:return t.abrupt("return",v({},o));case 12:if(t.prev=12,t.t0=t.catch(1),!t.t0.response){t.next=20;break}return l=t.t0.response,f=l.status,h=l.statusText,d=l.data,j=d.hasOwnProperty("errors")?[h].concat(Object(p.a)(d.errors)):[h],t.abrupt("return",e._fillInErrorWithDefaults({status:f,message:j.filter(Boolean).join(" - "),errors:j,url:t.t0.request.responseURL,raw:t.t0.response},r));case 20:if(!t.t0.request){t.next=23;break}return E=t.t0.request,y=E.status,m=E.statusText,w=E.responseURL,t.abrupt("return",e._fillInErrorWithDefaults({status:y,message:m,errors:[m],url:w,raw:t.t0.request},r));case 23:return t.abrupt("return",e._fillInErrorWithDefaults({status:0,message:t.t0.message,errors:[t.t0.message],url:r.url,raw:t.t0},r));case 24:case"end":return t.stop()}},t,null,[[1,12]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"_fillInErrorWithDefaults",value:function(e,t){var r=new s.a;return r.status=e.status||0,r.message=e.message||"Error requesting data",r.errors=e.errors.length?e.errors:["Error requesting data"],r.url=e.url||t.url,r.raw=e.raw,r.errors=r.errors.filter(Boolean),r}}]),e}(),w=r(13),S=r(12),g=r(14),_=r(26),k=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).name="",r.code="",r.timezone="",r.update(e),r}return Object(g.a)(t,e),t}(_.a),T=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).id=0,r.name="",r.country=k,r.update(e),r}return Object(g.a)(t,e),t}(_.a),D=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).medium="",r.original="",r.update(e),r}return Object(g.a)(t,e),t}(_.a),I=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).id=0,r.name="",r.summary="",r.genres=[],r.network=T,r.image=D,r.update(e),r}return Object(g.a)(t,e),t}(_.a),P=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).id=0,r.season=0,r.number=0,r.name="",r.airdate="",r.image=D,r.summary="",r.update(e),r}return Object(g.a)(t,e),t}(_.a),A=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).id=0,r.name="",r.birthday="",r.image=D,r.update(e),r}return Object(g.a)(t,e),t}(_.a),R=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).id=0,r.name="",r.image=D,r.update(e),r}return Object(g.a)(t,e),t}(_.a),x=function(e){function t(e){var r;return Object(o.a)(this,t),(r=Object(w.a)(this,Object(S.a)(t).call(this))).person=A,r.character=R,r.self=!1,r.voice=!1,r.update(e),r}return Object(g.a)(t,e),t}(_.a),C=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"getToModel",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n,c){var o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get(n,c);case 2:return o=t.sent,t.abrupt("return",e._restModelCreator(r,o));case 4:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"postToModel",value:function(){var t=Object(c.a)(a.a.mark(function t(r,n,c){var o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.post(n,c);case 2:return o=t.sent,t.abrupt("return",e._restModelCreator(r,o));case 4:case"end":return t.stop()}},t)}));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"_restModelCreator",value:function(e,t){return t instanceof s.a?t:Array.isArray(t.data)?t.data.map(function(t){return new e(t)}):new e(t.data)}}]),e}(),U=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"requestShow",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.a.api.shows.replace(":showId",t),e.abrupt("return",C.getToModel(I,r));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestEpisodes",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.a.api.episodes.replace(":showId",t),e.abrupt("return",C.getToModel(P,r));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestCast",value:function(){var e=Object(c.a)(a.a.mark(function e(t){var r,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.a.api.cast.replace(":showId",t),e.next=3,m.get(r);case 3:if(!((n=e.sent)instanceof s.a)){e.next=6;break}return e.abrupt("return",n);case 6:return e.abrupt("return",n.data.map(function(e){return new x(e)}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestError",value:function(){var e=Object(c.a)(a.a.mark(function e(){var t,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.a.api.errorExample,e.next=3,m.get(t);case 3:if(!((r=e.sent)instanceof s.a)){e.next=6;break}return e.abrupt("return",r);case 6:return e.abrupt("return",r.data);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),e}(),H=r(31);r.d(t,"a",function(){return q});var q=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,null,[{key:"requestShow",value:function(){return function(){var t=Object(c.a)(a.a.mark(function t(r,n){var c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().shows.currentShowId,t.next=3,H.a.createThunkEffect(r,e.REQUEST_SHOW,U.requestShow,c);case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}},{key:"requestEpisodes",value:function(){return function(){var t=Object(c.a)(a.a.mark(function t(r,n){var c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().shows.currentShowId,t.next=3,H.a.createThunkEffect(r,e.REQUEST_EPISODES,U.requestEpisodes,c);case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}},{key:"requestCast",value:function(){return function(){var t=Object(c.a)(a.a.mark(function t(r,n){var c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=n().shows.currentShowId,t.next=3,H.a.createThunkEffect(r,e.REQUEST_CAST,U.requestCast,c);case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}},{key:"requestError",value:function(){return function(){var t=Object(c.a)(a.a.mark(function t(r,n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.a.createThunkEffect(r,e.REQUEST_ERROR,U.requestError);case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()}}]),e}();q.REQUEST_SHOW="ShowsAction.REQUEST_SHOW",q.REQUEST_SHOW_FINISHED="ShowsAction.REQUEST_SHOW_FINISHED",q.REQUEST_EPISODES="ShowsAction.REQUEST_EPISODES",q.REQUEST_EPISODES_FINISHED="ShowsAction.REQUEST_EPISODES_FINISHED",q.REQUEST_CAST="ShowsAction.REQUEST_CAST",q.REQUEST_CAST_FINISHED="ShowsAction.REQUEST_CAST_FINISHED",q.REQUEST_ERROR="ShowsAction.REQUEST_ERROR",q.REQUEST_ERROR_FINISHED="ShowsAction.REQUEST_ERROR_FINISHED"}},[[182,1,2]]]);
//# sourceMappingURL=main.9233149b.chunk.js.map