define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useId-c9578d26', 'preact', './classNames-08d99695', './useComponentTheme-5aa41a8f', './Flex-db3ddadb', './Separator-181f7541', './ChevronDown-575edbfc', './CollapseIcon-c433fd3e', './ChevronUp-dd92fc9c', './UNSAFE_Collapsible/themes/redwood/CollapsibleTheme', './useAnimation-5bd3adfc', './useTestId-f3b8b319'], (function(e,n,s,a,i,o,t,l,d,r,c,u,b,p,h){"use strict";const x=({isExpanded:e,isDisabled:s,iconPosition:a})=>{const i=s?"disabled":"primary",o="start"===a&&e?r.SvgChevronDown:c.CollapseIcon,t="end"===a&&e?u.SvgChevronUp:r.SvgChevronDown,l="start"===a?o:t;return n.jsx(l,{size:"6x",color:i})},m={isDisabled:!1};const g=({children:e,id:a,contentId:r,isDisabled:c,isExpanded:u,iconPosition:p,variant:h="basic",toggleHandler:g,accessibleLabel:v,accessibleLabelId:C})=>{const[f,S]=s.useState(!1),E=s.useRef(!1),{classes:j,styles:y}=t.useComponentTheme(b.CollapsibleRedwoodTheme,{disabled:c?"isDisabled":"notDisabled",divider:"horizontal-rule"===h?"hasDivider":"noDivider",focused:f?"isFocused":"notFocused"}),D=o.classNames([y.headerChildrenStyle,"end"===p&&y.iconEndStyle,"start"===p&&y.iconStartStyle]),w=s.useCallback((e=>{if(g(e.target),f){(window&&"PointerEvent"in window&&e instanceof PointerEvent||e instanceof MouseEvent)&&S(!1)}}),[g,f]),{pressProps:I}=function(e,n=m){const[a,i]=s.useState(!1),o=s.useMemo((()=>({...m,...n})),[n]),t=s.useCallback((e=>{"Space"!==e.code&&"Enter"!==e.code||i(!0)}),[i]),l=s.useCallback((n=>{"Space"!==n.code&&"Enter"!==n.code||(i(!1),n.preventDefault(),e(n))}),[e,i]),d=s.useCallback((()=>{i(!1)}),[i]),r=s.useCallback((n=>{n.stopPropagation(),a||e(n)}),[e,a]);return{pressProps:o.isDisabled?{}:{onKeyDown:t,onKeyUp:l,onBlur:d,onClick:r}}}(w,{isDisabled:c}),T=s.useCallback((e=>{"focusin"!==e.type||E.current?S(!1):S(!0)}),[]),H=()=>{E.current=!0},k=()=>{E.current=!1},P=v?{"aria-label":v}:C?{"aria-labelledby":C}:{"aria-labelledby":a};return n.jsxs(n.Fragment,{children:[n.jsx("div",{id:a,className:j,...I,children:n.jsx(l.Flex,{align:"center",justify:"start"===p?"start":"between",children:n.jsxs(i.Fragment,{children:["end"===p&&n.jsx("div",{className:D,children:e}),n.jsx("div",{tabIndex:0,role:"button","aria-controls":r,"aria-expanded":u,onFocus:T,onBlur:T,onMouseDown:H,onMouseUp:k,className:y.chevronStyle,...P,children:n.jsx(x,{iconPosition:p,isExpanded:u,isDisabled:c})}),"start"===p&&n.jsx("div",{className:D,children:e})]})})}),"horizontal-rule"===h&&n.jsx(d.Separator,{})]})},v=({children:e,id:a,isExpanded:i,onTransitionEnd:l})=>{const[d,r]=s.useState(i?"expanding":"unmounted"),{styles:c}=t.useComponentTheme(b.CollapsibleRedwoodTheme),u=o.classNames([c.contentChildrenStyle,"unmounted"===d&&c.contentHiddenStyle]),h=s.useRef({overflowY:"hidden",maxHeight:i?"none":"0"});s.useEffect((()=>{("unmounted"!==d||i)&&r(i?"expanding":"collapsing")}),[i,d]);const{nodeRef:x}=p.useAnimation(d,{animationStates:C,onAnimationEnd:({animationState:e})=>{"collapsing"===e&&r("unmounted"),l?.()}});return n.jsx("div",{className:u,ref:x,id:a,tabIndex:-1,style:h.current,"aria-hidden":!i||void 0,children:e})},C={expanding:e=>({to:{maxHeight:`${e.scrollHeight}px`},options:{duration:400},end:{maxHeight:"none"}}),collapsing:e=>({..."none"===e.style.maxHeight&&{from:{maxHeight:`${e.scrollHeight}px`}},to:{maxHeight:"0"},options:{duration:400}})};e.Collapsible=({header:e,children:i,isDisabled:o=!1,isExpanded:t=!1,iconPosition:l="start",variant:d="basic",onToggle:r,onTransitionEnd:c,"aria-label":u,"aria-labelledby":b,testId:p})=>{const x=a.useId(),m=`oj-collapsible-header-${x}`,C=`oj-collapsible-content-${x}`,f=h.useTestId(p),S=s.useCallback((e=>{o||r?.({value:!t,target:e})}),[o,r,t]),E=s.useCallback((()=>{c?.({value:t})}),[c,t]);return n.jsxs("div",{...f,children:[n.jsx(g,{id:m,contentId:C,toggleHandler:S,isDisabled:o,isExpanded:t,iconPosition:l,variant:d,accessibleLabel:u,accessibleLabelId:b,children:e}),n.jsx(v,{id:C,isExpanded:t,onTransitionEnd:E,children:i})]})}}));
//# sourceMappingURL=Collapsible-8f15bec2.js.map
