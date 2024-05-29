define(['exports', 'preact/hooks', './useUser-6c8723b4', './positionUtils-5e82645b'], (function(t,e,n,o){"use strict";const r=Math.min,i=Math.max,s=Math.round,l=Math.floor,c=t=>({x:t,y:t}),a={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function u(t,e,n){return i(t,r(e,n))}function d(t,e){return"function"==typeof t?t(e):t}function m(t){return t.split("-")[0]}function p(t){return t.split("-")[1]}function h(t){return"x"===t?"y":"x"}function g(t){return"y"===t?"height":"width"}function y(t){return["top","bottom"].includes(m(t))?"y":"x"}function x(t){return h(y(t))}function w(t){return t.replace(/start|end/g,(t=>f[t]))}function b(t){return t.replace(/left|right|bottom|top/g,(t=>a[t]))}function v(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function A(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function R(t,e,n){let{reference:o,floating:r}=t;const i=y(e),s=x(e),l=g(s),c=m(e),a="y"===i,f=o.x+o.width/2-r.width/2,u=o.y+o.height/2-r.height/2,d=o[l]/2-r[l]/2;let h;switch(c){case"top":h={x:f,y:o.y-r.height};break;case"bottom":h={x:f,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:u};break;case"left":h={x:o.x-r.width,y:u};break;default:h={x:o.x,y:o.y}}switch(p(e)){case"start":h[s]-=d*(n&&a?-1:1);break;case"end":h[s]+=d*(n&&a?-1:1)}return h}async function L(t,e){var n;void 0===e&&(e={});const{x:o,y:r,platform:i,rects:s,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:m=!1,padding:p=0}=d(e,t),h=v(p),g=l[m?"floating"===u?"reference":"floating":u],y=A(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(g)))||n?g:g.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:a,rootBoundary:f,strategy:c})),x="floating"===u?{...s.floating,x:o,y:r}:s.reference,w=await(null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),b=await(null==i.isElement?void 0:i.isElement(w))&&await(null==i.getScale?void 0:i.getScale(w))||{x:1,y:1},R=A(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:w,strategy:c}):x);return{top:(y.top-R.top+h.top)/b.y,bottom:(R.bottom-y.bottom+h.bottom)/b.y,left:(y.left-R.left+h.left)/b.x,right:(R.right-y.right+h.right)/b.x}}const T=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,r=await async function(t,e){const{placement:n,platform:o,elements:r}=t,i=await(null==o.isRTL?void 0:o.isRTL(r.floating)),s=m(n),l=p(n),c="y"===y(n),a=["left","top"].includes(s)?-1:1,f=i&&c?-1:1,u=d(e,t);let{mainAxis:h,crossAxis:g,alignmentAxis:x}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof x&&(g="end"===l?-1*x:x),c?{x:g*f,y:h*a}:{x:h*a,y:g*f}}(e,t);return{x:n+r.x,y:o+r.y,data:r}}}};function E(t){return O(t)?(t.nodeName||"").toLowerCase():"#document"}function D(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function S(t){var e;return null==(e=(O(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function O(t){return t instanceof Node||t instanceof D(t).Node}function P(t){return t instanceof Element||t instanceof D(t).Element}function k(t){return t instanceof HTMLElement||t instanceof D(t).HTMLElement}function C(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof D(t).ShadowRoot)}function F(t){const{overflow:e,overflowX:n,overflowY:o,display:r}=z(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(r)}function H(t){return["table","td","th"].includes(E(t))}function W(t){const e=$(),n=z(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function $(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function M(t){return["html","body","#document"].includes(E(t))}function z(t){return D(t).getComputedStyle(t)}function B(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function V(t){if("html"===E(t))return t;const e=t.assignedSlot||t.parentNode||C(t)&&t.host||S(t);return C(e)?e.host:e}function j(t){const e=V(t);return M(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&F(e)?e:j(e)}function N(t,e){var n;void 0===e&&(e=[]);const o=j(t),r=o===(null==(n=t.ownerDocument)?void 0:n.body),i=D(o);return r?e.concat(i,i.visualViewport||[],F(o)?o:[]):e.concat(o,N(o))}function U(t){const e=z(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=k(t),i=r?t.offsetWidth:n,l=r?t.offsetHeight:o,c=s(n)!==i||s(o)!==l;return c&&(n=i,o=l),{width:n,height:o,$:c}}function I(t){return P(t)?t:t.contextElement}function _(t){const e=I(t);if(!k(e))return c(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:i}=U(e);let l=(i?s(n.width):n.width)/o,a=(i?s(n.height):n.height)/r;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const q=c(0);function X(t){const e=D(t);return $()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:q}function Y(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const r=t.getBoundingClientRect(),i=I(t);let s=c(1);e&&(o?P(o)&&(s=_(o)):s=_(t));const l=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==D(t))&&e}(i,n,o)?X(i):c(0);let a=(r.left+l.x)/s.x,f=(r.top+l.y)/s.y,u=r.width/s.x,d=r.height/s.y;if(i){const t=D(i),e=o&&P(o)?D(o):o;let n=t.frameElement;for(;n&&o&&e!==t;){const t=_(n),e=n.getBoundingClientRect(),o=z(n),r=e.left+(n.clientLeft+parseFloat(o.paddingLeft))*t.x,i=e.top+(n.clientTop+parseFloat(o.paddingTop))*t.y;a*=t.x,f*=t.y,u*=t.x,d*=t.y,a+=r,f+=i,n=D(n).frameElement}}return A({width:u,height:d,x:a,y:f})}function G(t){return Y(S(t)).left+B(t).scrollLeft}function J(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=D(t),o=S(t),r=n.visualViewport;let i=o.clientWidth,s=o.clientHeight,l=0,c=0;if(r){i=r.width,s=r.height;const t=$();(!t||t&&"fixed"===e)&&(l=r.offsetLeft,c=r.offsetTop)}return{width:i,height:s,x:l,y:c}}(t,n);else if("document"===e)o=function(t){const e=S(t),n=B(t),o=t.ownerDocument.body,r=i(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=i(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+G(t);const c=-n.scrollTop;return"rtl"===z(o).direction&&(l+=i(e.clientWidth,o.clientWidth)-r),{width:r,height:s,x:l,y:c}}(S(t));else if(P(e))o=function(t,e){const n=Y(t,!0,"fixed"===e),o=n.top+t.clientTop,r=n.left+t.clientLeft,i=k(t)?_(t):c(1);return{width:t.clientWidth*i.x,height:t.clientHeight*i.y,x:r*i.x,y:o*i.y}}(e,n);else{const n=X(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return A(o)}function K(t,e){const n=V(t);return!(n===e||!P(n)||M(n))&&("fixed"===z(n).position||K(n,e))}function Q(t,e,n){const o=k(e),r=S(e),i="fixed"===n,s=Y(t,!0,i,e);let l={scrollLeft:0,scrollTop:0};const a=c(0);if(o||!o&&!i)if(("body"!==E(e)||F(r))&&(l=B(e)),o){const t=Y(e,!0,i,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else r&&(a.x=G(r));return{x:s.left+l.scrollLeft-a.x,y:s.top+l.scrollTop-a.y,width:s.width,height:s.height}}function Z(t,e){return k(t)&&"fixed"!==z(t).position?e?e(t):t.offsetParent:null}function tt(t,e){const n=D(t);if(!k(t))return n;let o=Z(t,e);for(;o&&H(o)&&"static"===z(o).position;)o=Z(o,e);return o&&("html"===E(o)||"body"===E(o)&&"static"===z(o).position&&!W(o))?n:o||function(t){let e=V(t);for(;k(e)&&!M(e);){if(W(e))return e;e=V(e)}return null}(t)||n}const et={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const r=k(n),i=S(n);if(n===i)return e;let s={scrollLeft:0,scrollTop:0},l=c(1);const a=c(0);if((r||!r&&"fixed"!==o)&&(("body"!==E(n)||F(i))&&(s=B(n)),k(n))){const t=Y(n);l=_(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-s.scrollLeft*l.x+a.x,y:e.y*l.y-s.scrollTop*l.y+a.y}},getDocumentElement:S,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:s}=t;const l=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=N(t).filter((t=>P(t)&&"body"!==E(t))),r=null;const i="fixed"===z(t).position;let s=i?V(t):t;for(;P(s)&&!M(s);){const e=z(s),n=W(s);n||"fixed"!==e.position||(r=null),(i?!n&&!r:!n&&"static"===e.position&&r&&["absolute","fixed"].includes(r.position)||F(s)&&!n&&K(t,s))?o=o.filter((t=>t!==s)):r=e,s=V(s)}return e.set(t,o),o}(e,this._c):[].concat(n),o],c=l[0],a=l.reduce(((t,n)=>{const o=J(e,n,s);return t.top=i(o.top,t.top),t.right=r(o.right,t.right),t.bottom=r(o.bottom,t.bottom),t.left=i(o.left,t.left),t}),J(e,c,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:tt,getElementRects:async function(t){let{reference:e,floating:n,strategy:o}=t;const r=this.getOffsetParent||tt,i=this.getDimensions;return{reference:Q(e,await r(n),o),floating:{x:0,y:0,...await i(n)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){return U(t)},getScale:_,isElement:P,isRTL:function(t){return"rtl"===z(t).direction}};const nt=(t,e,n)=>{const o=new Map,r={platform:et,...n},i={...r.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:i=[],platform:s}=n,l=i.filter(Boolean),c=await(null==s.isRTL?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:u}=R(a,o,c),d=o,m={},p=0;for(let n=0;n<l.length;n++){const{name:i,fn:h}=l[n],{x:g,y:y,data:x,reset:w}=await h({x:f,y:u,initialPlacement:o,placement:d,strategy:r,middlewareData:m,rects:a,platform:s,elements:{reference:t,floating:e}});f=null!=g?g:f,u=null!=y?y:u,m={...m,[i]:{...m[i],...x}},w&&p<=50&&(p++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(a=!0===w.rects?await s.getElementRects({reference:t,floating:e,strategy:r}):w.rects),({x:f,y:u}=R(a,d,c))),n=-1)}return{x:f,y:u,placement:d,strategy:r,middlewareData:m}})(t,e,{...r,platform:i})},ot=t=>({name:"offset",options:t,fn:async e=>T((e=>{let n;if(null!=(null!=e.middlewareData.flip?.overflows?e.middlewareData.flip?.overflows[0]:null)&&null!=t&&"object"==typeof t&&(n=rt(e.placement,e.initialPlacement,t)),!t)return 0;return n??t})).fn(e)}),rt=(t,e,n)=>{const o=e.split("-")[0],r=t.split("-")[0],i=e.split("-")[1],s=t.split("-")[1];return("right"===o||"left"===o)&&o===r&&i!==s||("top"===o||"bottom"===o)&&o===r&&i!==s?{mainAxis:n&&"object"==typeof n&&n.mainAxis?n.mainAxis:0,crossAxis:n&&"object"==typeof n&&n.crossAxis?-n.crossAxis:0}:n};function it(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if("function"==typeof t&&t.toString()===e.toString())return!0;let n,o,r;if(t&&e&&"object"==typeof t){if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(o=n;0!=o--;)if(!it(t[o],e[o]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(o=n;0!=o--;)if(!Object.prototype.hasOwnProperty.call(e,r[o]))return!1;for(o=n;0!=o--;){const n=r[o];if(("_owner"!==n||!t.$$typeof)&&!it(t[n],e[n]))return!1}return!0}return t!=t&&e!=e}const st=(t,e)=>{const n=t.split("-")[0],r=t.split("-")[1],i=o.normalizePosition(n,e);let s,l;r&&(s={top:"start",bottom:"end"},l=r.replace(/top|bottom/g,(t=>s[t])));const c=["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"].filter((t=>l&&t===`${i}-${l}`||!l&&t===`${i}`))[0];return c||"bottom"};t.arrow=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:l,elements:c}=e,{element:a,padding:f=0}=d(t,e)||{};if(null==a)return{};const m=v(f),h={x:n,y:o},y=x(i),w=g(y),b=await l.getDimensions(a),A="y"===y,R=A?"top":"left",L=A?"bottom":"right",T=A?"clientHeight":"clientWidth",E=s.reference[w]+s.reference[y]-h[y]-s.floating[w],D=h[y]-s.reference[y],S=await(null==l.getOffsetParent?void 0:l.getOffsetParent(a));let O=S?S[T]:0;O&&await(null==l.isElement?void 0:l.isElement(S))||(O=c.floating[T]||s.floating[w]);const P=E/2-D/2,k=O/2-b[w]/2-1,C=r(m[R],k),F=r(m[L],k),H=C,W=O-b[w]-F,$=O/2-b[w]/2+P,M=u(H,$,W),z=null!=p(i)&&$!=M&&s.reference[w]/2-($<H?C:F)-b[w]/2<0?$<H?H-$:W-$:0;return{[y]:h[y]-z,data:{[y]:M,centerOffset:$-M+z}}}}),t.autoUpdate=function(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:s=!0,ancestorResize:c=!0,elementResize:a="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:u=!1}=o,d=I(t),m=s||c?[...d?N(d):[],...N(e)]:[];m.forEach((t=>{s&&t.addEventListener("scroll",n,{passive:!0}),c&&t.addEventListener("resize",n)}));const p=d&&f?function(t,e){let n,o=null;const s=S(t);function c(){clearTimeout(n),o&&o.disconnect(),o=null}return function a(f,u){void 0===f&&(f=!1),void 0===u&&(u=1),c();const{left:d,top:m,width:p,height:h}=t.getBoundingClientRect();if(f||e(),!p||!h)return;const g={rootMargin:-l(m)+"px "+-l(s.clientWidth-(d+p))+"px "+-l(s.clientHeight-(m+h))+"px "+-l(d)+"px",threshold:i(0,r(1,u))||1};let y=!0;function x(t){const e=t[0].intersectionRatio;if(e!==u){if(!y)return a();e?a(!1,e):n=setTimeout((()=>{a(!1,1e-7)}),100)}y=!1}try{o=new IntersectionObserver(x,{...g,root:s.ownerDocument})}catch(t){o=new IntersectionObserver(x,g)}o.observe(t)}(!0),c}(d,n):null;let h,g=-1,y=null;a&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===d&&y&&(y.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame((()=>{y&&y.observe(e)}))),n()})),d&&!u&&y.observe(d),y.observe(e));let x=u?Y(t):null;return u&&function e(){const o=Y(t);!x||o.x===x.x&&o.y===x.y&&o.width===x.width&&o.height===x.height||n();x=o,h=requestAnimationFrame(e)}(),n(),()=>{m.forEach((t=>{s&&t.removeEventListener("scroll",n),c&&t.removeEventListener("resize",n)})),p&&p(),y&&y.disconnect(),y=null,u&&cancelAnimationFrame(h)}},t.flip=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:r,rects:i,initialPlacement:s,platform:l,elements:c}=e,{mainAxis:a=!0,crossAxis:f=!0,fallbackPlacements:u,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:v=!0,...A}=d(t,e),R=m(o),T=m(s)===s,E=await(null==l.isRTL?void 0:l.isRTL(c.floating)),D=u||(T||!v?[b(s)]:function(t){const e=b(t);return[w(t),e,w(e)]}(s));u||"none"===y||D.push(...function(t,e,n,o){const r=p(t);let i=function(t,e,n){const o=["left","right"],r=["right","left"],i=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?r:o:e?o:r;case"left":case"right":return e?i:s;default:return[]}}(m(t),"start"===n,o);return r&&(i=i.map((t=>t+"-"+r)),e&&(i=i.concat(i.map(w)))),i}(s,v,y,E));const S=[s,...D],O=await L(e,A),P=[];let k=(null==(n=r.flip)?void 0:n.overflows)||[];if(a&&P.push(O[R]),f){const t=function(t,e,n){void 0===n&&(n=!1);const o=p(t),r=x(t),i=g(r);let s="x"===r?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[i]>e.floating[i]&&(s=b(s)),[s,b(s)]}(o,i,E);P.push(O[t[0]],O[t[1]])}if(k=[...k,{placement:o,overflows:P}],!P.every((t=>t<=0))){var C,F;const t=((null==(C=r.flip)?void 0:C.index)||0)+1,e=S[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let n=null==(F=k.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:F.placement;if(!n)switch(h){case"bestFit":{var H;const t=null==(H=k.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(n=t);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},t.limitShift=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:o,placement:r,rects:i,middlewareData:s}=e,{offset:l=0,mainAxis:c=!0,crossAxis:a=!0}=d(t,e),f={x:n,y:o},u=y(r),p=h(u);let g=f[p],x=f[u];const w=d(l,e),b="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(c){const t="y"===p?"height":"width",e=i.reference[p]-i.floating[t]+b.mainAxis,n=i.reference[p]+i.reference[t]-b.mainAxis;g<e?g=e:g>n&&(g=n)}if(a){var v,A;const t="y"===p?"width":"height",e=["top","left"].includes(m(r)),n=i.reference[u]-i.floating[t]+(e&&(null==(v=s.offset)?void 0:v[u])||0)+(e?0:b.crossAxis),o=i.reference[u]+i.reference[t]+(e?0:(null==(A=s.offset)?void 0:A[u])||0)-(e?b.crossAxis:0);x<n?x=n:x>o&&(x=o)}return{[p]:g,[u]:x}}}},t.logicalSide=st,t.offset=ot,t.shift=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:r}=e,{mainAxis:i=!0,crossAxis:s=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...c}=d(t,e),a={x:n,y:o},f=await L(e,c),p=y(m(r)),g=h(p);let x=a[g],w=a[p];if(i){const t="y"===g?"bottom":"right";x=u(x+f["y"===g?"top":"left"],x,x-f[t])}if(s){const t="y"===p?"bottom":"right";w=u(w+f["y"===p?"top":"left"],w,w-f[t])}const b=l.fn({...e,[g]:x,[p]:w});return{...b,data:{x:b.x-n,y:b.y-o}}}}},t.size=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:s,elements:l}=e,{apply:c=(()=>{}),...a}=d(t,e),f=await L(e,a),u=m(n),h=p(n),g="y"===y(n),{width:x,height:w}=o.floating;let b,v;"top"===u||"bottom"===u?(b=u,v=h===(await(null==s.isRTL?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(v=u,b="end"===h?"top":"bottom");const A=w-f[b],R=x-f[v],T=!e.middlewareData.shift;let E=A,D=R;if(g){const t=x-f.left-f.right;D=h||T?r(R,t):t}else{const t=w-f.top-f.bottom;E=h||T?r(A,t):t}if(T&&!h){const t=i(f.left,0),e=i(f.right,0),n=i(f.top,0),o=i(f.bottom,0);g?D=x-2*(0!==t||0!==e?t+e:i(f.left,f.right)):E=w-2*(0!==n||0!==o?n+o:i(f.top,f.bottom))}await c({...e,availableWidth:D,availableHeight:E});const S=await s.getDimensions(l.floating);return x!==S.width||w!==S.height?{reset:{rects:!0}}:{}}}},t.useFloating=function({middleware:t,placement:r,strategy:i,onPosition:s,whileElementsMounted:l}){["top","top-start","top-end","top-start-corner","top-end-corner","start","start-top","start-bottom","start-top-corner","start-bottom-corner","bottom","bottom-start","bottom-end","bottom-start-corner","bottom-end-corner","end","end-top","end-bottom","end-top-corner","end-bottom-corner"].includes(r)||(r="bottom");const c=e.useRef(null),a=e.useRef(null),[f,u]=e.useState(null),[d,m]=e.useState(null),p=function(t){const n=e.useRef(t);return e.useLayoutEffect((()=>{n.current=t})),n}(l),h=e.useRef(!1),{direction:g}=n.useUser(),[y,x]=e.useState({x:null,y:null,strategy:i??"absolute",placement:"bottom",middlewareData:{}}),w=e.useRef(y),[b,v]=e.useState(t);it(b,t)||v(t);const A=e.useCallback((()=>{if(!c.current||!a.current)return;const t=((t,e)=>{const n=t.split("-")[0],o=t.split("-")[1];if(null==t.split("-")[2])return{placement:t,offset:void 0};const r=["top-start","start-top","bottom-start","start-bottom","top-end","end-top","bottom-end","end-bottom"].filter((t=>t===`${n}-${o}`))[0];return"start"==o?{placement:r,offset:{crossAxis:-e.offsetWidth}}:"end"==o?{placement:r,offset:{crossAxis:e.offsetWidth}}:"top"==o?{placement:r,offset:{crossAxis:-e.offsetHeight}}:{placement:r,offset:{crossAxis:e.offsetHeight}}})(r,a.current),e=st(t.placement,g),n=b?.map((e=>{if(e&&"offset"===e?.name){if("function"==typeof e.options)return null==t.offset?e:ot(t.offset);const n="number"==typeof e.options?{mainAxis:e.options,crossAxis:0}:e.options;return ot({mainAxis:(n&&n.mainAxis)??0,crossAxis:((t.offset&&t.offset.crossAxis)??0)+((n&&n.crossAxis)??0)})}return e}));nt(c.current,a.current,{middleware:n,placement:e,strategy:i}).then((t=>{if(h.current){if(t.placement!==w.current.placement||t.x!==w.current.x||t.y!==w.current.y||t.middlewareData.arrow?.x!=w.current.middlewareData.arrow?.x||t.middlewareData.arrow?.y!=w.current.middlewareData.arrow?.y||t.middlewareData.arrow?.centerOffset!=w.current.middlewareData.arrow?.centerOffset){const e=n?.find((t=>t&&"offset"===t?.name)),i=e?.options,l=((t,e)=>{const n=t.split("-")[0];if("top"===n||"bottom"===n)return t;const r=t.split("-")[1],i=o.reverseNormalizePosition(n,e),s={start:"top",end:"bottom"},l=null!=r?r.replace(/start|end/g,(t=>s[t])):null,c=["top","top-start","top-end","end","end-top","end-bottom","bottom-start","bottom-end","bottom","start","start-top","start-bottom"].filter((t=>l&&t===`${i}-${l}`||!l&&t===`${i}`))[0];return c||"bottom"})(t.placement,g),c=t.middlewareData.offset,a={placement:l,origPlacement:r,x:t.x,y:t.y,arrow:t.middlewareData.arrow,offset:c,origOffset:i};s?.(a)}(t=>{w.current=t,x(t)})(t)}}))}),[b,r,g,i,s]);e.useLayoutEffect((()=>(h.current=!0,()=>{h.current=!1})),[]),e.useLayoutEffect((()=>{if(f&&d){if(p.current)return p.current(f,d,A);A()}}),[f,d,A,p]);const R=e.useCallback((t=>{c.current!==t&&(c.current=t,u(t))}),[]),L=e.useCallback((t=>{a.current!==t&&(a.current=t,m(t))}),[]),T=e.useMemo((()=>({reference:c,floating:a})),[]);return e.useMemo((()=>({...y,update:A,refs:T,reference:R,floating:L})),[y,A,T,R,L])}}));
//# sourceMappingURL=useFloating-e7375283.js.map
