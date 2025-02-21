define(['exports', 'preact/jsx-runtime', 'preact/compat', 'preact/hooks', './useFocusableTextField-8b755b15', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useTextField-e6877c79', './Label-3912beb2', './PrefixSuffix-0efb3bc6', './usePrefixSuffix-f7544e05', './keyboardUtils-fbb389f8', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-b4278437', './TextField-1021f00b', './LayerHost-639b3284', 'css!./LiveRegionStyles.styles.css', './logger-0f873e29', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', './CompactUserAssistance-3370a318', './mergeProps-bcfa6a92', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'preact', 'css!./IconStyle.styles.css', './Popup-66e79afa', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './clientHints-4f5a07b0', './useCurrentValueReducer-faded381', './ChevronDown-64f938c5', './ChevronUp-421d2392', './Minus-08341d62', './Plus-9a4340c3', './IconButton-ae9a01ce', './useTranslationBundle-d07d4b20', './Grid-8911aa0f', './useSpinning-d5dd87af', './useSelectableTextField-900d2860'], (function(e,s,i,t,n,a,o,l,r,d,u,c,p,b,x,f,v,m,h,S,y,F,C,P,T,A,g,U,I,R,j,D,w,L,E,V,B,k,N,_,q,H,M,O,G,W,z,K,Z,J,Q,X,Y){"use strict";function $({direction:e,isDisabled:i,children:t,onPointerDown:n,onPointerUp:a,onPointerOut:o,onPointerCancel:l}){const r=J.useTranslationBundle("@oracle/oraclejet-preact"),d=r.inputNumber_increase(),u=r.inputNumber_decrease(),c="increase"===e?d:u;return s.jsx(F.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx("div",{"aria-hidden":"true",onPointerDown:n,onPointerUp:a,onPointerOut:o,onPointerCancel:l,children:s.jsx(Z.IconButton,{isDisabled:i,tooltip:c,variant:"ghost",size:"sm",children:t})})})}function ee({children:e}){return s.jsx(Q.Grid,{align:"center",gap:"1x",gridTemplateColumns:"1fr 1fr",children:e})}const se=i.forwardRef((({"aria-describedby":e,"aria-valuemax":i,"aria-valuemin":a,"aria-valuenow":p,"aria-valuetext":x,assistiveText:h,autoComplete:S="off",autoFocus:y=!1,columnSpan:F,helpSourceLink:C,helpSourceText:P,isDisabled:T,isReadonly:I,isRequired:R=!1,isRequiredShown:j,isStepDownDisabled:D,isStepUpDisabled:w,hasSteppers:L=!1,stepperVariant:E="directional",label:V,labelEdge:B,labelStartWidth:k,messages:N,placeholder:_,prefix:q,suffix:H,textAlign:M,userAssistanceDensity:Z,value:J,variant:Q="default",virtualKeyboard:se,onInput:te,onCommit:ne,onSpin:ae,onSpinComplete:oe,onStep:le,testId:re},de)=>{const{currentCommitValue:ue,dispatch:ce}=O.useCurrentValueReducer({value:J}),pe=t.useCallback((e=>{ce({type:"input",payload:e.value}),te?.(e)}),[te,ce]),be=t.useCallback((e=>{ce({type:"commit",payload:e.value}),ne?.(e)}),[ne,ce]),{isDisabled:xe,isReadonly:fe,labelEdge:ve,labelStartWidth:me,textAlign:he,userAssistanceDensity:Se}=o.useFormContext(),ye=T??xe,Fe=I??fe,Ce=B??ve,Pe=k??me,Te=M??he,Ae=Z??Se,ge=t.useRef(null),Ue=t.useRef(null),{focusProps:Ie,isFocused:Re,methods:je}=n.useFocusableTextField({isDisabled:ye,isReadonly:Fe,enabledElementRef:ge,readonlyElementRef:Ue}),{methods:De}=Y.useSelectableTextField(ge);t.useImperativeHandle(de,(()=>U.mergeProps(je,De)),[je,De]);const{baseId:we,formFieldContext:Le,inputProps:Ee,labelProps:Ve,textFieldProps:Be,userAssistanceProps:ke}=r.useTextField({ariaDescribedBy:e,helpSourceLink:C,helpSourceText:P,isDisabled:ye,isFocused:Re,isReadonly:Fe,isRequiredShown:j,labelEdge:Ce,messages:N,styleVariant:Q,userAssistanceDensity:Ae,value:J}),Ne=ye||D,_e=ye||w,qe=t.useCallback((e=>{Re||ge.current?.focus(),le?.(e)}),[le,Re,ge]),{keyboardHandlerProps:He,pointerIncreaseHandlerProps:Me,pointerDecreaseHandlerProps:Oe}=X.useSpinning({isStepDownDisabled:Ne,isStepUpDisabled:_e,onSpin:ae,onSpinComplete:oe,onStep:qe}),Ge=L?s.jsx($,{direction:"decrease",isDisabled:Ne,...Oe,children:"directional"===E?s.jsx(G.SvgChevronDown,{}):s.jsx(z.SvgMinus,{})}):void 0,We=L?s.jsx($,{direction:"increase",isDisabled:_e,...Me,children:"directional"===E?s.jsx(W.SvgChevronUp,{}):s.jsx(K.SvgPlus,{})}):void 0,ze=L&&"quantitative"===E?Ge:void 0,Ke=L?"directional"===E?s.jsxs(ee,{children:[Ge,We]}):We:void 0,Ze=void 0!==V&&"inside"===Ce,{shouldRenderPrefix:Je,shouldRenderSuffix:Qe,prefixProps:Xe,suffixProps:Ye,valuePrefixSuffix:$e,ariaLabelledBy:es}=c.usePrefixSuffix({baseId:we,hasEndContent:void 0!==Ke,hasInsideLabel:Ze,hasStartContent:void 0!==ze,hasValue:Le.hasValue,isDisabled:ye,isFocused:Re,labelId:Ve.id,prefix:q,suffix:H,value:J}),ss=Je?s.jsx(u.PrefixSuffix,{...Xe}):void 0,is=Qe?s.jsx(u.PrefixSuffix,{...Ye}):void 0,ts="none"!==Ce?s.jsx(d.Label,{...Ve,children:V}):void 0,ns={label:"none"!==Ce?ts:void 0,labelEdge:"none"!==Ce?Ce:void 0,labelStartWidth:"none"!==Ce?Pe:void 0},as="none"===Ce?V:void 0,os="efficient"===Ae||"reflow"===Ae?ye||Fe?"efficient"!==Ae?void 0:s.jsx(A.InlineUserAssistance,{userAssistanceDensity:Ae,...ke}):s.jsx(A.InlineUserAssistance,{assistiveText:h,fieldLabel:V,helpSourceLink:C,helpSourceText:P,messages:N,isRequiredShown:j,userAssistanceDensity:Ae,...ke}):void 0,ls=t.useRef(null),rs="compact"===Ae?s.jsx(g.CompactUserAssistance,{anchorRef:ls,messages:N,assistiveText:h,...ke}):void 0;if(Fe){const e=s.jsx(f.ReadonlyTextFieldInput,{"aria-describedby":Ee["aria-describedby"],"aria-label":as,"aria-labelledby":Ve.id,as:"div",autoFocus:y,elementRef:Ue,textAlign:Te,value:$e,hasEmptyLabel:""===V&&"none"===Ce,hasInsideLabel:Ze});return s.jsx(l.FormFieldContext.Provider,{value:Le,children:s.jsx(v.ReadonlyTextField,{role:"presentation",columnSpan:F,compactUserAssistance:rs,inlineUserAssistance:os,onBlur:Ie.onFocusOut,onFocus:Ie.onFocusIn,ref:ls,mainContent:e,testId:re,...ns})})}const ds=void 0===p||p.toString()!==x?x:void 0,us=s.jsxs(s.Fragment,{children:[ss,s.jsx(b.TextFieldInput,{"aria-labelledby":es,"aria-label":as,"aria-valuemax":L?i:void 0,"aria-valuemin":L?a:void 0,"aria-valuenow":L?p:void 0,"aria-valuetext":L?ds:void 0,autoComplete:S,autoFocus:y,currentCommitValue:ue,hasEmptyLabel:""===V&&"none"===Ce,hasEndContent:void 0!==Ke,hasInsideLabel:Ze,hasPrefix:void 0!==ss,hasStartContent:void 0!==ze,hasSuffix:void 0!==is,inputRef:ge,isRequired:R,placeholder:_,role:L?"spinbutton":void 0,textAlign:Te,type:ie()?se:void 0,value:ye?$e:J,onCommit:be,onInput:pe,...Ee,...L?He:{}}),is]});return s.jsx(l.FormFieldContext.Provider,{value:Le,children:s.jsx(m.TextField,{startContent:ze,endContent:Ke,columnSpan:F,compactUserAssistance:rs,inlineUserAssistance:os,mainContent:us,onBlur:Ie.onFocusOut,onFocus:Ie.onFocusIn,mainFieldRef:ls,hasZeroStartMargin:L&&"quantitative"===E,testId:re,...Be,...ns})})}));function ie(){const e=M.getClientHints().deviceType;return"phone"===e||"tablet"===e}e.NumberInputText=se,e.stepperVariants=["directional","quantitative"]}));
//# sourceMappingURL=NumberInputText-cac12eb3.js.map
