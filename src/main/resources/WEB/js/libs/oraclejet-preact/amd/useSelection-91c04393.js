define(['exports', 'preact/hooks', './eventsUtils-5d567a9d', 'preact/jsx-runtime', './BaseButton-83ce1d00', './Text-e132dec0', './useTranslationBundle-20bfc0f3', './hooks/PRIVATE_useVisSelection/themes/ClearSelection.css', './Layer-8d7bbd69', 'preact/compat', './LayerHost-0a244de8', './Floating-8f519f4d'], (function(e,t,n,o,l,r,i,c,s,a,u,d){"use strict";const p=({onAction:e})=>{const t=`${i.useTranslationBundle("@oracle/oraclejet-preact").vis_clearSelection()}`;return o.jsx("div",{class:c.clearButtonStyles.base,children:o.jsx(l.BaseButton,{styling:["default"],elementDetails:{type:"span",isFocusable:!1,isLabel:!0},variant:"outlined",onAction:e,children:o.jsx(r.Text,{truncation:"ellipsis",weight:"inherit",children:t})})})},f=18;const y=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],g=(e,t,o,l,r,i)=>{let c=new Set([]);if(null!=e){c=new Set(t);const n=t.has(e);"toggle"===l?n?c.delete(e):"single"===o?c=new Set([e]):c.add(e):n||(c=new Set([e]))}n.isEqual(c,t)||i?.({ids:[...c],data:[...c].map(r)})};e.useSelection=function({selection:e=[],selectionMode:n="none",idExtracter:l,onChange:r,isDrillEnabled:i,isKeyboardSelection:c,getDataById:a}){const u=t.useRef(),{clearSelectionContent:x,tryToggleClearButton:h}=function({clearSelection:e}){const[n,l]=t.useState(!1),r=t.useRef({x:0,y:0}),i={mainAxis:2*f},c={current:r.current};return{clearSelectionContent:n?o.jsx(s.Layer,{children:o.jsx(d.Floating,{anchorRef:c,offsetValue:i,placement:"top",flipOptions:{crossAxis:!1,mainAxis:!1},shiftOptions:{crossAxis:!0,mainAxis:!0},children:o.jsx(p,{onAction:()=>{l(!1),e()}})})}):null,tryToggleClearButton:(e,t,o,i)=>"touch"===e.pointerType&&void 0===t&&"multiple"===o&&i.size>1&&(l(!n),r.current={x:e.clientX,y:e.clientY},!0)}}({clearSelection:()=>{g(void 0,new Set(e),n,"replace",a,r)}}),S=t.useCallback((t=>{const o=new Set(e);if(u.current&&i)return clearTimeout(u.current),void(u.current=void 0);const c=l(t);if(h(t,c,n,o))return;const s=t.metaKey,d=t.ctrlKey;t.defaultPrevented||null==c&&(s||d)||(i?u.current=setTimeout((()=>{g(c,o,n,s||d||"touch"===t.pointerType?"toggle":"replace",a,r),u.current=void 0}),250):g(c,o,n,s||d||"touch"===t.pointerType?"toggle":"replace",a,r))}),[e,n,r,l,i,a,h]),w=t.useCallback((t=>{const o=l(t),i=t.ctrlKey;g(o,new Set(e),n,i?"toggle":"replace",a,r)}),[e,n,r,l,a]),m=t.useCallback((t=>{const o=t.shiftKey,i=t.ctrlKey&&" "===t.key,s=-1!==y.indexOf(t.key),u=l(t);if(s||i||c&&c(t)){const t=o||i?"toggle":"replace";g(u,new Set(e),n,t,a,r)}}),[e,n,r,l,c,a]);return{selectionContent:x,selectionProps:"none"===n||null==r?{}:{onKeyUp:m,onContextMenu:w,onPointerUp:S}}}}));
//# sourceMappingURL=useSelection-91c04393.js.map
