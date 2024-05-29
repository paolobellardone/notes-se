define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './logger-36c6eea0', './TabbableModeContext-c9143afd', './useTranslationBundle-20ce0acf', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-96d6436b', './CompactUserAssistance-b25c5537', './Floating-aaafdcf7', './TopLayerHost-d9bd8ecf', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'preact', 'css!./IconStyle.styles.css', './Popup-c6026a77', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-6c5f432c', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './classNames-49c3ba27', './clientHints-5a067fae', './keyboardUtils-539a0e51', './getFormatParse-643d4fd7', './maskUtils-9d35259c', './UNSAFE_InputDateMask/themes/SegmentStyles.css', './useUser-6c8723b4', './Flex-0052275f', './HiddenAccessible-00402562', './LiveRegion-dba61c3a', './stringUtils-c9076bae', './useComponentTheme-9a36e65b', './calendarDateUtils-4d1aed4f', './useDoubleTap-9993acfd', './useTabbableMode-c39b463d', './FormFieldContext-57ac57ba', './useFormFieldContext-cbd8677f', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './Label-16321133', './TextFieldInput-90149232', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-4085579c', './StyledTextField-9933e630', './TextField-ed261bdd', 'css!./LiveRegionStyles.styles.css', './useFocusableTextField-0a8d5c6d', './FormContext-598efe92', './useFormContext-9b29eeaf', './useTextField-5da71f2f', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles.css', './IconButton-edf452c8', './BaseButton-4a512058', './usePress-465090ef', './useHover-29c192f3', './useToggle-a59ec51a', './useActive-152990ee', './useColorScheme-33c4f510', './dimensions-094b9f7d', './size-6d3a087d', './utils-225c0e9a', './Common/themes/themeContract.css', './colorUtils-f1647b17', './_curry1-73b01864', './mergeInterpolations-497657fd', './_curry3-1e42149e', './_curry2-b8890f0a', './_isObject-8093a293', './mergeProps-bae345c4', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './useTestId-dfceb92d', './ButtonLayout-071d379d', './Text-77df83fd', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './useTooltip-f1e6a531', './useTooltipControlled-4401c2d2', './useId-e0c3517c', './Layer-ea9920e0', './useThemeInterpolations-eb2b5ee2', './useScale-f847e1c0', './theme-f0ff48ad', './Theme-748163ef', './useFocus-dab1b280', './useTouch-68d1a08f', './useAnimation-24256140', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './EnvironmentProvider-fbf8d770', './LayerManager-b2837363', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './getLocale-6daccf20', './Message.types-180b4242', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './ComponentMessageContainer-7a5e377a', './MessagesManager-43d0389d', './useMessagesContext-dde6f9c9', './Transition-4c8a0bab', './ComponentMessage-08a172f3', './MessageStartIcon-94a5f4d2', './SuccessS-584d6276', './Icon-6b14fc3e', './UNSAFE_Icon/themes/IconStyle.css', './ErrorS-905bce15', './InformationS-5581ccca', './WarningS-cf815827', './PRIVATE_Message/themes/MessageStyles.css', './MessageSummary-161b06f8', './MessageUtils-652ca803', './soundUtils-01a0eb35', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './InlineHelp-50fa2c98', './InlineHelpSource-f9e63eec', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', './useInputGroupContext-4f428bd7', './Separator-f7e57213', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./SeparatorStyles.styles.css', './CompactHelpSource-824e6791', './Help-1dd33d8b', './useFocusWithin-dbdce73a', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', './useFloating-e7375283', './positionUtils-5e82645b', './refUtils-64b1b5b1', './useOutsideClick-d7ba24e7', './arrayUtils-bef2e8fb', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-5df7b135', './UNSAFE_Floating/themes/FloatingContract.css', './Common/themes/redwood/theme', './tabbableUtils-a1aa6b01', './head-990e418e', './_arity-9286283c', './_isArray-f8c70222', './_isString-668b4c85', './FocusTrap-fdb3a0ed', './FocusTracker-8296f9cd', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-93466d5f', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './useAnimationStatus-37ce08c6', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'css!./PopupStyles.styles.css', './types-366736bc', 'css!./SegmentStyles.styles.css', './boxalignment-a67cc263', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c890dd1b', './flexbox-4b93b535', 'css!./flexbox.styles.css', './flexitem-8052fa2b', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', 'css!./TextFieldInputVariants.styles.css', './CompactLabelAssistance-c936e7a6', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css', './useAccessibleContext-723ca770', './useTextFieldInputHandlers-05409fd5', './textAlign-a02ed68b', 'css!./text.styles.css', './TextFieldUtils-da033871', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldInputStyles.css', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './LabelValueLayout-deee3466', 'css!./LabelValueLayoutStyles.styles.css', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_RadioItem/themes/RadioStyles.css', 'css!./RadioStyles.styles.css', './UNSAFE_RadioItem/themes/redwood/RadioBaseTheme.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/FormLayoutStyles.css', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', 'css!./CheckboxStyles.styles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', 'css!./CheckboxVariants.styles.css', './LayoutStyles.css-defee9f4', 'css!./LayoutStyles.styles.css', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './useMessageSeverity-57195beb', './useFormFieldContextProps-29db0330'], (function(e,t,s,a,o,n,r,l,i,d,c,u,m,y,p,h,S,g,b,F,f,x,T,A,v,C,U,_,E,w,D,k,N,I,R,B,M,L,P,H,V,j,O,q,Y,W,z,G,K,$,X,Z,J,Q,ee,te,se,ae,oe,ne,re,le,ie,de,ce,ue,me,ye,pe,he,Se,ge,be,Fe,fe,xe,Te,Ae,ve,Ce,Ue,_e,Ee,we,De,ke,Ne,Ie,Re,Be,Me,Le,Pe,He,Ve,je,Oe,qe,Ye,We,ze,Ge,Ke,$e,Xe,Ze,Je,Qe,et,tt,st,at,ot,nt,rt,lt,it,dt,ct,ut,mt,yt,pt,ht,St,gt,bt,Ft,ft,xt,Tt,At,vt,Ct,Ut,_t,Et,wt,Dt,kt,Nt,It,Rt,Bt,Mt,Lt,Pt,Ht,Vt,jt,Ot,qt,Yt,Wt,zt,Gt,Kt,$t,Xt,Zt,Jt,Qt,es,ts,ss,as,os,ns,rs,ls,is,ds,cs,us,ms,ys,ps,hs,Ss,gs,bs,Fs,fs,xs,Ts,As,vs,Cs,Us,_s,Es,ws,Ds,ks,Ns,Is,Rs,Bs,Ms,Ls,Ps,Hs,Vs,js,Os,qs,Ys,Ws,zs,Gs,Ks,$s,Xs,Zs,Js,Qs,ea,ta,sa,aa,oa,na,ra,la,ia,da,ca,ua,ma,ya,pa,ha,Sa,ga,ba,Fa,fa,xa,Ta,Aa,va,Ca,Ua,_a,Ea,wa,Da,ka,Na,Ia){"use strict";const Ra=e=>{e.preventDefault()},Ba=()=>"ios"===E.getClientHints().platform,Ma=({"aria-label":e,"aria-valuemax":s,"aria-valuemin":o,"aria-valuenow":n,"aria-valuetext":l,inputRef:i,isComplete:d,isDisabled:c,isHidden:u,isHighlighted:m,isInvalid:y,isRequired:p,isSelected:h,onChange:S,placeholder:g,text:b,type:F})=>{const f=b&&b.length>0,x=_.classNames([N.segmentStyles.base,h&&N.segmentStyles.selected,m&&N.segmentStyles.highlighted]),T=_.classNames([N.segmentStyles.placeholder,u||f?N.segmentStyles.hidden:N.segmentStyles.notHidden]),A=r.useTranslationBundle("@oracle/oraclejet-preact").inputDateMask_empty_segment(),v=a.useRef(null),C=i??v,U=a.useRef(!1),{locale:E}=I.useUser(),D=a.useCallback((e=>{if(!c&&"Tab"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key&&"Enter"!==e.key&&!w.isSelectAll(e)){if(m){if(w.isBackspaceOrDelete(e)||"Backspace"===e.key)return}else"0"!==e.key||!d&&void 0!==b?k.isNumberOnlyString(e.key)?(S?.({actionType:"updateSegment",data:{type:F,text:e.key,hasLeadingZero:U.current,locale:E}}),U.current=!1):w.isBackspaceOrDelete(e)||"Backspace"===e.key?(S?.({actionType:"clearSegment",data:{type:F}}),U.current=!1):"ArrowUp"===e.key?(S?.({actionType:"step",data:{direction:"increase",locale:E,type:F}}),U.current=!1):"ArrowDown"===e.key?(S?.({actionType:"step",data:{direction:"decrease",locale:E,type:F}}),U.current=!1):"PageUp"===e.key?(S?.({actionType:"page",data:{direction:"increase",locale:E,type:F}}),U.current=!1):"PageDown"===e.key?(S?.({actionType:"page",data:{direction:"decrease",locale:E,type:F}}),U.current=!1):"Home"===e.key?(S?.({actionType:"goToHome",data:{locale:E,type:F}}),U.current=!1):"End"===e.key&&(S?.({actionType:"goToEnd",data:{locale:E,type:F}}),U.current=!1):U.current=!0;e.preventDefault(),e.stopPropagation()}}),[d,c,m,E,S,b,F]);a.useEffect((()=>{h&&C.current?.focus()}),[h,C]);const R={"data-segment":[F]},B=void 0===l?A:n?.toString()===l?void 0:l;return t.jsx("div",{children:t.jsxs("div",{ref:C,role:Ba()?"textbox":"spinbutton","aria-disabled":c,"aria-invalid":y||void 0,"aria-label":e,"aria-required":p,"aria-valuemin":Ba()?void 0:o,"aria-valuemax":Ba()?void 0:s,"aria-valuenow":Ba()?void 0:n,"aria-valuetext":Ba()?void 0:B,autocapitalize:"off",autocorrect:"off",class:x,contentEditable:!c,...R,enterkeyhint:c?void 0:"done",inputMode:c?"none":"numeric",onCut:Ra,onKeyDown:D,onPaste:Ra,spellcheck:!1,tabIndex:h?0:-1,children:[t.jsx("span",{"aria-hidden":"true",class:T,...R,children:g}),b]})})},La=({isHidden:e,isHighlighted:s,isPlaceholder:a,text:o})=>{const n=_.classNames([N.segmentStyles.literalBase,a&&N.segmentStyles.placeholder,s&&N.segmentStyles.highlighted,e?N.segmentStyles.hidden:N.segmentStyles.notHidden]);return t.jsx("span",{"aria-hidden":"true",class:n,children:o})},Pa=(e,t)=>{if("reset"===t.actionType)return t.data;const s=t.data?.type,a=ja(e.segments,s);switch(t.actionType){case"clearDate":{const t=so(Qa(e.segments),e.orderedSegments);return co(e,t,!1)}case"clearSegment":{const t=Ja(a);return Za(e,s,t)}case"commit":{const t=lo(e.segments);return co(e,t,!1)}case"goToEnd":{const o=yo(s,a,e.segments,t.data?.locale);return Za(e,s,o,!1)}case"goToHome":{const o=mo(s,a,e.segments,t.data?.locale);return Za(e,s,o,!1)}case"page":{const o=t.data?.direction,n=t.data?.locale,r=po(s,a,e.segments,"page",o,n);return Za(e,s,r,!1)}case"selectDateOrSegment":return io(e);case"selectFirst":{const t=so(e.segments,e.orderedSegments);return co(e,t,!1)}case"selectNext":{const t=no(e.segments,e.orderedSegments);return co(e,t,!1)}case"selectPrevious":{const t=ro(e.segments,e.orderedSegments);return co(e,t,!1)}case"selectSegment":{const t=to(e.segments,s);return co(e,t,!1)}case"step":{const o=t.data?.direction,n=t.data?.locale,r=po(s,a,e.segments,"step",o,n);return Za(e,s,r,!1)}case"updateSegment":{const o=eo(s,a,t,e.segments);return Za(e,s,o)}default:throw new Error("Unknown action type")}},Ha=e=>+e,Va=e=>e.toString(),ja=(e,t)=>e.find((e=>e.type===t)),Oa=e=>e.every((e=>e.text&&e.text.length>0)),qa=e=>e.some((e=>void 0!==e["aria-valuenow"])),Ya=e=>{if(!qa(e))return;const t=e.map((e=>({[e.type]:e["aria-valuenow"]}))).values();let s={};for(const e of t)s={...s,...e};return s},Wa=e=>ja(e,"year")["aria-valuenow"],za=(e,t,s)=>`${t} - ${k.getMonthName(e,t,s??"*","long")}`,Ga=e=>[...e.orderedSegments],Ka=(e,t,s)=>e.map((e=>e.type===t?s:e)),$a=(e,t,s,a,o)=>{const n=Ka(e,s,a);let r=n;if("month"===s||"year"===s){const e=ja(n,"day");if(e){const t="month"==s?a["aria-valuenow"]:ja(n,"month")["aria-valuenow"],o="year"===s?a["aria-valuenow"]:Wa(n),l=H.getDaysInMonth(t??"*",o??"*"),i=e["aria-valuenow"],d=i&&i>l?l:i,c=d?Va(d):void 0,u={...e,"aria-valuemax":l,"aria-valuenow":d,"aria-valuetext":c,text:c};r=Ka(n,"day",u)}}return r=a.isComplete&&o?no(r,t):r,r},Xa=(e,t)=>({currentDate:Ya(t),isCompleteDate:Oa(t),isDateSelected:e.isDateSelected,isPartialDate:qa(t),orderedSegments:Ga(e),segments:t}),Za=(e,t,s,a=!0)=>{const o=$a(e.segments,e.orderedSegments,t,s,a);return Xa(e,o)},Ja=e=>({...e,"aria-valuetext":void 0,"aria-valuenow":void 0,text:void 0,isComplete:!1}),Qa=e=>e.map((e=>{const t=Ja(e),s="year"===t.type?H.MAX_ISO_YEAR:"month"===t.type?H.getMonthsInYear("*"):H.getDaysInMonth("*","*");return{...t,"aria-valuemax":s}})),eo=(e,t,s,a)=>{const o=s.data?.text,n=s.data?.hasLeadingZero,r=s.data?.locale,l=t["aria-valuemin"],i=t["aria-valuemax"],d=t.isComplete?o:t.text+o,c=Ha(d),u=(y=i,(m=c)>=l&&m<=y);var m,y;const p=u?d:o,h=u?c:Ha(o),S=((e,t)=>Ha(Va(e)+"0")>t)(h,i)||!!n&&"year"!==e,g="month"===e?za(r,h,Wa(a)):p;return{...t,"aria-valuetext":g,"aria-valuenow":h,text:p,isComplete:S}},to=(e,t)=>e.map((e=>({...e,isSelected:e.type===t}))),so=(e,t)=>to(e,t[0]),ao=(e,t)=>{const s=e.find((e=>!0===e.isSelected));return void 0===s?-1:t.findIndex((e=>e===s.type))},oo=e=>e.map((e=>e.isSelected?{...e,isComplete:!0}:e)),no=(e,t)=>{const s=ao(e,t);return s===t.length-1?e:to(oo(e),t[s+1])},ro=(e,t)=>{const s=ao(e,t);return 0===s?e:-1===s?so(e,t):to(oo(e),t[s-1])},lo=e=>e.map((e=>({...e,isSelected:!1,isComplete:!!e.text}))),io=e=>{if(e.isCompleteDate)return co(e,e.segments.map((e=>({...e,isSelected:!1}))),!0);{const t=so(e.segments,e.orderedSegments);return Xa(e,t)}},co=(e,t,s)=>({currentDate:Ya(t),isCompleteDate:Oa(t),isDateSelected:s,isPartialDate:qa(t),orderedSegments:Ga(e),segments:t}),uo=(e,t,s,a,o)=>{const n=Va(e);return{...a,"aria-valuetext":"month"===s?za(t,e,Wa(o)):n,"aria-valuenow":e,text:n,isComplete:!0}},mo=(e,t,s,a)=>{const o=((e,t)=>"year"===e?1900:t["aria-valuemin"])(e,t);return uo(o,a,e,t,s)},yo=(e,t,s,a)=>{const o=((e,t)=>"year"===e?2100:t["aria-valuemax"])(e,t);return uo(o,a,e,t,s)},po=(e,t,s,a,o,n)=>{const r=t["aria-valuenow"],l=t["aria-valuemin"],i=t["aria-valuemax"],d=void 0===r?(e=>{const{year:t,month:s,day:a}=k.getTodayAsCalendarDate();return{year:t,month:s,day:a}[e]})(e):"page"===a?((e,t,s,a,o)=>{const n="month"===o?2:"year"===o?5:7;return"increase"===t?e+n>a?(e+n)%a:e+n:e-n<s?e-n+a:e-n})(r,o,l,i,e):((e,t,s,a)=>"increase"===t?e+1>a?s:e+1:e-1<s?a:e-1)(r,o,l,i);return uo(d,n,e,t,s)};const ho=({dateResetRef:e,direction:t,dispatch:s,groupRef:o,isDisabled:n,isFocused:r,isInputFocused:l,onCommit:i,onInput:d,state:c})=>{const{tabbableModeProps:u}=j.useTabbableMode(),{tabIndex:m}=u,y=c.segments.some((e=>!!e.isSelected)),p=-1===m||y||n?-1:0,h=a.useRef(c.currentDate),S=a.useRef(c.currentDate),g=a.useRef(!1),b=a.useRef(!!r),F=a.useCallback((e=>{s(e)}),[s]),f=a.useCallback((e=>{const t=e.target.getAttribute("data-segment");s(t?{actionType:"selectSegment",data:{type:t}}:{actionType:"selectFirst"})}),[s]),x=a.useCallback(((e=!0)=>{c.isCompleteDate&&(s({actionType:"selectDateOrSegment"}),e&&o?.current?.focus())}),[s,o,c.isCompleteDate]),T=a.useCallback((()=>{x()}),[x]),A=a.useCallback((e=>{e.target.getAttribute("data-segment")&&x(!1)}),[x]),v=V.useDoubleTap({onDoubleTap:A,onSingleTap:f}),C=a.useCallback((e=>{"ltr"===t&&"ArrowLeft"===e.key||"rtl"===t&&"ArrowRight"===e.key?(s({actionType:"selectPrevious"}),e.stopPropagation()):"ltr"===t&&"ArrowRight"===e.key||"rtl"===t&&"ArrowLeft"===e.key?(s({actionType:"selectNext"}),e.stopPropagation()):(w.isBackspaceOrDelete(e)||"Backspace"===e.key)&&c.isDateSelected?(s({actionType:"clearDate"}),g.current=!0,e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()):w.isSelectAll(e)?(x(),e.preventDefault(),e.stopPropagation()):"Enter"===e.key&&(k.calendarDatesAreDifferent(S.current,h.current)&&(i?.({value:h.current}),S.current=h.current),e.preventDefault(),e.stopPropagation())}),[t,s,i,x,c.isDateSelected]);a.useEffect((()=>{b.current&&!r&&(s({actionType:"commit"}),k.calendarDatesAreDifferent(S.current,h.current)&&(i?.({value:h.current}),S.current=h.current)),b.current=!!r}),[s,r,i]),a.useEffect((()=>{if(k.calendarDatesAreDifferent(h.current,c.currentDate)&&!e.current){const e=void 0!==c.currentDate?Object.freeze({...c.currentDate}):c.currentDate;d({value:e}),h.current=e}e.current=!1}),[d,c.currentDate,e]);const U=a.useRef(!1),_=a.useRef();a.useEffect((()=>{l&&!U.current&&s({actionType:"selectFirst"}),!l&&!U.current&&s({actionType:"commit"}),U.current=!1}),[s,l]);const D=function(){const e=E.getClientHints().deviceType;return"phone"===e||"tablet"===e}()?{...v,onKeyDown:C}:{onClick:f,onDoubleClick:T,onKeyDown:C,onPointerDown:()=>{U.current=!0,clearTimeout(_.current),_.current=setTimeout((()=>{U.current=!1}),200)}};return{dateClearedRef:g,dateFieldHandlers:n?{}:D,segmentHandlers:n?{}:{onChange:F},tabIndex:p}},So=(e,t)=>e.find((e=>e.type===t)),go=({"aria-describedby":e,"aria-invalid":s,"aria-label":o,"aria-labelledby":n,baseId:l,fieldRef:i,granularity:d="day",hasInsideLabel:c,isRequired:u,masks:m,onBlur:y,onCommit:p,onFocus:h,onInput:S,textAlign:g,value:b,variant:F="default"})=>{const f=r.useTranslationBundle("@oracle/oraclejet-preact"),x=f.inputDateMask_date_cleared(),T={month:f.formControl_month(),day:f.formControl_day(),year:f.formControl_year()},{direction:A,locale:v}=I.useUser(),{isDisabled:C,isFocused:U,isInputFocused:E}=q.useFormFieldContext(),w=void 0!==b,{classes:D}=P.useComponentTheme(Y.TextFieldInputRedwoodTheme,{type:"notPassword",styleVariant:F,textarea:"notTextArea",input:"notInput",div:"isDiv",prefix:"noPrefix",suffix:"noSuffix",startContent:"noStartContent",endContent:"noEndContent",insideLabel:c?"hasInsideLabel":"noInsideLabel",value:w?"hasValue":"noValue",focused:U?"isFocused":"notFocused",disabled:C?"isDisabled":"notDisabled"}),N=_.classNames([D]),{state:V,dispatch:j,dateResetRef:O}=(({ariaLabels:e,dateMasks:t,granularity:s,locale:o,value:n})=>{const r=t.filter((({type:e})=>"literal"!==e)).map((({type:e})=>e)),l=n?.year,i=n?.month,d=n?.day,c=H.getMonthsInYear(l??"*"),u=H.getDaysInMonth(i??"*",l??"*"),m=!(!l||!i||"month"!==s&&!d),y=!!l||!!i||!!d,p=l?Va(l):void 0,h=i?Va(i):void 0,S=d?Va(d):void 0,g=i?za(o,i,l):void 0,b=[{type:"day","aria-label":e.day,"aria-valuemin":H.MIN_ISO_DAY,"aria-valuemax":u,"aria-valuenow":d,"aria-valuetext":S,isComplete:!!d,isSelected:!1,text:S}],F={currentDate:n,isCompleteDate:m,isDateSelected:!1,isPartialDate:y,orderedSegments:r,segments:[{type:"year","aria-label":e.year,"aria-valuemin":H.MIN_ISO_YEAR,"aria-valuemax":H.MAX_ISO_YEAR,"aria-valuenow":l,"aria-valuetext":p,isComplete:!!l,isSelected:!1,text:p},{type:"month","aria-label":e.month,"aria-valuemin":H.MIN_ISO_MONTH,"aria-valuemax":c,"aria-valuenow":i,"aria-valuetext":g,isComplete:!!i,isSelected:!1,text:h},..."day"===s?b:[]]},[f,x]=a.useReducer(Pa,F),T=a.useRef(n),A=a.useRef(!1);return k.calendarDatesAreDifferent(T.current,n)&&(T.current=n,k.calendarDatesAreDifferent(n,f.currentDate)&&(x({actionType:"reset",data:F}),A.current=!0)),{dateResetRef:A,dispatch:x,state:f}})({ariaLabels:T,dateMasks:m,granularity:d,locale:v,value:b}),{isDateSelected:W,isPartialDate:z,segments:G}=V,K={year:So(G,"year"),month:So(G,"month"),day:"day"===d?So(G,"day"):void 0},$=a.useRef(null),{dateClearedRef:X,dateFieldHandlers:Z,segmentHandlers:J,tabIndex:Q}=ho({dateResetRef:O,direction:A,dispatch:j,groupRef:$,isDisabled:C,isFocused:U,isInputFocused:E,onCommit:p,onInput:S,state:V}),ee=void 0===b&&c&&!U,te=V.isCompleteDate?H.formatFullCalendarDate(v,V.currentDate,d):"",se=`${l}-date`,ae=V.isCompleteDate?t.jsx(B.HiddenAccessible,{id:se,children:te}):void 0,oe=V.isCompleteDate?L.merge([e,se]):e,ne=X.current?x:"",re=V.orderedSegments[0];return t.jsxs("div",{"aria-describedby":oe,"aria-label":o,"aria-labelledby":n,class:N,onfocusin:h,onfocusout:y,ref:$,role:"group",tabIndex:Q,...Z,children:[t.jsx(R.Flex,{direction:"row",wrap:"nowrap",justify:g,children:m.map((({type:e,value:a})=>{const o="literal"!==e?K[e]:{};return"literal"===e?t.jsx(La,{isHidden:ee,isHighlighted:W,isPlaceholder:!z,text:a}):t.jsx(Ma,{inputRef:e===re?i:void 0,isDisabled:C,isInvalid:!!s,isHidden:ee,isHighlighted:W,isRequired:u,placeholder:a,type:e,...J,...o})}))}),ae,t.jsx(M.LiveRegion,{children:ne})]})},bo=s.forwardRef((({"aria-describedby":e,assistiveText:s,columnSpan:o,granularity:n="day",helpSourceLink:l,helpSourceText:i,isDisabled:d,isReadonly:m,isRequired:y,isRequiredShown:p,label:h,labelEdge:S,labelStartWidth:g,messages:b,masks:F,testId:f,textAlign:x,userAssistanceDensity:T,value:A,variant:v,onCommit:C,onInput:U},_)=>{const{isDisabled:E,isReadonly:w,labelEdge:D,labelStartWidth:N,textAlign:R,userAssistanceDensity:B}=ee.useFormContext(),M=d??E,L=m??w,P=S??D,V=g??N,j=x??R,q=T??B,{enabledElementRef:Y,readonlyElementRef:z,focusProps:G,isFocused:Z}=J.useFocusableTextField({isDisabled:M,isReadonly:L,ref:_}),{baseId:Q,formFieldContext:se,inputProps:ae,labelProps:oe,textFieldProps:ne,userAssistanceProps:re}=te.useTextField({ariaDescribedBy:e,helpSourceLink:l,helpSourceText:i,isDisabled:M,isFocused:Z,isReadonly:L,isRequiredShown:p,labelEdge:P,messages:b,styleVariant:v,userAssistanceDensity:q,value:A}),{forId:le,...ie}=oe,{id:de,...ce}=ae,ue=ie.id,me=a.useCallback((()=>{Y.current?.focus()}),[Y]),ye="none"!==P?t.jsx(W.Label,{...M||L?{}:{onClick:me},...ie,children:h}):void 0,pe={label:"none"!==P?ye:void 0,labelEdge:"none"!==P?P:void 0,labelStartWidth:"none"!==P?V:void 0},he="none"===P?h:void 0,Se=void 0!==h&&"inside"===P,ge="efficient"===q||"reflow"===q?M||L?"efficient"!==q?void 0:t.jsx(c.InlineUserAssistance,{userAssistanceDensity:q,...re}):t.jsx(c.InlineUserAssistance,{assistiveText:s,fieldLabel:h,helpSourceLink:l,helpSourceText:i,messages:b,isRequiredShown:p,userAssistanceDensity:q,...re}):void 0,be=a.useRef(null),Fe="compact"===q?t.jsx(u.CompactUserAssistance,{anchorRef:be,messages:b,assistiveText:s,...re}):void 0,{locale:fe}=I.useUser(),xe=r.useTranslationBundle("@oracle/oraclejet-preact"),Te=xe.inputDateMask_monthPlaceholder(),Ae=xe.inputDateMask_dayPlaceholder(),ve=xe.inputDateMask_yearPlaceholder();if(F&&("day"===n&&5!==F.length||"month"===n&&3!==F.length))throw new Error("Specified masks must match the granularity");const Ce=a.useMemo((()=>F?k.translateCustomMasks(F,Te,Ae,ve):H.getDatePlaceholderMasks(fe,n,Te,Ae,ve)),[F,fe,n,Ae,Te,ve]);if(L)return t.jsx(O.FormFieldContext.Provider,{value:se,children:t.jsx($.ReadonlyTextField,{role:"presentation",columnSpan:o,compactUserAssistance:Fe,inlineUserAssistance:ge,onBlur:G.onfocusout,onFocus:G.onfocusin,ref:be,testId:f,mainContent:t.jsx(K.ReadonlyTextFieldInput,{"aria-describedby":ce["aria-describedby"],"aria-label":he,"aria-labelledby":ie.id,as:"div",elementRef:z,textAlign:j,value:void 0===A?"":H.formatShortCalendarDate(A,n,Ce),hasEmptyLabel:""===h&&"none"===P,hasInsideLabel:Se}),...pe})});const Ue=t.jsx(go,{"aria-label":he,"aria-labelledby":ue,baseId:Q,fieldRef:Y,granularity:n,hasInsideLabel:void 0!==ye&&"inside"===P,isRequired:y,masks:Ce,onCommit:C,onInput:U,textAlign:j,value:A,...ce});return t.jsx(O.FormFieldContext.Provider,{value:se,children:t.jsx(X.TextField,{columnSpan:o,compactUserAssistance:Fe,inlineUserAssistance:ge,mainContent:Ue,onBlur:G.onfocusout,onFocus:G.onfocusin,mainFieldRef:be,testId:f,...ne,...pe})})}));e.InputDateMask=bo,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_InputDateMask.js.map