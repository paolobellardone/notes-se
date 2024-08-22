define(['exports', 'preact/jsx-runtime', './TrackResizeContainer-905caab2', 'preact', 'preact/hooks', './UNSAFE_PictoChart/themes/PictoChartStyles.css', './classNames-08d99695', './useSelection-91c04393', './useTranslationBundle-20bfc0f3', './mergeProps-bcfa6a92', './Common/themes/themeContract.css', './utils-61ef4ad6', './SvgSymbol-d0266621', './accUtils-1557920a', './useUser-9b166ca3', './layoutUtils-3c2d340e', './eventsUtils-5d567a9d', './useVisHover-28319fef', './useVisDrill-3cfa2c71', './useDatatip-34fb67d2', './util-5bb1f200', './useItemFocus-75d6510d', './LayerHost-0a244de8', 'preact/compat', './useTestId-f3b8b319', './useVisTouchResponse-36416652', './stringUtils-0ae982c2'], (function(e,t,o,n,r,i,s,a,c,l,d,u,m,f,h,p,g,I,b,C,x,v,S,w,y,R,F){"use strict";const P=n.createContext({}),k=.25;function M(e,t){return Math.ceil(e/t)*t}const D=e=>"bottomStart"===e||"bottomEnd"===e,T=e=>"topEnd"===e||"bottomEnd"===e,V=(e,t,o,n,r)=>{for(let i=0;i<r;i++)for(let r=0;r<n;r++)if(e[o+i][t+r])return!1;return!0},$=(e,t,o,n,r)=>{for(let i=0;i<r;i++)for(let r=0;r<n;r++)e[o+i][t+r]=!0},E=(e,t,o,n,r,i)=>{if(i){const i=E(e,o,t,r,n,!1);return i?{col:i.row,row:i.col}:void 0}for(let i=0;i<r-o+1;i++)for(let r=0;r<n-t+1;r++)if(V(e,r,i,t,o))return $(e,r,i,t,o),{col:r,row:i}};function H(e){const t=e.dataset.idx;if(void 0!==t)return{idx:Number(t)}}function U(e,t,o,n,r,i,s,a,c){let l=!1;if(!n){const e=!!s&&t===s.idx,o=!!r&&t===r.idx;l=!!(e&&s?.isCurrent||o&&r?.isCurrent)}const d=function(e,t){return!t||0===t.length||new Set(t).has(e)}(e.id,a),u=function(e,t){return!(!t||0===t.length)&&new Set(t).has(e)}(e.id,i);return{isCurrent:l,isHighlighted:d,isSelected:u,hasSelection:i&&0!==i.length,isFocused:!!s&&A(s,t),key:e.id,itemIdx:t,countIdx:o,activeId:l?c:void 0,isReadOnly:n,item:e}}function j(e,t){return e?.idx===t?.idx}function A(e,t){return!!e.isFocusVisible&&e.idx===t}function N(e,t,o){return`${o?.vis_labelCountWithTotal({itemCount:e.toString(),totalCount:t.toString()})}`}const B=({context:e,markerProps:o})=>{const{supportsSelection:n}=r.useContext(P),i=function(e,t,o,n,r,i){const s="human"===e,a=o||r&&i,c="ellipse"===e||"rectangle"===e;t=""!==t?t:u.rgba(d.colorSchemeVars.palette.neutral[190],.15);const l=n?d.colorSchemeVars.textIcon.primary:a?t:"";return{markerShape:e,tx:s?70:void 0,ty:s?60:void 0,markerColor:t,borderColor:n||a?u.rgb(d.colorSchemeVars.palette.neutral[0]):t,outerBorderColor:l,markerScale:c&&!l?1:.85,setAspectRatioNone:!!c}}(o.shape,o.color,e.state.focused,e.state.selected,e.state.hovered,n);return t.jsx(m.SvgSymbol,{...i})};function L(e,t){const{idx:o}=e;return t[o]}function W(e){return{getItem:t=>L(t,e),getDetailFromInfo:t=>{if(!t)return{id:void 0,data:void 0};const o=L(t,e);return{id:o?o.id:void 0,data:o}},getPrevItemInfo:e=>function(e){let t=e.idx;return t=Math.max(0,t-1),{idx:t}}(e),getNextItemInfo:t=>function(e,t){let o=e.idx;return o=Math.min(t.length-1,o+1),{idx:o}}(t,e)}}const q=({touchResponse:e,content:t,borderColor:o,width:n,focusedItemRef:r,focusedItemInfo:i})=>{const{direction:s}=h.useUser(),a="rtl"===s,c=r.current?.getBoundingClientRect(),{datatipContent:l,datatipProps:d}=C.useDatatip({content:t,placement:"top-start",offset:x.calculateOffset(a,n,i.isCurrent?c:void 0),borderColor:o,anchor:i?.isCurrent?"element":"pointer",touchResponse:e});return{datatipContent:l,datatipProps:d}},O=e=>{const o=e.supportsSelection||e.supportsDrill,{dimmedItemStyle:n,interactiveItemStyle:r}=i.styles,a=s.classNames([o&&r,!e.isHighlighted&&n]),c=0===e.countIdx,l=c&&function(e,t,o,n,r,i,s,a,c){const l=r?N(e,t,r):"";return a=a||`${n?n+": ":""}${l}`,{"aria-label":f.generateAriaLabel(r,a,{isSelected:o||s?i:void 0})||void 0,role:"img",id:c}}(e.item.count||1,e.totalCount,!!e.supportsSelection,e.item.label,e.translations,e.isSelected,e.hasSelection,e.item.accessibleLabel,e.activeId)||{};return t.jsx("div",{ref:c?e.focusedItemRef:void 0,id:e.activeId,"data-idx":e.itemIdx,"data-count-idx":e.countIdx,style:{gridRow:`${e.row+1} / span ${e.item.rowSpan||1}`,gridColumn:`${e.column+1} / span ${e.item.columnSpan||1}`},class:a,...l,children:e.children})};function _({width:e,height:o,columnWidth:n,rowHeight:m,items:f,columnCount:C,rowCount:x,layout:S,layoutOrigin:w="topStart",selectionMode:P="none",highlightedIds:V=[],selectedIds:$=[],drilling:A="off",onItemDrill:B,onItemHover:L,isFlowingWidth:_,isFlowingHeight:z,onItemFocus:G,...K}){const Z=0!==f.length,J=function(e){let t=0;for(let o=0;o<e.length;o++)t+=e[o].count||1;return t}(f),Q=c.useTranslationBundle("@oracle/oraclejet-preact"),X=!(!P||"none"===P),Y=null!=B,ee=!X&&!Y&&null===L&&null===G,te=y.useTestId(K.testId),oe=new Map(f.map((e=>[e.id,e]))),{getItem:ne,getDetailFromInfo:re,getPrevItemInfo:ie,getNextItemInfo:se}=W(f),{touchResponse:ae,touchResponseStyle:ce}=R.useVisTouchResponse({type:"touchStart"}),{hoveredItemInfo:le,focusedItemInfo:de,activeId:ue,eventsProps:me}=function(e,t,o,n,i,s,a,c,d,u){const[m,f]=r.useState({idx:0}),[C,x]=r.useState(),v=r.useRef(),{direction:S}=h.useUser(),w="rtl"===S,y=I.useVisHover((e=>{const o=H(e.target);j(o,C)||(x(o&&{...o,isCurrent:!0}),v.current=p.getRandomId(),t&&(f({...m,isCurrent:!1}),d?.(n(o))))}),void 0,(()=>{x(void 0),v.current=void 0,t&&d?.(n())}),e),R=r.useCallback((e=>{const{id:t,data:o}=n(e);null!=t&&o&&(c?.({id:t,data:o}),v.current=p.getRandomId())}),[n,c]),F=r.useCallback((e=>{"keydown"===e.type?"on"==a&&R(m):R(H(e.target))}),[a,m,R]),P=b.useVisDrill(o,F);if(!t)return{focusedItemInfo:m,hoveredItemInfo:C,eventsProps:y};function k(e){u?.(n(e)),v.current=p.getRandomId(),f(e)}function M(e){j(e,m)||(e.isCurrent=!0,e.isFocusVisible=!0,C&&x({...C,isCurrent:!1}),k(e))}return{focusedItemInfo:m,hoveredItemInfo:C,activeId:v.current,eventsProps:l.mergeProps(P,y,{onKeyUp:e=>{"Tab"===e.code&&(k({...m,isCurrent:!0,isFocusVisible:!0}),g.cancelEvent(e))},onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":M(s(m)),g.cancelEvent(e);break;case"ArrowUp":M(i(m)),g.cancelEvent(e);break;case"ArrowRight":M(w?i(m):s(m)),g.cancelEvent(e);break;case"ArrowLeft":M(w?s(m):i(m)),g.cancelEvent(e)}},onBlur:()=>{(null!=C||m.isCurrent)&&u?.(n(void 0));const e={...m,isCurrent:!1,isFocusVisible:!1};f(e)}})}}(ae,!ee&&Z,P,re,ie,se,A,B,L,G),{selectionContent:fe,selectionProps:he}=a.useSelection({idExtracter:e=>{const t="keyup"===e.type?de:H(e.target);return re(t).id},isDrillEnabled:"off"!=A,selection:$,selectionMode:P,getDataById:e=>oe.get(e),onChange:K.onSelectionChange}),pe=n&&parseFloat(n),ge=m&&parseFloat(m),Ie=s.classNames([i.baseStyles]),{focusedItemRef:be}=v.useItemFocus(de),{content:Ce,borderColor:xe}=function(e,t,o,n,r,i,s){let a;const c=r?.isCurrent;let l,m;c&&null!=e[r.idx].id&&(a=r),n&&n.isCurrent&&(a=n);let f=u.rgba(d.colorSchemeVars.palette.neutral[190],.15);const h=a&&t(a,e);if(h&&i){const e=h&&{data:h},{content:t,borderColor:n}=i(e);l=t,f=n||f,m=s?N(h.count||1,o,s):""}return{borderColor:f,content:l||a&&t(a,e)?.accessibleLabel||a&&t(a,e)?.label+": "+m||m}}(f,ne,J,de,le,K.datatip,Q),{calcColCount:ve,calcRowCount:Se,calcColWidth:we,calcRowHeight:ye,gridGap:Re}=function(e,t,o,n,r,s,a,c,l,d){let u=0,m=1,f=1,h=1/0;for(let t=0;t<e.length;t++){const o=e[t],n=o.columnSpan||1,r=o.rowSpan||1;n<=0||r<=0||(n>m&&(m=n),r>f&&(f=r),n<h&&(h=n),r<h&&(h=r),u+=n*r*(o.count||1))}if(0===u)return{};(r||s)&&(l||(l=d||i.DEFAULT_SIZE),d||(d=l)),a||c||(r||s?r?s?t?c=M(Math.sqrt(u),f):a=M(Math.sqrt(u),m):c=Math.max(Math.floor(n/(d||1)),1):a=Math.max(Math.floor(o/(l||1)),1):t?c=M(Math.sqrt(u*n/o),f):a=M(Math.sqrt(u*o/n),m)),a?c||(c=M(u/a,f)):a=M(u/(c||1),m);const p=k*h;return r||s||(l||(l=d||Math.min(o/a,n/(c||1))),d||(d=l)),a<=0||!c||c<=0||!l||l<=0||!d||d<=0?{}:{calcColCount:a,calcRowCount:c,calcColWidth:l?l-p:l,calcRowHeight:d?d-p:d,gridGap:p}}(f,"vertical"===S,e,o,_,z,C,x,pe,ge),{datatipContent:Fe,datatipProps:{"aria-describedby":Pe,...ke}}=q({touchResponse:ae,content:Ce,width:e,borderColor:xe,focusedItemRef:be,focusedItemInfo:de});if(!ve)return null;const Me=function(e,t,o,n,r){const i=t,s=o,a=D(n),c=T(n),l=[],d=new Array(i);for(let e=0;e<i;e++)d[e]=new Array(s).fill(!1);for(let t=0;t<e.length;t++){const o=e[t];let n=0;const u=o.rowSpan??1,m=o.columnSpan??1,f=o.count??1;for(;n<f;){const e=E(d,m,u,s,i,r);void 0!==e&&l.push({row:a?i-e.row-u:e.row,col:c?s-e.col-m:e.col,countIdx:n,itemIdx:t,item:o}),n+=1}}return l}(f,Se,ve,w,"vertical"===S),De=l.mergeProps(me,ke,he);return t.jsxs("div",{tabIndex:0,"aria-label":K["aria-label"],"aria-describedby":F.merge([K["aria-describedby"],Pe]),"aria-labelledby":K["aria-labelledby"],"aria-activedescendant":ue,role:"application",style:{width:_?"max-content":`${e}px`,height:z?"max-content":`${o}px`,gridTemplateRows:`repeat(${Se}, ${ye}px)`,gridTemplateColumns:`repeat(${ve}, ${we}px)`,gap:`${Re}px`,...ce},class:Ie,...te,...De,children:[Me.map((e=>{const o=de.idx===e.itemIdx,n=U(e.item,e.itemIdx,e.countIdx,ee,le,$,de,V,ue),r={data:e.item,state:{selected:n.isSelected,focused:n.isFocused,hovered:n.isCurrent}};return t.jsx(O,{focusedItemRef:o?be:void 0,row:e.row,column:e.col,supportsSelection:X,supportsDrill:Y,translations:Q,totalCount:J,...n,children:K.children(r)})})),Fe,fe]})}e.PictoChart=function({width:e,height:n,...r}){const i=!(!r.selectionMode||"none"===r.selectionMode),s=void 0===e,a=void 0===n;return t.jsx(P.Provider,{value:{supportsSelection:i},children:t.jsx(o.TrackResizeContainer,{width:s?"initial":e,height:a?"initial":n,children:(e,o)=>t.jsx(_,{width:e,height:o,isFlowingWidth:s,isFlowingHeight:a,...r})})})},e.getPictoDefaultRenderers=function(e){return{markerRenderer:o=>{const n=e(o.data);return t.jsx(B,{context:o,markerProps:n})},datatipRenderer:t=>({borderColor:e(t.data).color})}}}));
//# sourceMappingURL=PictoChart-4d70af90.js.map
