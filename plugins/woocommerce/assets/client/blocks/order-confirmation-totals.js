(()=>{var e,t,r,o={1698:(e,t,r)=>{"use strict";r.r(t);var o=r(1609);const l=window.wp.blocks;var a=r(7104),c=r(5573);const n=(0,o.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24",fill:"none"},(0,o.createElement)("path",{stroke:"currentColor",strokeWidth:"1.5",fill:"none",d:"M6 3.75h12c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25z"}),(0,o.createElement)("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.9 7.5A1.1 1.1 0 018 6.4h8a1.1 1.1 0 011.1 1.1v2a1.1 1.1 0 01-1.1 1.1H8a1.1 1.1 0 01-1.1-1.1v-2zm1.2.1v1.8h7.8V7.6H8.1z",clipRule:"evenodd"}),(0,o.createElement)("path",{fill:"currentColor",d:"M8.5 12h1v1h-1v-1zM8.5 14h1v1h-1v-1zM8.5 16h1v1h-1v-1zM11.5 12h1v1h-1v-1zM11.5 14h1v1h-1v-1zM11.5 16h1v1h-1v-1zM14.5 12h1v1h-1v-1zM14.5 14h1v1h-1v-1zM14.5 16h1v1h-1v-1z"})),i=JSON.parse('{"name":"woocommerce/order-confirmation-totals","version":"1.0.0","title":"Order Totals","description":"Display the items purchased and order totals.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"multiple":false,"align":["wide","full"],"html":false,"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalTextDecoration":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalDefaultControls":{"fontSize":true}},"color":{"background":true,"text":true,"link":true,"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"padding":true,"margin":true,"__experimentalDefaultControls":{"margin":false,"padding":false}},"__experimentalBorder":{"color":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"style":true,"width":true}},"__experimentalSelector":".wp-block-woocommerce-order-confirmation-totals table"},"attributes":{"align":{"type":"string","default":"wide"},"className":{"type":"string","default":""}},"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}'),s=window.wp.blockEditor,m=window.wp.components;var d=r(7723);const u=window.wc.priceFormat;r(1314);(0,l.registerBlockType)(i,{icon:{src:(0,o.createElement)(a.A,{icon:n,className:"wc-block-editor-components-block-icon"})},attributes:{...i.attributes},edit:()=>{const e=(0,s.useBlockProps)({className:"wc-block-order-confirmation-totals"}),{borderBottomColor:t,borderLeftColor:r,borderRightColor:l,borderTopColor:a,borderWidth:c}=e.style,n={borderBottomColor:t,borderLeftColor:r,borderRightColor:l,borderTopColor:a,borderWidth:c};return(0,o.createElement)("div",{...e},(0,o.createElement)(m.Disabled,null,(0,o.createElement)("table",{style:n,cellSpacing:"0",className:"wc-block-order-confirmation-totals__table"},(0,o.createElement)("thead",null,(0,o.createElement)("tr",null,(0,o.createElement)("th",{className:"wc-block-order-confirmation-totals__product"},(0,d.__)("Product","woocommerce")),(0,o.createElement)("th",{className:"wc-block-order-confirmation-totals__total"},(0,d.__)("Total","woocommerce")))),(0,o.createElement)("tbody",null,(0,o.createElement)("tr",{className:"woocommerce-table__line-item order_item"},(0,o.createElement)("th",{scope:"row",className:"wc-block-order-confirmation-totals__product"},(0,o.createElement)("a",{href:"#link"},(0,d._x)("Test Product","sample product name","woocommerce"))," ",(0,o.createElement)("strong",{className:"product-quantity"},"× 2")),(0,o.createElement)("td",{className:"wc-block-order-confirmation-totals__total"},(0,u.formatPrice)(2e3))),(0,o.createElement)("tr",{className:"woocommerce-table__line-item order_item"},(0,o.createElement)("th",{scope:"row",className:"wc-block-order-confirmation-totals__product"},(0,o.createElement)("a",{href:"#link"},(0,d._x)("Test Product","sample product name","woocommerce"))," ",(0,o.createElement)("strong",{className:"product-quantity"},"× 2")),(0,o.createElement)("td",{className:"wc-block-order-confirmation-totals__total"},(0,u.formatPrice)(2e3)))),(0,o.createElement)("tfoot",null,(0,o.createElement)("tr",null,(0,o.createElement)("th",{className:"wc-block-order-confirmation-totals__label",scope:"row"},(0,d.__)("Total","woocommerce")),(0,o.createElement)("td",{className:"wc-block-order-confirmation-totals__total"},(0,u.formatPrice)(4e3)))))))},save:()=>null})},1314:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},5573:e=>{"use strict";e.exports=window.wp.primitives}},l={};function a(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,e=[],a.O=(t,r,o,l)=>{if(!r){var c=1/0;for(m=0;m<e.length;m++){for(var[r,o,l]=e[m],n=!0,i=0;i<r.length;i++)(!1&l||c>=l)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(n=!1,l<c&&(c=l));if(n){e.splice(m--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[r,o,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var l=Object.create(null);a.r(l);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&o&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,a.d(l,c),l},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=9779,(()=>{var e={9779:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,l,[c,n,i]=r,s=0;if(c.some((t=>0!==e[t]))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(i)var m=i(a)}for(t&&t(r);s<c.length;s++)l=c[s],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(m)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=a.O(void 0,[94],(()=>a(1698)));c=a.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["order-confirmation-totals"]=c})();