define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './logger-0f873e29', './TabbableModeContext-a9c97640', './LayerHost-639b3284', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', './CompactUserAssistance-3370a318', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'preact', 'css!./IconStyle.styles.css', './Popup-66e79afa', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './classNames-08d99695', './keyboardUtils-fbb389f8', './getFormatParse-c1655d39', './maskUtils-33317129', './UNSAFE_InputTimeMask/themes/SegmentStyles.css', './clientHints-4f5a07b0', './useTranslationBundle-d07d4b20', './timeUtils-542b7a3c', './Flex-3421f0df', './HiddenAccessible-037ef42d', './LiveRegion-9a362373', './stringUtils-0ae982c2', './useComponentTheme-5aa41a8f', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './useUser-3ef25571', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './useDoubleTap-b6bf5458', './useTabbableMode-dc440317', './Label-3912beb2', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-b4278437', './TextField-1021f00b', 'css!./LiveRegionStyles.styles.css', './useFocusableTextField-8b755b15', './FormContext-5130e198', './useFormContext-30acdd33', './useTextField-e6877c79', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './vanilla-extract-recipes-createRuntimeFn.esm-d881c69a', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles.css', './IconButton-ae9a01ce', './BaseButton-19a622bc', './usePress-949a0d03', './usePressClick-b7b38da2', './useHover-7964884c', './useToggle-a29f97af', './useActive-bb5dc069', './useColorScheme-443e7cc7', './dimensions-60420dbb', './size-a75b3f13', './utils-5077c092', './colorUtils-7c069766', './_curry1-df649359', './mergeInterpolations-9ede4cf7', './mergeDeepWithKey-aaab9019', './_curry3-83878f86', './_curry2-86c52b86', './_isObject-42bafc94', './mergeProps-bcfa6a92', './UNSAFE_BaseButton/themes/redwood/BaseButtonTheme', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './UNSAFE_BaseButton/themes/redwood/BaseButtonVariants.css', 'module', './useTestId-b5cd4766', './ButtonLabelLayout-2e0e8d09', './Text-cd61a065', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './useButtonLabelLayoutTheme-3237026f', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutTheme', './UNSAFE_ButtonLabelLayout/themes/ButtonLabelLayoutStyles.css', 'css!./ButtonLabelLayoutStyles.styles.css', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLabelLayout/themes/redwood/ButtonLabelLayoutVariants.css', 'css!./ButtonLabelLayoutVariants.styles.css', './useTooltip-b43ad881', './useTooltipControlled-ee3276de', './useId-c9578d26', './useFocus-4194fc59', './useTouch-37489bb5', './useAnimation-5a74955f', './useThemeInterpolations-ab618dee', './useScale-e311d35f', './theme-a8f3d819', './Theme-d945adae', './useDensity-f0f7ae9a', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './buttonUtils-97878e90', './id-c70ab33c', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-2e19d8de', './getLocale-ae79e654', './TransitionGroup-3b9d81b6', './MessagesContext-602a69a2', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './ComponentMessageContainer-8028ba70', './MessagesManager-d5686336', './SuccessS-c5d520d2', './Icon-2d38c876', './UNSAFE_Icon/themes/IconStyle.css', './ErrorS-d2efaf06', './InformationS-2f6b535d', './WarningS-2b4729ba', './PRIVATE_Message/themes/MessageStyles.css', './soundUtils-f6535f03', './useMessagesContext-1395a997', './Transition-04efcc49', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', './InlineHelp-a169f974', './InlineHelpSource-85961e81', './useInputGroupContext-e6e19f4f', './Separator-181f7541', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./SeparatorStyles.styles.css', './CompactHelpSource-74498e92', './Help-000f2775', './useFocusWithin-5a504fca', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', './EnvironmentProvider-c0e1e39b', './LayerManager-2972de92', './Floating-5d98c1ca', './useFloating-bf8ed6cb', './positionUtils-6e4daa31', './refUtils-d354a169', './useOutsideClick-76c1ff6e', './arrayUtils-6ee96a35', './Layer-6f29b67f', './UNSAFE_Layer/themes/LayerStyles.css', 'css!./LayerStyles.styles.css', './useModal-536cb7ff', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-eceadd82', './UNSAFE_Floating/themes/FloatingContract.css', './tabbableUtils-85aa6918', './head-9cb1a3da', './_arity-5a5f5f71', './_isArray-32602db6', './_isString-d0ada3cb', './FocusTrap-60520575', './FocusTracker-2ac5bbfe', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-7bece8d5', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './WindowOverlay-43c10424', './UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./WindowOverlayStyles.styles.css', './UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', './UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', './usePopupAnimation-6e53a0fe', './useAnimationStatus-86746674', './popupAnimationUtils-49b93365', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'css!./PopupStyles.styles.css', './types-2446783b', './calendarDateUtils-1783eb17', 'css!./SegmentStyles.styles2.css', './boxalignment-905057dc', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-84d30764', './flexbox-8521f6aa', 'css!./flexbox.styles.css', './flexitem-5db48325', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', 'css!./TextFieldInputVariants.styles.css', './CompactLabelAssistance-c6928282', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css', './useAccessibleContext-23e8a333', './useTextFieldInputHandlers-390330d9', './textAlign-ef924afd', 'css!./text.styles.css', './TextFieldUtils-f3868e96', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldInputStyles.css', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './LabelValueLayout-194e64d9', 'css!./LabelValueLayoutStyles.styles.css', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_RadioItem/themes/RadioStyles.css', 'css!./RadioStyles.styles.css', './UNSAFE_RadioItem/themes/redwood/RadioBaseTheme.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/FormLayoutStyles.css', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', 'css!./CheckboxStyles.styles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', 'css!./CheckboxVariants.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './LayoutStyles.css-c8bc984d', 'css!./LayoutStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles2.css', './useMessageSeverity-1d69e1ae', './useFormFieldContextProps-4e36b4c3'], (function(e,t,s,a,o,i,n,r,l,d,c,u,m,y,p,h,S,b,F,T,g,f,v,x,A,w,C,U,E,k,_,L,N,P,B,R,I,M,D,H,V,j,O,W,Z,q,$,K,z,G,J,Q,X,Y,ee,te,se,ae,oe,ie,ne,re,le,de,ce,ue,me,ye,pe,he,Se,be,Fe,Te,ge,fe,ve,xe,Ae,we,Ce,Ue,Ee,ke,_e,Le,Ne,Pe,Be,Re,Ie,Me,De,He,Ve,je,Oe,We,Ze,qe,$e,Ke,ze,Ge,Je,Qe,Xe,Ye,et,tt,st,at,ot,it,nt,rt,lt,dt,ct,ut,mt,yt,pt,ht,St,bt,Ft,Tt,gt,ft,vt,xt,At,wt,Ct,Ut,Et,kt,_t,Lt,Nt,Pt,Bt,Rt,It,Mt,Dt,Ht,Vt,jt,Ot,Wt,Zt,qt,$t,Kt,zt,Gt,Jt,Qt,Xt,Yt,es,ts,ss,as,os,is,ns,rs,ls,ds,cs,us,ms,ys,ps,hs,Ss,bs,Fs,Ts,gs,fs,vs,xs,As,ws,Cs,Us,Es,ks,_s,Ls,Ns,Ps,Bs,Rs,Is,Ms,Ds,Hs,Vs,js,Os,Ws,Zs,qs,$s,Ks,zs,Gs,Js,Qs,Xs,Ys,ea,ta,sa,aa,oa,ia,na,ra,la,da,ca,ua,ma,ya,pa,ha,Sa,ba,Fa,Ta,ga,fa,va,xa,Aa,wa,Ca,Ua,Ea,ka,_a,La,Na,Pa,Ba,Ra,Ia,Ma,Da,Ha,Va,ja,Oa,Wa,Za,qa,$a,Ka,za,Ga,Ja,Qa,Xa){"use strict";const Ya=e=>{e.preventDefault()},eo=()=>"ios"===L.getClientHints().platform,to=({amPm:e,"aria-label":s,"aria-valuemax":o,"aria-valuemin":i,"aria-valuenow":n,"aria-valuetext":r,inputRef:l,isDisabled:d,isHidden:c,isHighlighted:u,isInvalid:m,isRequired:y,isSelected:p,onChange:h,placeholder:S,text:b,type:F})=>{const T=b&&b.length>0,g=C.classNames([_.segmentStyles.base,p&&_.segmentStyles.selected,u&&_.segmentStyles.highlighted]),f=C.classNames([_.segmentStyles.placeholder,c||T?_.segmentStyles.hidden:_.segmentStyles.notHidden]),v=N.useTranslationBundle("@oracle/oraclejet-preact").formControl_empty_segment(),x=a.useRef(null),A=l??x,w=a.useRef(null),E=a.useCallback((t=>{if(!0!==d&&"Tab"!==t.key&&"ArrowLeft"!==t.key&&"ArrowRight"!==t.key&&"Enter"!==t.key&&!U.isSelectAll(t)){if(u){if(U.isBackspaceOrDelete(t)||"Backspace"===t.key)return}else if(k.isNumberOnlyString(t.key))"dayPeriod"!==F&&h?.({actionType:"updateSegment",data:{type:F,text:t.key}});else if(U.isBackspaceOrDelete(t)||"Backspace"===t.key)h?.({actionType:"clearSegment",data:{type:F}});else if("ArrowUp"===t.key)h?.({actionType:"step",data:{direction:"increase",type:F}});else if("ArrowDown"===t.key)h?.({actionType:"step",data:{direction:"decrease",type:F}});else if("PageUp"===t.key)h?.({actionType:"page",data:{direction:"increase",type:F}});else if("PageDown"===t.key)h?.({actionType:"page",data:{direction:"decrease",type:F}});else if("Home"===t.key)h?.({actionType:"goToHome",data:{type:F}});else if("End"===t.key)h?.({actionType:"goToEnd",data:{type:F}});else if("dayPeriod"===F&&void 0!==e&&so(t.key,t)){w.current=null!==w.current?w.current+t.key:t.key;const s=P.getAmPmMatchType(e,w.current);if("am"===s||"pm"===s){const e="am"===s?P.AM_VALUE:P.PM_VALUE;h?.({actionType:"updateDayPeriodSegment",data:{type:F,"aria-valuenow":e}})}"both"!==s&&(w.current=null)}t.preventDefault(),t.stopPropagation()}}),[e,d,u,h,F]);a.useEffect((()=>{p?A.current?.focus():"dayPeriod"===F&&(w.current=null)}),[p,A,F]);const L=void 0===r?v:n?.toString()===r?void 0:r,B={"data-segment":[F]};return t.jsx("div",{children:t.jsxs("div",{ref:A,role:eo()?"textbox":"spinbutton","aria-disabled":d,"aria-invalid":m||void 0,"aria-label":s,"aria-required":y,"aria-valuemin":eo()?void 0:i,"aria-valuemax":eo()?void 0:o,"aria-valuenow":eo()?void 0:n,"aria-valuetext":eo()?void 0:L,autocapitalize:"off",autocorrect:"off",class:g,contentEditable:!d,...B,enterkeyhint:d?void 0:"done",inputMode:d?"none":"dayPeriod"!==F?"numeric":"text",onCut:Ya,onKeyDown:E,onPaste:Ya,spellcheck:!1,tabIndex:p?0:-1,children:[t.jsx("span",{"aria-hidden":"true",class:f,...B,children:S}),b]})})},so=(e,t)=>{const s=/^\p{L}$/u.test(e),a=U.isControlOrFunctionKey(t);return s&&!a},ao=(e,t)=>{if("reset"===t.actionType)return t.data;const s=t.data?.type,a=no(e.segments,s);switch(t.actionType){case"clearTime":{const t=Fo(ho(e.segments),e.orderedSegments);return Uo(e,t,!1)}case"clearSegment":{const t=po(a);return yo(e,s,t)}case"deselectAndComplete":{let t=wo(e.segments);return t=xo(t),Uo(e,t,!1)}case"commitOnEnter":{const t=wo(e.segments);return{...Uo(e,t,!1),committing:!0}}case"commitOnBlur":{let t=wo(e.segments);t=xo(t);return{...Uo(e,t,!1),committing:!0}}case"committed":return{...e,committing:!1};case"goToEnd":{const t=Lo(s,a);return yo(e,s,t,!1)}case"goToHome":{const t=_o(s,a);return yo(e,s,t,!1)}case"page":{const o=t.data?.direction;if(void 0===o)return e;const i=No(s,a,"page",o);return yo(e,s,i,!1)}case"selectTime":return Co(e);case"selectFirst":{const t=Fo(e.segments,e.orderedSegments);return Uo(e,t,!1)}case"selectNext":{const t=Ao(e.segments,!0),s=fo(t,e.orderedSegments);return Uo(e,s,!1)}case"selectPrevious":{const t=vo(e.segments,e.orderedSegments);return Uo(e,t,!1)}case"selectSegment":{const t=bo(e.segments,s);return Uo(e,t,!1)}case"step":{const o=t.data?.direction;if(void 0===o)return e;const i=No(s,a,"step",o);return yo(e,s,i,!1)}case"updateDayPeriodSegment":if("dayPeriod"===s){const o=t.data?.["aria-valuenow"];if(12===o||0===o){const t=ko(s,o,a);return yo(e,s,t,!1)}}return e;case"updateSegment":{const o=So(s,a,t);return yo(e,s,o)}default:throw new Error("Unknown action type")}},oo=e=>+e,io=e=>e.toString(),no=(e,t)=>e.find((e=>e.type===t)),ro=e=>e.every((e=>e.text&&e.text.length>0)),lo=e=>e.some((e=>void 0!==e["aria-valuenow"])),co=e=>{if(!lo(e))return;const t=e.find((e=>"dayPeriod"===e.type))?.["aria-valuenow"],s=e.find((e=>"hour"===e.type))?.["aria-valuenow"];let a=s;void 0!==t&&void 0!==s&&(a=Bo(t,s));const o=e.filter((e=>"dayPeriod"!==e.type)).reduce(((e,t)=>{const s="hour"===t.type?a:t["aria-valuenow"];return void 0!==s&&(e[t.type]=s),e}),{});return 0===Object.entries(o).length?void 0:o},uo=e=>[...e.orderedSegments],mo=e=>e.map((e=>{if(void 0!==e["aria-valuenow"])return e;let t,s;return"millisecond"===e.type?(t="000",s=0):["minute","second"].includes(e.type)?(t="00",s=0):"dayPeriod"===e.type&&(t=e.amPm?.am,s=0),void 0!==t?{...e,"aria-valuenow":s,text:t,isComplete:!0,"aria-valuetext":t}:e})),yo=(e,t,s,a=!0)=>{const o=((e,t,s,a,o)=>{const i=((e,t,s)=>e.map((e=>e.type===t?s:e)))(e,s,a);let n=i;return"hour"===s&&a.isComplete&&(n=mo(n)),n=a.isComplete&&o?fo(n,t):n,n})(e.segments,e.orderedSegments,t,s,a);return((e,t)=>({committing:e.committing,currentTime:co(t),isCompleteTime:ro(t),isTimeSelected:e.isTimeSelected,isPartialTime:lo(t),orderedSegments:uo(e),segments:t}))(e,o)},po=e=>({...e,"aria-valuetext":void 0,"aria-valuenow":void 0,digitCount:0,text:void 0,isComplete:!1}),ho=e=>e.map((e=>({...po(e)}))),So=(e,t,s)=>{const a=s.data?.text,o=t["aria-valuemax"],i=t["aria-valuemin"],n=0===i,r=n,l=t.isComplete;let d=t.digitCount||0;const c="millisecond"===e?3:2;if(!n&&"0"===a&&(l||void 0===t.text||""===t.text))return{...t,digitCount:1};let u=t.text||"";u=l?a:(t.text??"")+a,r&&u.length>c?u=u.slice(u.length-c):r&&(u=u.padStart(c,"0")),d+=1;var m,y;const p=(m=oo(u),y=o,m>=i&&m<=y)?u:r?a.padStart(c,"0"):a,h=oo(p),S=((e,t,s,a)=>s>=a||oo(io(e)+"0")>t)(h,o,d,c);return d=S?0:d,{...t,"aria-valuetext":p,"aria-valuenow":h,digitCount:d,text:p,isComplete:S}},bo=(e,t)=>e.map((e=>({...e,isSelected:e.type===t}))),Fo=(e,t)=>bo(e,t[0]),To=(e,t)=>{const s=e.find((e=>!0===e.isSelected));return void 0===s?-1:t.findIndex((e=>e===s.type))},go=e=>e.map((e=>e.isSelected?{...e,isComplete:!0,digitCount:0}:e)),fo=(e,t)=>{const s=To(e,t);return s===t.length-1?e:bo(go(e),t[s+1])},vo=(e,t)=>{const s=To(e,t);return 0===s?e:-1===s?Fo(e,t):bo(go(e),t[s-1])},xo=e=>e.map((e=>({...e,isSelected:!1,isComplete:!!e.text}))),Ao=(e,t)=>{const s=e.find((e=>"hour"===e.type));return(!t||s?.isSelected)&&void 0!==s?.text?mo(e):e},wo=e=>(e=>{const t=e.find((e=>"dayPeriod"===e.type)),s=e.find((e=>"hour"===e.type));return void 0===s?.text&&void 0!==t?.text?e.map((e=>"dayPeriod"===e.type?po(e):{...e})):e})(Ao(e)),Co=e=>e.isCompleteTime?Uo(e,e.segments.map((e=>({...e,isSelected:!1}))),!0):e,Uo=(e,t,s)=>({committing:e.committing,currentTime:co(t),isCompleteTime:ro(t),isTimeSelected:s,isPartialTime:lo(t),orderedSegments:uo(e),segments:t}),Eo=(e,t,s,a,o)=>{const i=a-s+1;if(0===s){if("increase"===o){return(e+t)%i}return(e-t+i)%i}if("increase"===o){return(e+t-s)%i+s}return(e-t-s+i)%i+s},ko=(e,t,s)=>{const a=1===s["aria-valuemin"],o=Po(t,s,e,!a);return{...s,"aria-valuetext":o,"aria-valuenow":t,text:o,isComplete:!0}},_o=(e,t)=>{const s=(e=>e["aria-valuemin"])(t);return ko(e,s,t)},Lo=(e,t)=>{const s=(e=>e["aria-valuemax"])(t);return ko(e,s,t)},No=(e,t,s,a)=>{const o="hour"===e&&1===t["aria-valuemin"]?12:t["aria-valuemin"],i=t["aria-valuenow"],n=t["aria-valuemin"],r=t["aria-valuemax"];let l;return l="dayPeriod"===e?0===i?12:0:void 0===i?o??n:"page"===s?((e,t,s,a,o)=>{let i;return i="minute"===o||"second"==o?10:"millisecond"===o?100:2,Eo(e,i,s,a,t)})(i,a,n,r,e):((e,t,s,a)=>Eo(e,1,s,a,t))(i,a,n,r),ko(e,l,t)},Po=(e,t,s,a)=>{if("dayPeriod"===s){const s=t.amPm?.am,a=t.amPm?.pm;return e<12?s:a}const o=io(e);if(!a)return io(e);const i="millisecond"===s?3:2;return o.padStart(i,"0")},Bo=(e,t)=>0===e&&12===t?0:12===e&&12===t?12:12===e?t+12:t,Ro=e=>{const{ariaLabels:t,currentValue:s,granularity:a,hasLeadingZeroForHour:o,locale:i,timeMasks:n}=e,r=n.filter((({type:e})=>"literal"!==e)).map((({type:e})=>e)),l=s?.minute,d=s?.second,c=s?.millisecond,u=n.some((e=>"dayPeriod"===e.type)),m=void 0!==s?.hour,y=m?P.getHourValueStr(s.hour,u,o):void 0,p=void 0!==y?oo(y):void 0,h=u&&m?P.getDayPeriodValueStr(i,s.hour):void 0,S=void 0!==h?P.getDayPeriodValueFromHour(s.hour):void 0,b=void 0===s?.minute?void 0:P.padWithZero(s.minute,2),F=void 0===s?.second?void 0:P.padWithZero(s.second,2),T=void 0===s?.millisecond?void 0:P.padWithZero(s.millisecond,3),g=void 0!==p&&void 0!==l&&("second"!==a||void 0!==d)&&("millisecond"!==a||void 0!==d&&void 0!==c)&&(!u||void 0!==S),f=void 0!==p||void 0!==l||("second"===a||"millisecond"===a)&&void 0!==d||"millisecond"===a&&void 0!==c,v=[{type:"second","aria-label":t.second,"aria-valuemin":0,"aria-valuemax":59,"aria-valuenow":d,"aria-valuetext":F,isComplete:void 0!==d,isSelected:!1,text:F}],x=[{type:"millisecond","aria-label":t.millisecond,"aria-valuemin":0,"aria-valuemax":999,"aria-valuenow":c,"aria-valuetext":T,isComplete:void 0!==T,isSelected:!1,text:T}],A=[{type:"dayPeriod",amPm:P.getAmPmStringsForLocale(i),"aria-label":t.dayPeriod,"aria-valuemin":P.AM_VALUE,"aria-valuemax":P.PM_VALUE,"aria-valuenow":S,"aria-valuetext":h,isComplete:void 0!==h,isSelected:!1,text:h}];return{committing:!1,currentTime:s,isCompleteTime:g,isTimeSelected:!1,isPartialTime:f,orderedSegments:r,segments:[{type:"hour","aria-label":t.hour,"aria-valuemin":u?1:0,"aria-valuemax":u?12:23,"aria-valuenow":p,"aria-valuetext":y,isComplete:void 0!==p,isSelected:!1,text:y},{type:"minute","aria-label":t.minute,"aria-valuemin":0,"aria-valuemax":59,"aria-valuenow":l,"aria-valuetext":b,isComplete:void 0!==l,isSelected:!1,text:b},..."second"===a||"millisecond"===a?v:[],..."millisecond"===a?x:[],...u?A:[]]}},Io=({isHidden:e,isHighlighted:s,isPlaceholder:a,text:o})=>{const i=C.classNames([_.segmentStyles.literalBase,a&&_.segmentStyles.placeholder,s&&_.segmentStyles.highlighted,e?_.segmentStyles.hidden:_.segmentStyles.notHidden]);return t.jsx("span",{"aria-hidden":"true",class:i,children:o})};const Mo=({timeResetRef:e,direction:t,dispatch:s,groupRef:o,isDisabled:i,isFocused:n,isInputFocused:r,onCommit:l,onInput:d,state:c,value:u})=>{const{tabbableModeProps:{tabIndex:m}}=Z.useTabbableMode(),y=c.segments.some((e=>!!e.isSelected)),p=-1===m||y||i?-1:0,h=a.useRef(c.currentTime),S=a.useRef(c.currentTime),b=a.useRef(!1),F=a.useRef(!!n);e.current&&(h.current=u,S.current=u);const T=a.useCallback((e=>{s(e)}),[s]),g=a.useCallback((e=>{const t=e.target.getAttribute("data-segment");s(t?{actionType:"selectSegment",data:{type:t}}:{actionType:"selectFirst"})}),[s]),f=a.useCallback(((e=!0)=>{c.isCompleteTime&&(s({actionType:"selectTime"}),e&&o?.current?.focus())}),[s,o,c.isCompleteTime]),v=a.useCallback((()=>{f()}),[f]),x=a.useCallback((e=>{e.target.getAttribute("data-segment")&&f(!1)}),[f]),A=W.useDoubleTap({onDoubleTap:x,onSingleTap:g}),w=a.useCallback((e=>{"ltr"===t&&"ArrowLeft"===e.key||"rtl"===t&&"ArrowRight"===e.key?(s({actionType:"selectPrevious"}),e.stopPropagation()):"ltr"===t&&"ArrowRight"===e.key||"rtl"===t&&"ArrowLeft"===e.key?(s({actionType:"selectNext"}),e.stopPropagation()):(U.isBackspaceOrDelete(e)||"Backspace"===e.key)&&c.isTimeSelected?(s({actionType:"clearTime"}),b.current=!0,e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()):U.isSelectAll(e)?(f(),e.preventDefault(),e.stopPropagation()):"Enter"===e.key&&(s({actionType:"commitOnEnter"}),e.preventDefault(),e.stopPropagation())}),[t,s,f,c.isTimeSelected]);if(F.current&&!n&&s({actionType:"commitOnBlur"}),F.current=!!n,c.committing){if(P.timesAreDifferent(S.current,c.currentTime)){const e=void 0!==c.currentTime?Object.freeze({...c.currentTime}):c.currentTime;l?.({value:e})}s({actionType:"committed"}),S.current=c.currentTime}if(P.timesAreDifferent(h.current,c.currentTime)&&!e.current){const e=void 0!==c.currentTime?Object.freeze({...c.currentTime}):c.currentTime;d({value:e}),h.current=e}e.current=!1;const C=a.useRef(!1),E=a.useRef(),k=a.useCallback((()=>{C.current=!0,clearTimeout(E.current),E.current=setTimeout((()=>{C.current=!1}),200)}),[]),_=a.useRef(!1);!r||_.current||C.current||s({actionType:"selectFirst"}),r||!_.current||C.current||s({actionType:"deselectAndComplete"}),r!==_.current&&(C.current=!1,_.current=!!r);const N=function(){const e=L.getClientHints().deviceType;return"phone"===e||"tablet"===e}()?{...A,onKeyDown:w}:{onClick:g,onDoubleClick:v,onKeyDown:w,onPointerDown:k};return{timeClearedRef:b,timeFieldHandlers:i?{}:N,segmentHandlers:i?{}:{onChange:T},tabIndex:p}},Do=(e,t)=>e.find((e=>e.type===t)),Ho=({"aria-describedby":e,"aria-invalid":s,"aria-label":o,"aria-labelledby":i,baseId:n,fieldRef:r,granularity:l="minute",hasLeadingZeroForHour:d,hasInsideLabel:c,isRequired:u,masks:m,onBlur:y,onCommit:p,onFocus:h,onInput:S,textAlign:b,value:F,variant:T="default"})=>{const{direction:g,locale:f}=j.useUser(),{am:v,pm:x}=a.useMemo((()=>P.getAmPmStringsForLocale(f)),[f]),A=N.useTranslationBundle("@oracle/oraclejet-preact"),w=A.inputTimeMask_time_cleared(),U={hour:A.formControl_hour(),minute:A.formControl_minute(),second:A.formControl_second(),millisecond:A.formControl_millisecond(),dayPeriod:`${v}/${x}`},{isDisabled:E,isFocused:k,isInputFocused:_}=V.useFormFieldContext(),L=void 0!==F,{classes:H}=D.useComponentTheme(O.TextFieldInputRedwoodTheme,{type:"notPassword",styleVariant:T,textarea:"notTextArea",input:"notInput",div:"isDiv",prefix:"noPrefix",suffix:"noSuffix",startContent:"noStartContent",endContent:"noEndContent",insideLabel:c?"hasInsideLabel":"noInsideLabel",value:L?"hasValue":"noValue",focused:k?"isFocused":"notFocused",disabled:E?"isDisabled":"notDisabled"}),W=C.classNames([H]),{state:Z,dispatch:q,timeResetRef:$}=(({ariaLabels:e,granularity:t,hasLeadingZeroForHour:s,locale:o,timeMasks:i,value:n})=>{const[r,l]=a.useReducer(ao,{ariaLabels:e,currentValue:n,hasLeadingZeroForHour:s,granularity:t,locale:o,timeMasks:i},Ro),d=a.useRef(n),c=a.useRef(!1);P.timesAreDifferent(d.current,n)&&(d.current=n,P.timesAreDifferent(n,r.currentTime))&&(l({actionType:"reset",data:Ro({ariaLabels:e,currentValue:n,hasLeadingZeroForHour:s,granularity:t,locale:o,timeMasks:i})}),c.current=!0);return{timeResetRef:c,dispatch:l,state:r}})({ariaLabels:U,timeMasks:m,granularity:l,hasLeadingZeroForHour:d,locale:f,value:F}),{isTimeSelected:K,isPartialTime:z,segments:G}=Z,J={hour:Do(G,"hour"),minute:Do(G,"minute"),second:"second"===l||"millisecond"===l?Do(G,"second"):void 0,millisecond:"millisecond"===l?Do(G,"millisecond"):void 0,dayPeriod:Do(G,"dayPeriod")},Q=a.useRef(null),{timeFieldHandlers:X,timeClearedRef:Y,segmentHandlers:ee,tabIndex:te}=Mo({timeResetRef:$,direction:g,dispatch:q,groupRef:Q,isDisabled:E,isFocused:k,isInputFocused:_,onCommit:p,onInput:S,state:Z,value:F}),se=void 0===F&&c&&!k,ae=Z.isCompleteTime?P.formatTimeFromMasks(f,Z.currentTime,l,m,d):"",oe=`${n}-time`,ie=Z.isCompleteTime?t.jsx(R.HiddenAccessible,{id:oe,children:ae}):void 0,ne=Z.isCompleteTime?M.merge([e,oe]):e,re=Y.current?w:"",le=Z.orderedSegments[0];return t.jsxs("div",{"aria-describedby":ne,"aria-label":o,"aria-labelledby":i,class:W,onFocusIn:h,onFocusOut:y,ref:Q,role:"group",tabIndex:te,...X,children:[t.jsx(B.Flex,{direction:"row",wrap:"nowrap",justify:b,children:m.map((({type:e,value:a})=>{const o="literal"!==e?J[e]:{};return"literal"===e?t.jsx(Io,{isHidden:se,isHighlighted:K,isPlaceholder:!z,text:a}):t.jsx(to,{inputRef:e===le?r:void 0,isDisabled:E,isInvalid:!!s,isHidden:se,isHighlighted:K,isRequired:u,placeholder:a,type:e,...ee,...o})}))}),ie,t.jsx(I.LiveRegion,{children:re})]})},Vo=s.forwardRef((({"aria-describedby":e,assistiveText:s,columnSpan:o,endContent:i,granularity:n="minute",helpSourceLink:r,helpSourceText:l,isHour12:d,isDisabled:m,isReadonly:y,isRequired:p,isRequiredShown:h,label:S,labelEdge:b,labelStartWidth:F,hasLeadingZeroForHour:T,mainFieldRef:g,messages:f,masks:v,testId:x,textAlign:A,userAssistanceDensity:w,value:C,variant:U,onCommit:E,onInput:k},_)=>{const{isDisabled:L,isReadonly:N,labelEdge:B,labelStartWidth:R,textAlign:I,userAssistanceDensity:M}=ee.useFormContext(),D=m??L,V=y??N,O=b??B,W=F??R,Z=A??I,$=w??M,K=a.useRef(null),Q=a.useRef(null),{focusProps:Y,isFocused:se,methods:ae}=X.useFocusableTextField({isDisabled:D,isReadonly:V,enabledElementRef:K,readonlyElementRef:Q});a.useImperativeHandle(_,(()=>ae),[ae]);const oe=se,{baseId:ie,formFieldContext:ne,inputProps:re,labelProps:le,textFieldProps:de,userAssistanceProps:ce}=te.useTextField({ariaDescribedBy:e,helpSourceLink:r,helpSourceText:l,isDisabled:D,isFocused:oe,isReadonly:V,isRequiredShown:h,labelEdge:O,messages:f,styleVariant:U,userAssistanceDensity:$,value:C}),{forId:ue,...me}=le,{id:ye,...pe}=re,he=me.id,Se=a.useCallback((()=>{K.current?.focus()}),[K]),be="none"!==O?t.jsx(q.Label,{...D||V?{}:{onClick:Se},...me,children:S}):void 0,Fe={label:"none"!==O?be:void 0,labelEdge:"none"!==O?O:void 0,labelStartWidth:"none"!==O?W:void 0},Te="none"===O?S:void 0,ge=void 0!==S&&"inside"===O,fe="efficient"===$||"reflow"===$?D||V?"efficient"!==$?void 0:t.jsx(c.InlineUserAssistance,{userAssistanceDensity:$,...ce}):t.jsx(c.InlineUserAssistance,{assistiveText:s,fieldLabel:S,helpSourceLink:r,helpSourceText:l,messages:f,isRequiredShown:h,userAssistanceDensity:$,...ce}):void 0,ve=a.useRef(null),xe=g??ve,Ae="compact"===$?t.jsx(u.CompactUserAssistance,{anchorRef:xe,messages:f,assistiveText:s,...ce}):void 0,{locale:we}=j.useUser();if(jo(v,n,d),void 0!==v&&void 0===d){const e=void 0!==v.find((e=>"dayPeriod"===e.type));d=e}const Ce=a.useMemo((()=>v?P.replaceCustomMasksValuesWithPlaceholders(we,v):P.getTimeMasksFromLocaleAndOptions(we,n,d)),[n,d,we,v]),Ue=T??P.getLeadingZeroForHour(we);if(V)return t.jsx(H.FormFieldContext.Provider,{value:ne,children:t.jsx(G.ReadonlyTextField,{role:"presentation",columnSpan:o,compactUserAssistance:Ae,inlineUserAssistance:fe,onBlur:Y.onFocusOut,onFocus:Y.onFocusIn,ref:xe,testId:x,mainContent:t.jsx(z.ReadonlyTextFieldInput,{"aria-describedby":pe["aria-describedby"],"aria-label":Te,"aria-labelledby":me.id,as:"div",elementRef:Q,textAlign:Z,value:void 0===C?"":P.formatTimeFromMasks(we,C,n,Ce,Ue),hasEmptyLabel:""===S&&"none"===O,hasInsideLabel:ge}),...Fe})});const Ee=t.jsx(Ho,{"aria-label":Te,"aria-labelledby":he,baseId:ie,fieldRef:K,granularity:n,hasInsideLabel:void 0!==be&&"inside"===O,hasLeadingZeroForHour:Ue,isRequired:p,masks:Ce,onCommit:E,onInput:k,textAlign:Z,value:C,...pe});return t.jsx(H.FormFieldContext.Provider,{value:ne,children:t.jsx(J.TextField,{columnSpan:o,compactUserAssistance:Ae,endContent:i,inlineUserAssistance:fe,mainContent:Ee,onBlur:Y.onFocusOut,onFocus:Y.onFocusIn,mainFieldRef:xe,testId:x,...de,...Fe})})})),jo=(e,t,s)=>{if(void 0===e)return;if(void 0!==s){const t=void 0!==e.find((e=>"dayPeriod"===e.type));if(!t&&s)throw new Error("The masks object does not have a dayPeriod property. isHour12 should be set to false to match masks.");if(t&&!s)throw new Error("The masks object does not have a dayPeriod property. isHour12 should be set to true to match masks.")}const a=void 0!==e.find((e=>"second"===e.type)),o=void 0!==e.find((e=>"millisecond"===e.type)),i="Change granularity to match the properties you have in the masks object.";if("second"===t&&!a){throw new Error(`granularity is second, but the masks does not contain the second property. \n      ${i}`)}if("second"===t&&o){throw new Error(`granularity is second, but the masks object contains the millisecond property. \n      ${i}`)}if(!("millisecond"!==t||a&&o)){throw new Error(`"Granularity is set to millisecond. The masks object should contain both the second and millisecond properties, but one or both are missing." \n      ${i}`)}if("minute"===t&&(a||o))throw new Error(`granularity is minute, but the masks object contains the second and/or millisecond property.\n        ${i}`)};e.InputTimeMask=Vo,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_InputTimeMask.js.map
