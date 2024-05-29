define(['exports', 'preact/jsx-runtime', 'preact', 'preact/compat', 'preact/hooks', './useClearIcon-bf179235', './useFocusableTextField-0a8d5c6d', './FormContext-598efe92', './useFormContext-9b29eeaf', './FormFieldContext-57ac57ba', './useHover-29c192f3', './useLengthFilter-68237bc5', './useTextField-5da71f2f', './Label-16321133', './PrefixSuffix-53e3b439', './usePrefixSuffix-416e41f2', './clientHints-5a067fae', './TextFieldInput-90149232', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-4085579c', './StyledTextField-9933e630', './TextField-ed261bdd', './MaxLengthLiveRegion-d4047f1f', './logger-36c6eea0', './TabbableModeContext-c9143afd', './TopLayerHost-d9bd8ecf', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-96d6436b', './CompactUserAssistance-b25c5537', './Floating-aaafdcf7', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './Popup-c6026a77', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-6c5f432c', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './componentUtils-5096b0c5', './ClearIcon-7b5e44d1', './useCurrentValueReducer-6907b03d'], (function(e,s,t,a,i,n,o,l,d,r,u,c,x,f,p,b,h,m,v,y,F,C,S,A,L,g,T,I,R,U,P,E,j,V,w,D,k,N,B,H,_,q,M,W,G,K,O){"use strict";const z=a.forwardRef((({"aria-describedby":e,assistiveText:a,autoComplete:l="off",autoFocus:h=!1,columnSpan:v,hasClearIcon:A="never",endContent:L,helpSourceLink:g,helpSourceText:T,isDisabled:I,isReadonly:R,isRequired:E=!1,isRequiredShown:j,label:V,labelEdge:w,labelStartWidth:D,maxLength:k,maxLengthUnit:N,messages:B,placeholder:H,prefix:_,role:q,startContent:M,suffix:W,textAlign:z,userAssistanceDensity:Q,value:X,variant:Y="default",virtualKeyboard:Z,onInput:$,onCommit:ee,testId:se},te)=>{const{currentCommitValue:ae,dispatch:ie}=O.useCurrentValueReducer({value:X}),ne=i.useCallback((e=>{ie({type:"input",payload:e.value}),$?.(e)}),[$,ie]),oe=i.useCallback((e=>{ie({type:"commit",payload:e.value}),ee?.(e)}),[ee,ie]),{isDisabled:le,isReadonly:de,labelEdge:re,labelStartWidth:ue,textAlign:ce,userAssistanceDensity:xe}=d.useFormContext(),fe=I??le,pe=R??de,be=w??re,he=D??ue,me=z??ce,ve=Q??xe,{enabledElementRef:ye,focusProps:Fe,isFocused:Ce,readonlyElementRef:Se}=o.useFocusableTextField({isDisabled:fe,isReadonly:pe,ref:te}),{hoverProps:Ae,isHover:Le}=u.useHover({isDisabled:pe||fe||!1}),{baseId:ge,formFieldContext:Te,inputProps:Ie,labelProps:Re,textFieldProps:Ue,userAssistanceProps:Pe}=x.useTextField({ariaDescribedBy:e,helpSourceLink:g,helpSourceText:T,isDisabled:fe,isFocused:Ce,isReadonly:pe,isRequiredShown:j,labelEdge:be,messages:B,styleVariant:Y,userAssistanceDensity:ve,value:X}),Ee=i.useCallback((()=>{ye.current?.focus(),ne?.({previousValue:X,value:""})}),[ne,X,ye]),je=n.useClearIcon({clearIcon:s.jsx(K.ClearIcon,{onClick:Ee}),display:A,hasValue:Te.hasValue,isFocused:Ce,isEnabled:!pe&&!fe,isHover:Le}),Ve=G.beforeVNode(L,je),we=void 0!==V&&"inside"===be,{shouldRenderPrefix:De,shouldRenderSuffix:ke,prefixProps:Ne,suffixProps:Be,valuePrefixSuffix:He,ariaLabelledBy:_e}=b.usePrefixSuffix({baseId:ge,hasEndContent:void 0!==L,hasInsideLabel:we,hasStartContent:void 0!==M,hasValue:Te.hasValue,isDisabled:fe,isFocused:Ce,labelId:Re.id,prefix:_,suffix:W,value:X}),qe=De?s.jsx(p.PrefixSuffix,{...Ne}):void 0,Me=ke?s.jsx(p.PrefixSuffix,{...Be}):void 0,{isMaxLengthExceeded:We,valueLength:Ge,onFilteredInput:Ke}=c.useLengthFilter({maxLength:k,maxLengthUnit:N,value:X,onInput:ne,onCommit:oe}),Oe="none"!==be?s.jsx(f.Label,{...Re,children:V}):void 0,ze={label:"none"!==be?Oe:void 0,labelEdge:"none"!==be?be:void 0,labelStartWidth:"none"!==be?he:void 0},Je="none"===be?V:void 0,Qe="efficient"===ve||"reflow"===ve?fe||pe?"efficient"!==ve?void 0:s.jsx(U.InlineUserAssistance,{userAssistanceDensity:ve,...Pe}):s.jsx(U.InlineUserAssistance,{assistiveText:a,fieldLabel:V,helpSourceLink:g,helpSourceText:T,messages:B,isRequiredShown:j,userAssistanceDensity:ve,...Pe}):void 0,Xe=i.useRef(null),Ye="compact"===ve?s.jsx(P.CompactUserAssistance,{anchorRef:Xe,messages:B,assistiveText:a,...Pe}):void 0;if(pe){const e=s.jsx(y.ReadonlyTextFieldInput,{"aria-describedby":Ie["aria-describedby"],"aria-label":Je,"aria-labelledby":Re.id,as:"div",autoFocus:h,elementRef:Se,textAlign:me,value:He,hasEmptyLabel:""===V&&"none"===be,hasInsideLabel:we});return s.jsx(r.FormFieldContext.Provider,{value:Te,children:s.jsx(F.ReadonlyTextField,{role:"presentation",columnSpan:v,compactUserAssistance:Ye,inlineUserAssistance:Qe,onBlur:Fe.onfocusout,onFocus:Fe.onfocusin,ref:Xe,mainContent:e,testId:se,...ze})})}const Ze=s.jsxs(t.Fragment,{children:[qe,s.jsx(m.TextFieldInput,{"aria-labelledby":_e,"aria-label":Je,autoComplete:l,autoFocus:h,currentCommitValue:ae,hasEmptyLabel:""===V&&"none"===be,hasEndContent:void 0!==L,hasInsideLabel:void 0!==Oe&&"inside"===be,hasPrefix:void 0!==qe,hasStartContent:void 0!==M,hasSuffix:void 0!==Me,inputRef:ye,isRequired:E,placeholder:H,role:q,textAlign:me,type:J()?Z:void 0,value:fe?He:X,onCommit:oe,onInput:Ke,...Ie}),Me,void 0!==k&&s.jsx(S.MaxLengthLiveRegion,{isMaxLengthExceeded:We,maxLength:k,valueLength:Ge})]});return s.jsx(r.FormFieldContext.Provider,{value:Te,children:s.jsx(C.TextField,{endContent:Ve,columnSpan:v,compactUserAssistance:Ye,inlineUserAssistance:Qe,mainContent:Ze,onBlur:Fe.onfocusout,onFocus:Fe.onfocusin,startContent:M,mainFieldRef:Xe,testId:se,...Ue,...ze,...Ae})})}));function J(){const e=h.getClientHints().deviceType;return"phone"===e||"tablet"===e}e.InputText=z}));
//# sourceMappingURL=InputText-b9fb675e.js.map
