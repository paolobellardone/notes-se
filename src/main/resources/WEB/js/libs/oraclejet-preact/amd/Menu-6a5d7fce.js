define(['exports', 'preact/jsx-runtime', 'preact/compat', './Floating-8f519f4d', './Layer-8d7bbd69', './LayerHost-0a244de8', 'preact/hooks', './mergeProps-bcfa6a92', './classNames-08d99695', './useUser-9b166ca3', './MenuItem-644f8619', './UNSAFE_Menu/themes/MenuStyles.css', './useTestId-f3b8b319', './UNSAFE_Menu/themes/DropdownMenuStyles.css', './useOutsideMousedown-73d5a78a', './Sheet-a398d015', './Modal-8f19889c', './UNSAFE_Menu/themes/SheetMenuStyles.css'], (function(e,s,t,n,r,o,a,u,l,i,c,d,m,f,h,b,p,y){"use strict";const M=({children:e,"aria-label":t,currentFocus:n="menu",display:r,closeSubmenu:o,menuId:f,menuLevel:h,anchorRef:b})=>{const{onClose:p,testId:y}=c.useMenuContext(),{direction:M}=i.useUser(),x=a.useRef(null),g=a.useRef({wasMouseMoved:!1,lastMouseLeaveMenuItemdRelatedTarget:null}),[k,S]=a.useState(),[C,j]=a.useState(!1),[w,E]=a.useState(!1),F=a.useCallback((e=>{S(e.key),"keyboard"===e.reason?j(!0):j(!1)}),[]),L=a.useCallback((()=>{const e=s=>{const t=c.keyElemExtractor(s.target),n=t?.key,r=t?.elem;if(n&&r){g.current.wasMouseMoved=!0;const s=new MouseEvent("mouseenter");r.dispatchEvent(s),x.current?.removeEventListener("mousemove",e)}};x.current?.addEventListener("mousemove",e)}),[]),{currentKeyProps:R}=function(e,s,t,n,r){const o=a.useMemo((()=>({ArrowDown:s,ArrowUp:e,Home:t,End:n})),[s,e,t,n]),u=a.useCallback((e=>{if(r){const s=o[e.key];if(s&&!e.shiftKey){const t=s();t&&r({key:t,reason:"keyboard"}),e.preventDefault()}}}),[r,o]);return{currentKeyProps:null==r?{}:{onKeyDown:u}}}(c.getPrevNext(x.current,!0,k),c.getPrevNext(x.current,!1,k),(()=>c.getNVisible(x.current,0)),(()=>c.getLastVisible(x.current)),F);a.useEffect((()=>{const e=x.current;let s;if("none"!==n&&e)if("menu"===n){F({key:void 0,reason:"click"});const t=()=>{e.focus()};"sheet"===r?t():s=setTimeout((()=>{t()}),v)}else if("firstItem"===n){const e=c.getNVisible(x.current,0);e&&F({key:e,reason:"keyboard"})}else if("secondItem"===n){const e=c.getNVisible(x.current,1);e&&F({key:e,reason:"keyboard"})}return()=>{clearTimeout(s)}}),[F,n,h,r,b]),a.useEffect((()=>{L()}),[L]);const I=m.useTestId(y);return s.jsx("div",{...f&&{id:f},ref:x,tabIndex:k||"main"!==h&&"sheet"!==r?-1:0,role:"menu","aria-label":t,class:l.classNames([d.menuStyles.menuContainerStyle,d.menuStyles[`${r}MenuContainerStyle`]]),...u.mergeProps(R,c.getKeyboardCloseProps(p,h),c.getCloseSubmenuEvent(M,o),c.getMenuContainerFocusMethods((()=>{x.current?.contains(document.activeElement)||(j(!1),E(!1))}),(()=>{E(!0)})),c.getMenuContainerMouseLeave((e=>{e.relatedTarget&&e.relatedTarget.isEqualNode(g.current.lastMouseLeaveMenuItemdRelatedTarget)||(F({key:void 0,reason:"mouseEnter"}),x.current?.focus())})),c.getMenuPointerDown()),...I,children:s.jsx(c.MenuContainerContext.Provider,{value:{menuContainerRef:x,currentKey:k,showFocusRing:C,changeKey:F,menuContainerGeneralInformation:g,isContainerFocused:w},children:e})})},v=0,x=t.forwardRef((({anchorRef:e,defaultPlacement:o,offsetValue:a,closeSubmenu:u,children:l,"aria-label":i,currentFocus:d,menuId:m,menuLevel:b,flipOptions:p,isOpen:y},v)=>{const x=t.useRef(null),{onClose:k}=c.useMenuContext(),S=t.useCallback((e=>{if("sub"===b)return;const s=c.keyElemExtractor(e.target)?.key;s||k?.({reason:"outsideClick",target:e.target})}),[k,b]);return h.useOutsideMousedown({ref:[x],handler:S,isDisabled:!y}),s.jsx(s.Fragment,{children:y?s.jsx(r.Layer,{logicalParentRef:e,children:s.jsx(n.Floating,{ref:x,class:f.dropdownMenuStyles.base,anchorRef:e,flipOptions:p,shiftOptions:{mainAxis:!1,crossAxis:!1},sizeOptions:{isMaxHeightAdjusted:!0,isMaxWidthAdjusted:!0},boundaryOptions:{padding:0},placement:o,offsetValue:a,children:s.jsx("div",{style:{minWidth:g},ref:v,children:s.jsx(M,{menuLevel:b,closeSubmenu:u,"aria-label":i,currentFocus:d,menuId:m,display:"dropdown",anchorRef:e,children:l})})})}):null})})),g=200,k=({children:e})=>s.jsx("div",{class:y.sheetMenuStyles.modalWrapper,children:e}),S=t.forwardRef((({children:e},t)=>s.jsx("div",{class:y.sheetMenuStyles.modalContainer,ref:t,children:e}))),C=({backdropVisible:e=!1})=>s.jsx("div",{class:l.classNames([y.sheetMenuStyles.modalBackdrop,e&&y.sheetMenuStyles.modalBackdropVisible])}),j=({children:e,"aria-label":t,currentFocus:n,anchorRef:o,closeSubmenu:u,menuLevel:l})=>{const{onClose:i}=c.useMenuContext();a.useEffect((()=>{const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[]);const d=a.useCallback((()=>{i?.({reason:"dismissed"})}),[i]),{backdropRef:m}=p.useModal({isOpen:!0,onBackdropClick:d}),{swipeProps:f}=b.useSheetSwipe(d);return s.jsx(r.Layer,{logicalParentRef:o,children:s.jsxs(k,{children:[s.jsx(C,{backdropVisible:"main"===l}),s.jsx(S,{ref:m,children:s.jsx("div",{class:y.sheetMenuStyles.sheetMenuContainerWrapper,...f,children:s.jsx(M,{"aria-label":t,currentFocus:n,display:"sheet",closeSubmenu:u,menuLevel:l,children:e})})})]})})},w=c.getIsMobile();e.DropdownMenu=x,e.Menu=({onClose:e,isOpen:t,testId:n,initialFocus:r="menu",placement:o="bottom-start",offsetValue:a=4,...u})=>s.jsx(c.MenuContext.Provider,{value:{onClose:e,isMobile:w,testId:n},children:s.jsx(s.Fragment,{children:w?s.jsx(s.Fragment,{children:t?s.jsx(j,{...u,currentFocus:r,menuLevel:"main"}):null}):s.jsx(x,{...u,isOpen:t,currentFocus:r,menuLevel:"main",defaultPlacement:o,offsetValue:a,flipOptions:{crossAxis:!0,mainAxis:!0,fallbackPlacements:["bottom-start","bottom-end","top-start","top-end","end-top","start-top","end-bottom","start-bottom"]}})})}),e.SheetMenu=j}));
//# sourceMappingURL=Menu-6a5d7fce.js.map
