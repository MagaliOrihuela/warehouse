"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[536],{960:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(3645),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,".tools-shades[data-v-bb02d7c8]{margin-top:28px}",""]);const s=r},2536:(t,e,n)=>{n.r(e),n.d(e,{default:()=>y});var o=n(2577),r=n(629),s=n(7541);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const a={data:function(){return{accessModules:[],accessSubmoduls:[]}},methods:{dataSubmoduls:function(){this.accessModules=s.Z.getters["auth/getAccessModule"];var t=this.accessModules.find((function(t){return 4===t.module_id})).access_submoduls;this.accessSubmoduls=t}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,r.Se)({getAccessModule:"auth/getAccessModule"})),created:function(){this.dataSubmoduls()}};var l=n(3379),d=n.n(l),b=n(960),m={insert:"head",singleton:!1};d()(b.Z,m);b.Z.locals;var f=n(1900);const v=(0,f.Z)(a,(function(){var t=this,e=t._self._c;return e("div",[e("v-card",{staticClass:"mx-auto rounded-0 border-0 tools-shades",attrs:{"max-width":"99%",elevation:"0",transition:"scale-transition"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",t._l(t.accessSubmoduls,(function(n){return e("v-col",{key:n.submodule_id,attrs:{lg:"3",md:"6",sm:"12"}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"text-h6 mb-1"},[t._v("\n                  "+t._s(n.submodule)+"\n                ")])],1),t._v(" "),e("v-list-item-avatar",{attrs:{tile:"",size:"80"}},[e("v-icon",{attrs:{size:"58"}},[t._v(t._s(n.icon))])],1)],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{outlined:"",rounded:"",text:"",block:"",to:n.route}},[t._v("\n                Ingresar\n              ")])],1)],1)],1)})),1)],1)],1)],1)}),[],!1,null,"bb02d7c8",null).exports,p={name:"Cotizaciones",components:{ModalLoginComponent:o.Z,MenuToolsComponents:v}};const y=(0,f.Z)(p,(function(){var t=this._self._c;return t("div",[t("ModalLoginComponent"),this._v(" "),t("MenuToolsComponents")],1)}),[],!1,null,null,null).exports}}]);