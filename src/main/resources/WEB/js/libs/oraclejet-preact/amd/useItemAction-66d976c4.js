define(['exports', 'preact/hooks', './collectionUtils-6740111c'], (function(t,e,a){"use strict";const n=(t,e,a,n)=>{if(void 0!==e){const r=o(e,a);return r&&n({context:r,target:t.target}),void 0!==r}return!1},o=(t,e)=>{const a=e?.data?.findIndex((e=>e.metadata.key===t))??-1;if(a>-1){return{index:a+(e?.offset||0),data:e?.data[a].data,metadata:e?.data[a].metadata}}};t.findItemContext=o,t.useItemAction=(t,o,r,c,d)=>{const i=e.useCallback((t=>{const e=a.keyExtractor(t.target,c);n(t,e,o,r)&&t.stopPropagation()}),[o,r,c]),s=e.useCallback((e=>{"Enter"===e.key?n(e,t,o,r):d&&" "===e.key&&(n(e,t,o,r),e.preventDefault())}),[o,r,t,d]);return o&&r?{onClick:i,onKeyDown:s}:{}}}));
//# sourceMappingURL=useItemAction-66d976c4.js.map
