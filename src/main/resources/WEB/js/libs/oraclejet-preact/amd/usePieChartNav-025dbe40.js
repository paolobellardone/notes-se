define(['exports', 'preact/hooks', './layoutUtils-3c2d340e', './eventsUtils-5d567a9d', './accUtils-1557920a', './useVisHover-28319fef', './mergeProps-bcfa6a92'], (function(e,s,t,o,i,n,r){"use strict";const c=e=>{const s=e.target.dataset.ojItemIndex;if(s)return{itemIndex:parseInt(s,10)}};e.usePieChartNav=function({touchResponse:e,getNextChartItem:i}){const[a,u]=s.useState({itemIndex:0}),[d,l]=s.useState(),I=s.useRef(),b=e=>{e.itemIndex===a.itemIndex&&e.isFocusVisible===a.isFocusVisible||(u(e),l(void 0))},m=n.useVisHover((e=>{const s=c(e);s?.itemIndex!=d?.itemIndex&&(l(s),I.current=t.getRandomId())}),void 0,void 0,e);return{focusedItemInfo:a,hoveredItemInfo:d,activeId:I.current,navProps:r.mergeProps(m,{onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":{const s=i(a,"ArrowDown");b({...s,isFocusVisible:!0}),o.cancelEvent(e);break}case"ArrowUp":{const s=i(a,"ArrowUp");b({...s,isFocusVisible:!0}),o.cancelEvent(e);break}case"ArrowLeft":{const s=i(a,"ArrowLeft");b({...s,isFocusVisible:!0}),o.cancelEvent(e);break}case"ArrowRight":{const s=i(a,"ArrowRight");b({...s,isFocusVisible:!0}),o.cancelEvent(e);break}}I.current=t.getRandomId()},onKeyUp:e=>{"Tab"===e.key&&b({...a,isFocusVisible:!0})},onPointerUp:e=>{const s=c(e);s&&b({...s,isFocusVisible:!1})},onBlur:()=>{b({...a,isFocusVisible:!1})}})}}}));
//# sourceMappingURL=usePieChartNav-025dbe40.js.map
