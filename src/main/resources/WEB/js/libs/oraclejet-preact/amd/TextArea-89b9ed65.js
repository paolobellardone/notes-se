define(['exports', 'preact/jsx-runtime', 'preact/compat', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', 'preact/hooks', './useFocusableTextField-8b755b15', './Label-3912beb2', './keyboardUtils-fbb389f8', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-b4278437', './TextField-1021f00b', './MaxLengthLiveRegion-bb956138', './useTextField-e6877c79', './logger-0f873e29', './TabbableModeContext-a9c97640', './useId-c9578d26', './useTranslationBundle-d07d4b20', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', './CompactUserAssistance-3370a318', './mergeProps-bcfa6a92', './LayerHost-639b3284', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'preact', 'css!./IconStyle.styles.css', './Popup-66e79afa', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-372087af', './HiddenAccessible-037ef42d', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useLengthFilter-ed8959a4', './MaxLengthCounter-9a95922c', './useCurrentValueReducer-faded381', './useSelectableTextField-900d2860'], (function(e,s,t,a,n,i,o,l,r,d,c,u,m,p,x,b,h,F,y,g,f,A,L,v,C,T,R,S,I,U,E,j,w,P,_,k,D,V,N,B,M,H,q,z,W,$){"use strict";const G=t.forwardRef((({"aria-describedby":e,assistiveText:a,autoComplete:o="off",autoFocus:d=!1,columnSpan:u,helpSourceLink:F,helpSourceText:y,isDisabled:A,isReadonly:L,isRequired:v=!1,isRequiredShown:S,label:I,labelEdge:U,labelStartWidth:E,maxLength:j,maxLengthCounter:w="remaining",maxLengthUnit:P,messages:_,placeholder:k,resize:D,role:V,rows:N,textAlign:M,userAssistanceDensity:H,value:G,variant:O="default",onInput:X,onCommit:J,testId:K},Q)=>{const Y=f.useTranslationBundle("@oracle/oraclejet-preact"),Z=j?Y.formControl_limitReached({CHARACTER_LIMIT:j}):"",{currentCommitValue:ee,dispatch:se}=W.useCurrentValueReducer({value:G}),te=t.useCallback((e=>{se({type:"input",payload:e.value}),X?.(e)}),[X,se]),ae=t.useCallback((e=>{se({type:"commit",payload:e.value}),J?.(e)}),[J,se]),{isDisabled:ne,isReadonly:ie,labelEdge:oe,labelStartWidth:le,textAlign:re,userAssistanceDensity:de}=n.useFormContext(),ce=A??ne,ue=L??ie,me=U??oe,pe=E??le,xe=M??re,be=H??de,he=t.useRef(g.useId()),Fe=e?`${e} ${he.current}`:he.current,ye=t.useRef(null),ge=t.useRef(null),{focusProps:fe,isFocused:Ae,methods:Le}=l.useFocusableTextField({isDisabled:ce,isReadonly:ue,enabledElementRef:ye,readonlyElementRef:ge}),{methods:ve}=$.useSelectableTextField(ye);t.useImperativeHandle(Q,(()=>R.mergeProps(Le,ve)),[Le,ve]);const{isMaxLengthReached:Ce,valueLength:Te,onFilteredInput:Re}=q.useLengthFilter({maxLength:j,maxLengthUnit:P,value:G,onInput:te,onCommit:ae}),Se=[..._??[],...Ce?[{detail:Z,severity:"info"}]:[]],{formFieldContext:Ie,inputProps:Ue,labelProps:Ee,textFieldProps:je,userAssistanceProps:we}=h.useTextField({ariaDescribedBy:ue||ce?e:Fe,contentVariant:"textarea",helpSourceLink:F,helpSourceText:y,isDisabled:ce,isFocused:Ae,isReadonly:ue,isRequiredShown:S,labelEdge:me,messages:Se,styleVariant:O,userAssistanceDensity:be,value:G}),Pe=t.useCallback((()=>{const e=ye.current,s=e?e.value.length:null;ye.current?.setSelectionRange(s,s),ye.current?.focus()}),[ye]),_e="none"!==me?s.jsx(r.Label,{...Ee,children:I}):void 0,ke={label:"none"!==me?_e:void 0,labelEdge:"none"!==me?me:void 0,labelStartWidth:"none"!==me?pe:void 0},De="none"===me?I:void 0,Ve="efficient"===be||"reflow"===be?ce||ue?"efficient"!==be?void 0:s.jsx(C.InlineUserAssistance,{userAssistanceDensity:be,...we}):s.jsx(C.InlineUserAssistance,{assistiveText:a,fieldLabel:I,helpSourceLink:F,helpSourceText:y,messages:Se,isRequiredShown:S,userAssistanceDensity:be,...we}):void 0,Ne=t.useRef(null),Be="compact"===be?s.jsx(T.CompactUserAssistance,{anchorRef:Ne,messages:Se,assistiveText:a,...we}):void 0;if(ue){const e=s.jsx(m.ReadonlyTextFieldInput,{"aria-describedby":Ue["aria-describedby"],"aria-label":De,"aria-labelledby":Ee.id,as:"textarea",elementRef:ge,rows:N,autoFocus:d,textAlign:xe,value:G,variant:"textarea",hasEmptyLabel:""===I&&"none"===me,hasInsideLabel:void 0!==I&&"inside"===me});return s.jsx(i.FormFieldContext.Provider,{value:Ie,children:s.jsx(p.ReadonlyTextField,{role:"presentation",columnSpan:u,compactUserAssistance:Be,inlineUserAssistance:Ve,ref:Ne,testId:K,variant:"textarea",mainContent:e,resize:D,...ke})})}const Me=void 0!==j,He=s.jsxs(s.Fragment,{children:[s.jsx(c.TextFieldInput,{as:"textarea","aria-label":De,autoComplete:o,autoFocus:d,currentCommitValue:ee,hasEmptyLabel:""===I&&"none"===me,hasInsideLabel:void 0!==_e&&"inside"===me,isRequired:v,inputRef:ye,onCommit:ae,onInput:Re,placeholder:k,role:V,rows:N,textAlign:xe,value:G,...Ue}),"remaining"===w&&Me&&s.jsx(z.MaxLengthCounter,{maxLength:j,valueLength:Te,onClick:Pe}),Me&&s.jsx(B.HiddenAccessible,{id:he.current,isHidden:!0,children:Y.formControl_maxLength({MAX_LENGTH:`${j}`})}),Me&&Ae&&s.jsx(b.MaxLengthLiveRegion,{maxLength:j,valueLength:Te,testId:K+"_remainingChars"})]});return s.jsx(i.FormFieldContext.Provider,{value:Ie,children:s.jsx(x.TextField,{mainContent:He,columnSpan:u,compactUserAssistance:Be,inlineUserAssistance:Ve,onBlur:fe?.onFocusOut,onFocus:fe?.onFocusIn,mainFieldRef:Ne,resize:D,testId:K,...je,...ke})})}));e.TextArea=G}));
//# sourceMappingURL=TextArea-89b9ed65.js.map
