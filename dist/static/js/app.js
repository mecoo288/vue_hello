webpackJsonp([2,1],[function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(12),u=o(r),i=n(13),d=o(i),a=n(18),s=o(a),c=n(16);n(17);var l=n(7),f=o(l);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){f.default.attach(document.body)},!1),u.default.use(d.default);var v=new d.default({routes:s.default,mode:c.routerMode,strict:!1});new u.default({router:v}).$mount("#app")},,,,,function(e,t){},,,function(e,t,n){n(5);var o=n(1)(n(14),n(10),null,null);e.exports=o.exports},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=void 0,r=void 0,u="https://fuss10.elemecdn.com";t.baseUrl=o="https://mainsite-restapi.ele.me",t.routerMode=r="hash",t.baseUrl=o,t.routerMode=r,t.imgBaseUrl=u},function(e,t){"use strict";!function(e,t){var n=e.documentElement,o="orientationchange"in window?"orientationchange":"resize",r=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(o,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(document,window)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),u=o(r),i=function(e){return n.e(0,function(){return e(n(9))})};t.default=[{path:"/",component:u.default,children:[{path:"",redirect:"/login"},{path:"/login",component:i}]}]}]);