define(['exports', 'preact/hooks'], (function(e,n){"use strict";const t={pointerDownId:null,startTime:0};e.useLongPress=function(e,{isDisabled:o=!1,minimumTime:r=250}={isDisabled:!1,minimumTime:250}){const i=n.useRef(t),s=n.useCallback((()=>{i.current=t}),[]),u=n.useCallback((e=>{"mouse"==e.pointerType&&0!=e.button||(i.current=i.current.pointerDownId?t:{pointerDownId:e.pointerId,startTime:e.timeStamp})}),[]),a=n.useCallback((n=>{if(n.pointerId===i.current.pointerDownId){n.timeStamp-i.current.startTime>r&&e({x:n.offsetX,y:n.offsetY})}s()}),[e,s,r]);return{longPressProps:o?{}:{onPointerDown:u,onPointerUp:a,onPointerLeave:s,onPointerCancel:s}}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useLongPress.js.map
