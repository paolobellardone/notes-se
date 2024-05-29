define(['exports', 'preact/jsx-runtime', './ButtonLayout-071d379d', './NavDown-1dfa741a', './Menu-75b3116b', './MenuItem-13f190e0', 'preact/hooks', 'preact', './Floating-aaafdcf7', 'preact/compat', './TopLayerHost-d9bd8ecf', './mergeInterpolations-497657fd', './mergeProps-bae345c4', './useComponentTheme-9a36e65b', './classNames-49c3ba27', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './SelectMenuGroupContext-9ed12044', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./MenuSeparatorStyles.styles.css', 'module', './UNSAFE_Menu/themes/redwood/MenuSeparatorVariants.css', './BaseButton-4a512058', './TabbableModeContext-c9143afd', './dimensions-094b9f7d', './UNSAFE_SplitMenuButton/themes/redwood/SplitMenuButtonTheme.css'], (function(e,s,t,n,o,a,i,r,l,d,u,c,p,m,b,y,h,S,B,f,v,M,T,x,w,D,E,j){"use strict";const k=["embedded","min","noBorderRadiusStart"],C=[...k,"active"],N=["embedded","fill","noBorderRadiusEnd"],A=[...N,"fill","active"],F=[...Object.values(E.dimensionInterpolations)],g=c.mergeInterpolations(F),I=d.forwardRef((({children:e,label:a="",variant:r="outlined",isDisabled:l=!1,size:d="md",testId:u,onAction:c,"aria-describedby":y,onBlur:h,onFocus:S,onMouseEnter:B,onMouseLeave:f,onTouchEnd:v,onTouchStart:M,...T},x)=>{const[E,k]=i.useState(!1),[C,N]=i.useState(!1),{class:A,...F}=g(T),I=i.useCallback((e=>{" "===e.key||"Enter"===e.key?N(!0):"ArrowDown"==e.key&&(!l&&k((e=>!e)),e.preventDefault())}),[l,k,N]),_=i.useCallback((e=>{" "!==e.key&&"Enter"!==e.key||(!l&&c&&c(),N(!1))}),[l,c,N]),z=i.useCallback((()=>{N(!1)}),[N]),L=i.useRef(null);i.useImperativeHandle(x,(()=>L.current),[L]);const P=()=>{k(!E)},V=e=>{"dismissed"!==e.reason&&"itemAction"!==e.reason||L.current?.focus(),k(!1)},{classes:H,styles:K}=m.useComponentTheme(j.SplitMenuButtonRedwoodTheme,{styleVariant:r}),O=b.classNames([K.divider,l&&K.disabledDivider]),G={onBlur:h,onFocus:S,onMouseEnter:B,onMouseLeave:f,onTouchEnd:v,onTouchStart:M},$={onKeyDown:l?void 0:I,onKeyUp:_,onBlur:z},q=b.classNames([H,A]),J=()=>s.jsx(w.BaseButton,{elementDetails:{type:"span"},ref:L,isDisabled:l,styling:["container","min"],variant:r,size:d,testId:u,"aria-label":a,"aria-roledescription":"split menu button, press down arrow to invoke menu","aria-expanded":E,children:s.jsxs(D.TabbableModeContext.Provider,{value:{isTabbable:!1},children:[s.jsx(w.BaseButton,{elementDetails:{type:"span",isFocusable:!1},variant:r,styling:R(C),size:d,isDisabled:l,"aria-hidden":!0,onAction:c,children:a}),s.jsx("div",{class:`${O}`}),s.jsx(w.BaseButton,{elementDetails:{type:"span",isFocusable:!1},variant:r,styling:U(E),size:d,isDisabled:l,"aria-hidden":!0,onAction:P,children:s.jsx(t.ButtonLayout,{display:"icons",startIcon:s.jsx(n.SvgNavDown,{}),size:d,styling:"embedded"})})]})});return l?s.jsx("span",{role:"toolbar",class:q,style:F,children:J()}):s.jsxs("span",{role:"toolbar",class:q,...p.mergeProps(G,$),style:F,children:[J(),s.jsx(o.Menu,{anchorRef:L,isOpen:E,onClose:V,children:e})]})}));function U(e){return e?C:k}function R(e){return e?A:N}I.displayName="SplitMenuButton",e.SplitMenuButton=I}));
//# sourceMappingURL=SplitMenuButton-c329b3e5.js.map
