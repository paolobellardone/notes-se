define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Floating-aaafdcf7', './Layer-ea9920e0', 'preact/compat', './TopLayerHost-d9bd8ecf', './keyboardUtils-539a0e51', './UNSAFE_Dropdown/themes/dropdownStyles.css', './useOutsideMousedown-d53a6843'], (function(e,s,i,o,t,n,a,d,r,c){"use strict";const l={mainAxis:4,crossAxis:0},u={isMaxWidthAdjusted:!0,isMaxHeightAdjusted:!0};e.Dropdown=function({isOpen:e=!1,anchorRef:n,children:a,id:f,onClose:p,minWidth:h,placement:x="bottom-start",offset:m=l,onPosition:w,flipOptions:y,sizeOptions:A=u}){const O=i.useRef(null),b=i.useCallback((e=>{p?.({reason:"outsideMousedown",target:e.target})}),[p]),g=i.useCallback((e=>{if(!e.defaultPrevented)switch(e.code){case d.KEYS.ESC:case d.KEYS.TAB:p?.({reason:"dismissed"})}}),[p]);return c.useOutsideMousedown({isDisabled:!1,ref:[O],handler:b}),s.jsx(s.Fragment,{children:e?s.jsx(t.Layer,{logicalParentRef:n,children:s.jsx(o.Floating,{anchorRef:n,ref:O,placement:x,flipOptions:y,shiftOptions:{mainAxis:!1,crossAxis:!1},sizeOptions:A,offsetValue:m,onPosition:w,children:s.jsx("div",{id:f,class:r.dropdownStyles.base,style:{minWidth:`${h||0}px`},onKeyDown:g,children:a})})}):null})}}));
//# sourceMappingURL=Dropdown-e4389c05.js.map
