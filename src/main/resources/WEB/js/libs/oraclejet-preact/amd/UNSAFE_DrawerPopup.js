define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Layer-ea9920e0', 'preact/compat', './TopLayerHost-d9bd8ecf', './Modal-93466d5f', './FocusTrap-fdb3a0ed', './tabbableUtils-a1aa6b01', './positionUtils-5e82645b', './clientHints-5a067fae', './useOutsideClick-d7ba24e7', './useAnimation-24256140', './useUser-6c8723b4', './useTestId-dfceb92d', './useSwipe-652b9dd0', './useComponentTheme-9a36e65b', './colors-08bc02b8', './mergeInterpolations-497657fd', './UNSAFE_DrawerPopup/themes/redwood/DrawerPopupTheme', './useThemeInterpolations-eb2b5ee2', './useColorScheme-33c4f510', './useScale-f847e1c0', './theme-f0ff48ad', './Theme-748163ef', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39', './FocusTracker-8296f9cd', './classNames-49c3ba27', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './head-990e418e', './_arity-9286283c', './_curry3-1e42149e', './_curry1-73b01864', './_curry2-b8890f0a', './_isArray-f8c70222', './_isString-668b4c85', './arrayUtils-bef2e8fb', './logger-36c6eea0', './_isObject-8093a293', './UNSAFE_DrawerPopup/themes/redwood/DrawerPopupBaseTheme.css', 'module', './UNSAFE_DrawerPopup/themes/DrawerPopupStyles.css', 'css!./DrawerPopupStyles.styles.css', './UNSAFE_DrawerPopup/themes/redwood/DrawerPopupVariants.css', 'css!./DrawerPopupVariants.styles.css'], (function(e,t,s,r,o,a,n,i,l,c,u,d,p,m,f,b,h,y,w,g,v,S,P,T,D,E,C,F,k,_,A,x,O,U,M,R,I,j,N,H,L,X,Y,z,B,V,W,$,K,q,G){"use strict";const J="0px",Q=250;e.DrawerPopup=({children:e,isOpen:o=!1,autoFocusRef:a,placement:v="start",modality:S="modal",onClose:P,onTransitionEnd:T,"aria-label":D,"aria-labelledby":E,"aria-describedby":C,testId:F,...k})=>{const[_,A]=s.useState(o?"initial":"unmounted"),[x,O]=s.useState("hidden"),[U,M]=s.useState(!o),[R,I]=s.useState("overlay"),j=s.useRef(null),N=s.useRef(null),H="bottom"===v,L={opening:()=>H?{from:{translateY:B()},to:{translateY:J},options:{duration:Q}}:{from:{translateX:z()},to:{translateX:J},options:{duration:Q}},closing:()=>H?{from:{translateY:J},to:{translateY:B()},options:{duration:Q}}:{from:{translateX:J},to:{translateX:z()},options:{duration:Q}}},X=f.useTestId(F),{direction:Y}=m.useUser(),z=()=>{return`${"right"===c.normalizePosition(v,Y)?"":"-"}${e=j.current,Math.round(e.getBoundingClientRect().width)}px`;var e},B=()=>{return`${e=j.current,Math.round(e.offsetHeight)}px`;var e},{nodeRef:V}=p.useAnimation(_,{animationStates:L,isAnimatedOnMount:!0,onAnimationEnd:()=>{"opening"===_?T?.(!0):o||(V(null),O("hidden"),A("unmounted"),T?.(!1))}});s.useEffect((()=>{if("unmounted"!==_||o){if("unmounted"!==_||!o)return"initial"===_&&o?(V(j.current),M(!1),void A("opening")):void("opening"===_&&o?O("visible"):o||(M(!0),A("closing")));A("initial")}}),[o,_,V]),s.useEffect((()=>{if("opening"===_){const e=l.getActiveElement();N.current=e===document.body?document.body:e,N.current?.addEventListener("keydown",W)}if("closing"===_)return()=>{N.current?.removeEventListener("keydown",W)}}),[_]);const W=e=>{N.current===l.getActiveElement()&&"F6"===e.code&&(e.preventDefault(),e.stopPropagation(),l.focusWithin(j.current))},$=s.useCallback((e=>{const t=N.current;switch(e.code){case"Escape":P?.({reason:"escapeKey"});break;case"F6":e.preventDefault(),e.stopPropagation(),t&&l.focusOn(t)}}),[P]),K=s.useCallback((()=>{P?.({reason:"outsideClick"})}),[P]);d.useOutsideClick({isDisabled:U,ref:j,handler:K});const q=u.getClientHints(),G=s.useCallback((()=>"ios"===q.platform?document.documentElement.clientWidth:window.innerWidth),[q.platform]),Z=s.useCallback((()=>{const e=G();"overlay"===R&&e<600&&I("fullOverlay"),"fullOverlay"===R&&e>600&&I("overlay")}),[G,R]);s.useEffect((()=>{if(j.current&&"opening"===_){const e=new ResizeObserver((()=>{Z()}));return e.observe(document.body),()=>{e.unobserve(document.body)}}}),[_,Z]);const ee=s.useCallback((e=>{const t=e.direction;("ltr"===Y&&"start"===v&&"left"===t||"end"===v&&"right"===t||"rtl"===Y&&"start"===v&&"right"===t||"end"===v&&"left"===t||"bottom"===v&&"down"===t)&&P?.({reason:"swipe"})}),[Y,v,P]),{swipeProps:te}=b.useSwipe(ee,{threshold:50,maximumTime:750,tolerance:40}),{classes:se}=h.useComponentTheme(g.DrawerPopupRedwoodTheme,{placement:H?v:"rtl"===Y?"start"===v?"right":"left":"start"===v?"left":"right",visibility:x,displayModeHorizontal:["start","end"].indexOf(v)>-1?R:void 0}),re=[...Object.values(y.colorInterpolations)],oe=w.mergeInterpolations(re),{...ae}=oe(k),ne=()=>t.jsx("div",{ref:j,className:se,style:ae,tabIndex:-1,role:"dialog",onKeyDown:$,"aria-label":D,"aria-labelledby":E,"aria-describedby":C,...te,...X,children:t.jsx(i.FocusTrap,{autoFocusRef:a,children:e})}),ie="unmounted"!==_;return ie?"modal"===S?t.jsx(n.Modal,{isOpen:ie,children:ne()}):t.jsx(r.Layer,{children:ne()}):null},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_DrawerPopup.js.map