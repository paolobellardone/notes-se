define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './useFocusableTextField-c2f98a8b', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useTextField-e6877c79', './Label-3f8fc274', './PrefixSuffix-0efb3bc6', './usePrefixSuffix-da47e340', './clientHints-030d25aa', './TextFieldInput-dfd9529f', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-a5e85e5d', './StyledTextField-8ac3bbb4', './TextField-0fc70892', './LayerHost-0a244de8', 'css!./LiveRegionStyles.styles.css', './logger-0f873e29', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-f4d1fa1b', './CompactUserAssistance-b2cbdbad', './useTooltipControlled-18271c7a', 'preact', 'css!./IconStyle.styles.css', './Popup-b5495d55', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useCurrentValueReducer-faded381', './ChevronDown-575edbfc', './ChevronUp-dd92fc9c', './Minus-b821ce41', './Plus-6a258f29', './IconButton-1b328b69', './useTranslationBundle-20bfc0f3', './Grid-209ab070', './useSpinning-d5dd87af'], (function(e,s,i,t,a,n,o,l,r,d,u,c,p,b,x,f,v,h,m,S,y,F,C,P,A,T,g,I,j,D,U,R,w,L,E,V,B,N,k,q,_,H,M,O,G,W,z){"use strict";function K({direction:e,isDisabled:i,children:t,onPointerDown:a,onPointerUp:n,onPointerOut:o,onPointerCancel:l}){const r=G.useTranslationBundle("@oracle/oraclejet-preact"),d=r.inputNumber_increase(),u=r.inputNumber_decrease(),c="increase"===e?d:u;return s.jsx(F.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx("div",{"aria-hidden":"true",onPointerDown:a,onPointerUp:n,onPointerOut:o,onPointerCancel:l,children:s.jsx(O.IconButton,{isDisabled:i,tooltip:c,variant:"ghost",size:"sm",children:t})})})}function Z({children:e}){return s.jsx(W.Grid,{align:"center",gap:"1x",gridTemplateColumns:"1fr 1fr",children:e})}const J=i.forwardRef((({"aria-describedby":e,"aria-valuemax":i,"aria-valuemin":n,"aria-valuenow":p,"aria-valuetext":x,assistiveText:m,autoComplete:S="off",autoFocus:y=!1,columnSpan:F,helpSourceLink:C,helpSourceText:P,isDisabled:A,isReadonly:I,isRequired:j=!1,isRequiredShown:D,isStepDownDisabled:U,isStepUpDisabled:R,hasSteppers:w=!1,stepperVariant:L="directional",label:E,labelEdge:V,labelStartWidth:B,messages:N,placeholder:O,prefix:G,suffix:W,textAlign:J,userAssistanceDensity:X,value:Y,variant:$="default",virtualKeyboard:ee,onInput:se,onCommit:ie,onSpin:te,onSpinComplete:ae,onStep:ne,testId:oe},le)=>{const{currentCommitValue:re,dispatch:de}=k.useCurrentValueReducer({value:Y}),ue=t.useCallback((e=>{de({type:"input",payload:e.value}),se?.(e)}),[se,de]),ce=t.useCallback((e=>{de({type:"commit",payload:e.value}),ie?.(e)}),[ie,de]),{isDisabled:pe,isReadonly:be,labelEdge:xe,labelStartWidth:fe,textAlign:ve,userAssistanceDensity:he}=o.useFormContext(),me=A??pe,Se=I??be,ye=V??xe,Fe=B??fe,Ce=J??ve,Pe=X??he,{enabledElementRef:Ae,focusProps:Te,isFocused:ge,readonlyElementRef:Ie}=a.useFocusableTextField({isDisabled:me,isReadonly:Se,ref:le}),{baseId:je,formFieldContext:De,inputProps:Ue,labelProps:Re,textFieldProps:we,userAssistanceProps:Le}=r.useTextField({ariaDescribedBy:e,helpSourceLink:C,helpSourceText:P,isDisabled:me,isFocused:ge,isReadonly:Se,isRequiredShown:D,labelEdge:ye,messages:N,styleVariant:$,userAssistanceDensity:Pe,value:Y}),Ee=me||U,Ve=me||R,Be=t.useCallback((e=>{ge||Ae.current?.focus(),ne?.(e)}),[ne,ge,Ae]),{keyboardHandlerProps:Ne,pointerIncreaseHandlerProps:ke,pointerDecreaseHandlerProps:qe}=z.useSpinning({isStepDownDisabled:Ee,isStepUpDisabled:Ve,onSpin:te,onSpinComplete:ae,onStep:Be}),_e=w?s.jsx(K,{direction:"decrease",isDisabled:Ee,...qe,children:"directional"===L?s.jsx(q.SvgChevronDown,{}):s.jsx(H.SvgMinus,{})}):void 0,He=w?s.jsx(K,{direction:"increase",isDisabled:Ve,...ke,children:"directional"===L?s.jsx(_.SvgChevronUp,{}):s.jsx(M.SvgPlus,{})}):void 0,Me=w&&"quantitative"===L?_e:void 0,Oe=w?"directional"===L?s.jsxs(Z,{children:[_e,He]}):He:void 0,Ge=void 0!==E&&"inside"===ye,{shouldRenderPrefix:We,shouldRenderSuffix:ze,prefixProps:Ke,suffixProps:Ze,valuePrefixSuffix:Je,ariaLabelledBy:Qe}=c.usePrefixSuffix({baseId:je,hasEndContent:void 0!==Oe,hasInsideLabel:Ge,hasStartContent:void 0!==Me,hasValue:De.hasValue,isDisabled:me,isFocused:ge,labelId:Re.id,prefix:G,suffix:W,value:Y}),Xe=We?s.jsx(u.PrefixSuffix,{...Ke}):void 0,Ye=ze?s.jsx(u.PrefixSuffix,{...Ze}):void 0,$e="none"!==ye?s.jsx(d.Label,{...Re,children:E}):void 0,es={label:"none"!==ye?$e:void 0,labelEdge:"none"!==ye?ye:void 0,labelStartWidth:"none"!==ye?Fe:void 0},ss="none"===ye?E:void 0,is="efficient"===Pe||"reflow"===Pe?me||Se?"efficient"!==Pe?void 0:s.jsx(T.InlineUserAssistance,{userAssistanceDensity:Pe,...Le}):s.jsx(T.InlineUserAssistance,{assistiveText:m,fieldLabel:E,helpSourceLink:C,helpSourceText:P,messages:N,isRequiredShown:D,userAssistanceDensity:Pe,...Le}):void 0,ts=t.useRef(null),as="compact"===Pe?s.jsx(g.CompactUserAssistance,{anchorRef:ts,messages:N,assistiveText:m,...Le}):void 0;if(Se){const e=s.jsx(f.ReadonlyTextFieldInput,{"aria-describedby":Ue["aria-describedby"],"aria-label":ss,"aria-labelledby":Re.id,as:"div",autoFocus:y,elementRef:Ie,textAlign:Ce,value:Je,hasEmptyLabel:""===E&&"none"===ye,hasInsideLabel:Ge});return s.jsx(l.FormFieldContext.Provider,{value:De,children:s.jsx(v.ReadonlyTextField,{role:"presentation",columnSpan:F,compactUserAssistance:as,inlineUserAssistance:is,onBlur:Te.onFocusOut,onFocus:Te.onFocusIn,ref:ts,mainContent:e,testId:oe,...es})})}const ns=void 0===p||p.toString()!==x?x:void 0,os=s.jsxs(s.Fragment,{children:[Xe,s.jsx(b.TextFieldInput,{"aria-labelledby":Qe,"aria-label":ss,"aria-valuemax":w?i:void 0,"aria-valuemin":w?n:void 0,"aria-valuenow":w?p:void 0,"aria-valuetext":w?ns:void 0,autoComplete:S,autoFocus:y,currentCommitValue:re,hasEmptyLabel:""===E&&"none"===ye,hasEndContent:void 0!==Oe,hasInsideLabel:Ge,hasPrefix:void 0!==Xe,hasStartContent:void 0!==Me,hasSuffix:void 0!==Ye,inputRef:Ae,isRequired:j,placeholder:O,role:w?"spinbutton":void 0,textAlign:Ce,type:Q()?ee:void 0,value:me?Je:Y,onCommit:ce,onInput:ue,...Ue,...w?Ne:{}}),Ye]});return s.jsx(l.FormFieldContext.Provider,{value:De,children:s.jsx(h.TextField,{startContent:Me,endContent:Oe,columnSpan:F,compactUserAssistance:as,inlineUserAssistance:is,mainContent:os,onBlur:Te.onFocusOut,onFocus:Te.onFocusIn,mainFieldRef:ts,hasZeroStartMargin:w&&"quantitative"===L,testId:oe,...we,...es})})}));function Q(){const e=p.getClientHints().deviceType;return"phone"===e||"tablet"===e}e.NumberInputText=J,e.stepperVariants=["directional","quantitative"]}));
//# sourceMappingURL=NumberInputText-0d8284f8.js.map
