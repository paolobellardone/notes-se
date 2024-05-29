define(['exports', 'preact/jsx-runtime', 'preact/compat', './CheckboxRadioContext-04aa279d', './HiddenAccessible-00402562', './useComponentTheme-9a36e65b', './useFocus-dab1b280', './classNames-49c3ba27', './TabbableModeContext-c9143afd', './useTabbableMode-c39b463d', './useTranslationBundle-20ce0acf', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', 'preact/hooks', './Flex-0052275f', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './useId-e0c3517c', './Floating-aaafdcf7', './TopLayerHost-d9bd8ecf', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './logger-36c6eea0', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './FormContext-598efe92', './FormFieldContext-57ac57ba', './InputGroupContext-6c5f432c', './Popup-c6026a77', './UNSAFE_Separator/themes/SeparatorStyles.css', './useFocusWithin-dbdce73a', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './IconUserAssistance-0bb9f2a6', './StyledCheckbox-acf8ef54', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './useActive-152990ee', './stringUtils-c9076bae', './LayoutStyles.css-defee9f4'], (function(e,s,o,a,t,n,c,l,i,d,r,u,b,h,p,m,y,S,C,x,F,f,T,A,g,U,k,w,M,v,B,N,_,E,L,R,j,D,I,P,V,K,H,q,G,W,$,z,J,O,Q){"use strict";const X=o.forwardRef((({"aria-describedby":e,name:i,value:u,children:b,isChecked:h,isDisabled:p,isReadonly:m,isRequired:y,onChange:S,onKeyUp:C,assistiveText:x,helpSourceLink:f,helpSourceText:T,columnSpan:A=1},g=null)=>{const U=F.useId(),k=o.useRef(null),{isTabbable:w}=d.useTabbableMode(),{isActive:M,activeProps:v}=J.useActive(),{isFocusRingShown:B}=a.useCheckboxRadioContext(),{isFocus:N,focusProps:{onFocus:_,onBlur:E}}=c.useFocus(),{classes:L,styles:{valueLabelStyle:R}}=n.useComponentTheme(z.CheckboxRedwoodTheme,{disabled:p?"isDisabled":"notDisabled",focused:N&&B?"isFocused":"notFocused"}),j=!(p||m||!x&&!f),D=j?`${U}-help-available`:void 0,I=j?`${U}-icon-ua`:void 0,{formControl_helpAvailable:P}=r.useTranslationBundle("@oracle/oraclejet-preact"),V=P(),H=j?s.jsx(t.HiddenAccessible,{id:D,children:V}):void 0;delete v.onKeyDown;const{focusProps:q,isFocused:G}=K.useFocusWithin(),X=Q.layoutSpanStyles.layoutSpanColumn[A];return s.jsxs("label",{class:l.classNames([L,X]),children:[s.jsx("span",{...v,children:s.jsx($.StyledCheckbox,{"aria-describedby":O.merge([e,D]),name:i,value:u,onChange:S,onBlur:E,onFocus:_,onKeyUp:C,onKeyDown:e=>{const{key:s}=e;m||void 0===s||" "!==s||e.preventDefault()},isActive:M,isChecked:h?"checked":"unchecked",isDisabled:p,isReadonly:m,isRequired:y,ref:g})}),H,s.jsxs("span",{class:R,children:[s.jsx("span",{...v,...q,onMouseDown:e=>{const s=e.target.closest("a");s&&k.current?.contains(s)?e.stopPropagation():v.onMouseDown?.(e)},ref:k,children:b}),j&&s.jsx(W.IconUserAssistance,{assistiveText:x,helpSourceLink:f,helpSourceText:T,isTabbable:w&&(N||G),id:I})]})]})}));e.CheckboxControl=X}));
//# sourceMappingURL=CheckboxControl-619f7dc7.js.map