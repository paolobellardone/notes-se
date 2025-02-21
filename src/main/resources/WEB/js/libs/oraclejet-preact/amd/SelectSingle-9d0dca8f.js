define(['exports', 'preact/jsx-runtime', './Label-3912beb2', 'preact/hooks', './keyboardUtils-fbb389f8', 'preact/compat', './TextFieldInput-ba4e508c', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './ReadonlyTextFieldInput-608bddc1', './StyledTextField-b4278437', './Flex-3421f0df', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', 'css!./LabelValueLayoutStyles.styles.css', './logger-0f873e29', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./RadioStyles.styles.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', 'module', 'css!./CheckboxStyles.styles.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', './InputGroupContext-372087af', './LayerHost-639b3284', './useTranslationBundle-d07d4b20', 'css!./LiveRegionStyles.styles.css', './TabbableModeContext-a9c97640', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-4656c2a6', './CompactUserAssistance-3370a318', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', './tooltipUtils-e5bdb734', 'preact', 'css!./IconStyle.styles.css', './Popup-66e79afa', 'css!./HiddenAccessibleStyles.styles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './useFocusableTextField-8b755b15', './useLoadingIndicatorTimer-20a3bf5f', './useTextField-e6877c79', './Separator-181f7541', './useSelectCommon-e7f123ce', './IconButton-ae9a01ce', './CancelS-e19c73e5', './useAccessibleContext-23e8a333', './textAlign-ef924afd', './useFormFieldContext-8196183c', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './TextField-1021f00b', './LiveRegion-9a362373', './View-bd5c7fa7', './useEffectEvent-8467275b', './mergeProps-bcfa6a92'], (function(e,s,n,t,o,i,a,l,r,d,c,u,p,h,b,x,S,m,v,y,F,A,f,w,T,R,g,L,C,I,D,E,k,j,U,B,P,K,O,V,_,M,N,H,z,q,$,G,W,Y,Z,J,Q,X,ee,se,ne,te,oe,ie,ae,le,re,de,ce,ue,pe,he,be,xe){"use strict";function Se({assistiveText:e,collectionRenderer:n,collectionRendererContext:t,data:o,dropdownId:i,dropdownRef:a,helpSourceLink:l,helpSourceText:r,isAddToListShown:d,isAdvancedSearchShown:c,isDisabled:u,isDropdownAbove:p,isEmptyResults:h,isOpen:b,isReadonly:x,label:S,mainFieldRef:m,onAddToListAction:v,onAdvancedSearchAction:y,onAutoDismiss:F,onPosition:A,userAssistanceDensity:f}){const w=B.useTranslationBundle("@oracle/oraclejet-preact"),T=!b||p||u||x||!e&&!l||"efficient"!==f&&"reflow"!==f?void 0:s.jsx(K.TabbableModeContext.Provider,{value:{isTabbable:!1},children:s.jsx(te.DropdownUserAssistance,{assistiveText:e,fieldLabel:S,helpSourceLink:l,helpSourceText:r,userAssistanceDensity:f})}),R=h?d||c?void 0:s.jsx(te.EmptyResults,{}):n(t),g=d?s.jsx(te.LinkItem,{isHighlighted:h,onAction:v,children:w.select_addToList()}):void 0,L=c?s.jsxs(s.Fragment,{children:[!h&&s.jsx("div",{onMouseDown:te.preventDefault,children:s.jsx(ne.Separator,{})}),s.jsx(te.LinkItem,{isHighlighted:h,onAction:y,children:w.select_moreSearchOptions()})]}):void 0;return s.jsxs(te.Dropdown,{anchorRef:m,dropdownRef:a,id:i,isOpen:b,onAutoDismiss:F,onPosition:A,children:[s.jsxs(te.DropdownList,{hasBottomGap:void 0===T,isLoading:null===o,children:[R,g,L]}),T]})}function me({children:e,hasInsideLabel:n,isBackButtonShown:t,isClearButtonShown:o,isDropdownArrowShown:i,onBackButtonClick:a,onClearButtonClick:l,onDropdownArrowClick:r,...d}){const c=B.useTranslationBundle("@oracle/oraclejet-preact"),{isDisabled:u,isLoading:p}=re.useFormFieldContext(),h=t?s.jsx(oe.IconButton,{"aria-label":c.selectMultiple_back(),size:"xs",variant:"ghost",onAction:a,children:s.jsx(ie.SvgNavLeft,{})}):null,b=p?void 0:s.jsxs(s.Fragment,{children:[o&&s.jsx(oe.IconButton,{"aria-label":c.formControl_clear(),size:"sm",variant:"ghost",onAction:l,children:s.jsx(ie.SvgCancelS,{})}),i&&s.jsx(te.DropdownArrow,{isDisabled:u,onClick:r,testId:`${d.testId}_dropdownarrow`})]});return s.jsx(ue.TextField,{startContent:h,mainContent:e,endContent:b,...d})}function ve({displayValue:e,isAddToListShown:n,isAdvancedSearchShown:t,isUserFiltering:o,liveRegionText:i,userInput:l,virtualKeyboard:r,...d}){const c=B.useTranslationBundle("@oracle/oraclejet-preact"),u=c.select_addToListAvailable(),p=c.select_moreSearchOptionsAvailable();return s.jsxs(s.Fragment,{children:[s.jsx(a.TextFieldInput,{...d,hasEndContent:!0,"aria-autocomplete":"list",autoComplete:"off",role:"combobox",spellcheck:!1,type:"auto"===r?"search":r,value:o?l:e}),s.jsx(pe.LiveRegion,{children:i}),n?s.jsx(pe.LiveRegion,{children:u}):void 0,t?s.jsx(pe.LiveRegion,{children:p}):void 0]})}function ye({"aria-describedby":e,"aria-label":o,assistiveText:i,clearValue:a,collectionRenderer:l,collectionRendererContext:r,data:d,displayValue:c,dropdownId:u,helpSourceLink:p,helpSourceText:b,isAddToListShown:x,isAdvancedSearchShown:S,isEmptyResults:m,isFocused:v,isLoading:y,isOpen:F=!1,isRequired:A,label:f,liveRegionText:w,mainFieldInputRef:T,onAddToListAction:R,onAdvancedSearchAction:g,onFieldBlur:L,onFieldFocus:C,onFieldInput:I,onFieldKeyDown:D,onFieldKeyUp:E,placeholder:k,propIsLoading:j,setDropdownOpen:U,setUserInput:P,stopFiltering:K,textAlign:O,userAssistanceDensity:V,userInput:_,virtualKeyboard:M}){const N=B.useTranslationBundle("@oracle/oraclejet-preact"),{formFieldContext:H,inputProps:z,labelProps:q,textFieldProps:$,userAssistanceProps:G}=se.useTextField({ariaDescribedBy:e,helpSourceLink:p,helpSourceText:b,isDisabled:!1,isFocused:v,isLoading:y,isReadonly:!1,isRequiredShown:!1,labelEdge:"inside",styleVariant:"default",value:""}),{selectSingleFieldInputProps:W,selectSingleFieldProps:Y}=function({clearValue:e,displayValue:s,inputRef:n,isDropdownOpen:o,userInput:i,setDropdownOpen:a,stopFiltering:l,setUserInput:r}){const d=t.useRef(null),c=t.useCallback((()=>{a(!1),l(),n.current?.focus()}),[n,a,l]),u=t.useCallback((()=>{c()}),[c]),p=t.useCallback((()=>{l(),e(!1),d.current?.focus()}),[e,l]),h=t.useRef(o);t.useEffect((()=>{o&&setTimeout((()=>d.current?.focus()),0),h.current=o}),[o]);const b=t.useRef(!0);return b.current&&(b.current=!1,r(s)),{selectSingleFieldInputProps:{displayValue:i??"",hasEmptyLabel:!1,hasInsideLabel:!0,inputRef:d,isUserFiltering:!0,removeIcon:"always",userInput:i},selectSingleFieldProps:{hasInsideLabel:!0,isBackButtonShown:!0,isClearButtonShown:!te.isSearchTextEmptyOrUndefined(i)||!te.isSearchTextEmptyOrUndefined(s),isDropdownArrowShown:!1,styleVariant:"embedded",onBackButtonClick:u,onClearButtonClick:p}}}({clearValue:a,displayValue:c,inputRef:T,isDropdownOpen:F,setDropdownOpen:U,setUserInput:P,stopFiltering:K,userInput:_});H.hasValue=j||H.hasValue;const Z={label:s.jsx(n.Label,{...q,children:f}),labelEdge:"inside"},J=!F||!i&&!p||"efficient"!==V&&"reflow"!==V?void 0:s.jsx(te.DropdownUserAssistance,{assistiveText:i,fieldLabel:f,helpSourceLink:p,helpSourceText:b,userAssistanceDensity:V,...G}),Q=m?x||S?void 0:s.jsx(te.EmptyResults,{}):l(r),X=x?s.jsx(te.LinkItem,{onAction:R,children:N.select_addToList()}):void 0,ee=S?s.jsxs(s.Fragment,{children:[s.jsx("div",{onMouseDown:te.preventDefault,children:s.jsx(ne.Separator,{})}),s.jsx(te.LinkItem,{onAction:g,children:N.select_moreSearchOptions()})]}):void 0;return s.jsx(te.SelectMobileDropdown,{header:s.jsxs(h.FormFieldContext.Provider,{value:H,children:[s.jsx(he.View,{children:s.jsx(me,{...$,...Z,...Y,onFocus:C,onBlur:L,children:s.jsx(ve,{...z,...W,"aria-controls":u,"aria-expanded":F,"aria-label":o,isAddToListShown:x,isAdvancedSearchShown:S,isRequired:A,liveRegionText:w,placeholder:k,textAlign:O,virtualKeyboard:M,onInput:I,onKeyDown:D,onKeyUp:E})})}),J,ee]}),hasHeaderSeparator:!(S&&m),id:u,isOpen:F,labelId:q.id,children:s.jsxs(te.DropdownList,{isLoading:null===d,hasTopGap:!(x||S),children:[Q,X]})})}const Fe=i.forwardRef((({addToList:e="off",advancedSearch:i="off","aria-describedby":a,assistiveText:l,collectionRenderer:c,columnSpan:u,data:b,helpSourceLink:x,helpSourceText:S,isDisabled:m,isLoading:v,isReadonly:y,isRequired:F,isRequiredShown:A,itemRenderer:f,itemText:w,label:T,labelEdge:R,labelStartWidth:g,messages:L,onAddToListAction:C,onAdvancedSearchAction:I,onCommit:D,onFilter:E,onLoadRange:k,placeholder:j,testId:U,textAlign:P,userAssistanceDensity:K,valueItem:O,variant:V="default",virtualKeyboard:_},H)=>{const{isDisabled:z,isReadonly:q,labelEdge:$,labelStartWidth:W,textAlign:Y,userAssistanceDensity:Z}=p.useFormContext(),J=m??z,Q=y??q,ne=R??$,oe=g??W,ie=P??Y,ae=K??Z,le=t.useRef(null),re=t.useRef(null),{focusProps:de,isFocused:ce,methods:ue}=X.useFocusableTextField({isDisabled:J,isReadonly:Q,enabledElementRef:le,readonlyElementRef:re});t.useImperativeHandle(H,(()=>ue),[ue]);const{addToListEventHandlers:pe,advancedSearchEventHandlers:he,clearValue:Fe,collectionRendererContext:Ae,dropdownArrowEventHandlers:fe,dropdownEventHandlers:we,dropdownRef:Te,inputEventHandlers:Re,isAddToListShown:ge,isAdvancedSearchShown:Le,isDataFetched:Ce,isDropdownAbove:Ie,isDropdownOpen:De,isEmptyResults:Ee,isFocused:ke,isUserFiltering:je,mainFieldRef:Ue,mouseProps:Be,setDropdownOpen:Pe,setUserInput:Ke,stopFiltering:Oe,textFieldRef:Ve,userInput:_e}=function({addToList:e,advancedSearch:s,data:n,inputRef:i,isDisabled:a,isFocused:l,isReadonly:r,onAddToListAction:d,onAdvancedSearchAction:c,onCommit:u,onFilter:p,valueItem:h}){const{currentRowKeyRef:b,currentRowOverride:x,dropdownRef:S,getDropdownTabbableElems:m,handleDropdownArrowClick:v,handleDropdownAutoDismiss:y,handleDropdownPosition:F,handleInput:A,handleMainFieldKeyDown:f,handleMainFieldKeyUp:w,isDropdownAbove:T,isDropdownOpen:R,isFocused:g,isUserFiltering:L,mainFieldRef:C,onCurrentKeyChange:I,onMouseDown:D,searchText:E,setCurrentRowOverride:k,setDropdownOpen:j,setUserInput:U,stopFiltering:B,userInput:P}=te.useSelectCommon({data:n,inputRef:i,isFocused:l,onFilter:p}),[K,O]=t.useState(),[V,_]=t.useState(!1),[M,N]=t.useState(g),[H,z]=t.useState(!1),q=t.useRef(n),$=t.useRef(R),G=t.useRef(E),W="on"===s&&L&&null!=E&&E.length>0,Y=null!=n&&!te.isBeforeDataFetch(n),Z=Y&&0===n?.totalSize,J="on"===e&&"on"!==s&&L&&null!=E&&E.length>0&&Z,Q=t.useCallback((()=>{j(!1),B(),d?.({searchText:L?E:void 0})}),[L,d,E,j,B]),X=t.useCallback((()=>{j(!1),B(),c?.({searchText:L?E:void 0})}),[L,c,E,j,B]),ee=t.useCallback((e=>{u?.({value:e,previousValue:void 0!==h?h.key:void 0})}),[u,h]),se=t.useCallback(((e=!0)=>{e&&j(!1),O(new Set),ee(void 0)}),[ee,j]),ne=t.useCallback((()=>L&&""===P&&void 0!==h),[L,P,h]),oe=t.useCallback((()=>!!ne()&&(se(),!0)),[se,ne]);!M||g||H||V||!ne()||_(!0);const ie=be.useEffectEvent((()=>{V&&(se(),_(!1)),H&&z(!1)}));t.useEffect((()=>{g||ie()}),[ie,g]);const ae=t.useRef(),le=t.useCallback((e=>r||a?Promise.reject("Component is readonly or disabled"):(ee(e),Promise.resolve())),[a,r,ee]);t.useEffect((()=>{const e=r?C:ae;e.current&&(e.current._changeValue=le)}),[le,r,C]);const re=t.useCallback((()=>{i.current?.focus()}),[i]),de=t.useCallback((()=>{S.current?.parentElement?.removeChild(S.current)}),[S]),ce=t.useCallback((e=>{if(R&&"keydown"===e?.type){const s=e;if(s.code===o.KEYS.TAB){const e=s.shiftKey,t=m();if(t&&t.length>1){const s=t[0],n=t[t.length-1];if(!e&&document.activeElement!==n||e&&document.activeElement!==s)return void j(!0)}void 0!==b.current&&null!=n&&n.data.length>0&&(O(new Set([b.current])),ee(b.current),z(!0)),re(),de()}}}),[b,n,re,m,R,ee,de,j]),ue=t.useCallback((e=>{if(!o.isControlOrFunctionKey(e))switch(e.code){case o.KEYS.TAB:!ne()&&R&&null!=n&&n.data.length>0&&L&&(void 0!==b.current?(O(new Set([b.current])),ee(b.current)):ee(h?.key??void 0)),de(),j(!1);break;case o.KEYS.ENTER:if(te.isPhone())return;if(J)return void Q();if(W&&Z)return void X();!oe()&&R&&null!=n&&n.data.length>0&&(j(!1),B(),void 0!==b.current?(O(new Set([b.current])),ee(b.current)):ee(h?.key??void 0))}}),[oe,b,n,Q,X,J,W,ne,R,Z,L,ee,de,j,B,h]);t.useEffect((()=>{O(void 0===h?void 0:new Set([h.key]))}),[h]);const pe=t.useCallback((e=>{re(),j(!1),B();const s=e.context.key;O(new Set([s])),ee(s)}),[re,ee,j,B]);t.useEffect((()=>{n!==q.current&&R&&L&&null!=n&&0===n.offset&&n.data.length>0&&k({rowKey:te.isSearchTextEmptyOrUndefined(E)?void 0:n.data[0].metadata.key})}),[n,R,L,E,k]),t.useEffect((()=>{R!==$.current&&(!R||L&&void 0!==E&&0!==E.length||k({rowKey:[...K??[void 0]][0]}))}),[R,L,E,K,k]);const he=t.useMemo((()=>xe.mergeProps({onAutoDismiss:y,onPosition:F},{onAutoDismiss:ce})),[y,F,ce]),Se=t.useMemo((()=>xe.mergeProps({onInput:A,onKeyDown:f,onKeyUp:w},{onKeyDown:ue})),[f,A,w,ue]),me=te.useCollectionRenderer({currentKey:x.rowKey,searchText:E,selectedKeys:K,onCurrentKeyChange:I,onItemAction:pe});return g!==M&&N(g),t.useEffect((()=>{q.current=n,$.current=R,G.current=E})),{addToListEventHandlers:{onAction:Q},advancedSearchEventHandlers:{onAction:X},collectionRendererContext:me,dropdownArrowEventHandlers:{onClick:v},clearValue:se,dropdownEventHandlers:he,dropdownRef:S,inputEventHandlers:Se,inputRef:i,isAddToListShown:J,isAdvancedSearchShown:W,isDataFetched:Y,isDropdownAbove:T,isDropdownOpen:R,isEmptyResults:Z,isFocused:g,isUserFiltering:L,mainFieldRef:C,mouseProps:a||r?{}:{onMouseDown:D},setDropdownOpen:j,setUserInput:U,stopFiltering:B,textFieldRef:ae,userInput:P}}({addToList:e,advancedSearch:i,data:b,inputRef:le,isDisabled:J,isFocused:ce,isReadonly:Q,onAddToListAction:C,onAdvancedSearchAction:I,onCommit:D,onFilter:E,valueItem:O}),Me=ee.useLoadingIndicatorTimer(v??!1),{baseId:Ne,formFieldContext:He,inputProps:ze,labelProps:qe,textFieldProps:$e,userAssistanceProps:Ge}=se.useTextField({ariaDescribedBy:a,helpSourceLink:x,helpSourceText:S,isDisabled:J,isFocused:ke,isLoading:Me,isReadonly:Q,isRequiredShown:A,labelEdge:ne,messages:L,styleVariant:V,userAssistanceDensity:ae,value:void 0!==O||void 0});He.hasValue=v||He.hasValue;const We=`${Ne}-dropdown`,Ye=function(e,s){return t.useMemo((()=>void 0===s?"":te.renderItemText(s,e)??""),[s,e])}(w,O),Ze="none"!==ne?s.jsx(n.Label,{...qe,children:T}):void 0,Je={label:"none"!==ne?Ze:void 0,labelEdge:"none"!==ne?ne:void 0,labelStartWidth:"none"!==ne?oe:void 0},Qe="none"===ne?T:void 0,Xe="efficient"===ae||"reflow"===ae?J||Q?"efficient"!==ae?void 0:s.jsx(M.InlineUserAssistance,{userAssistanceDensity:ae,...Ge}):s.jsx(M.InlineUserAssistance,{assistiveText:l,fieldLabel:T,helpSourceLink:x,helpSourceText:S,messages:L,isRequiredShown:A,userAssistanceDensity:ae,...Ge}):void 0,es="compact"===ae?s.jsx(N.CompactUserAssistance,{anchorRef:Ue,messages:L,assistiveText:l,...Ge}):void 0,ss=B.useTranslationBundle("@oracle/oraclejet-preact"),ns=t.useCallback((({onPersistCurrentRowKey:e,onRowAction:n,selected:t,searchText:o,currentRowKeyOverride:i})=>s.jsx(te.DefaultList,{"aria-label":T??"",currentItemVariant:"highlight",currentKey:i,data:b,itemRenderer:f,itemText:w,onCurrentKeyChange:e,onItemAction:n,onLoadRange:k,searchText:je?o:void 0,selectedKeys:t,selectionMode:"single"})),[b,je,f,w,T,k]);if(Q){const e=s.jsx(r.ReadonlyTextFieldInput,{"aria-describedby":ze["aria-describedby"],"aria-label":Qe,"aria-labelledby":qe.id,as:"div",elementRef:re,hasEmptyLabel:""===T&&"none"===ne,hasInsideLabel:void 0!==T&&"inside"===ne,textAlign:ie,value:Ye});return s.jsx(h.FormFieldContext.Provider,{value:He,children:s.jsx(d.ReadonlyTextField,{role:"presentation",columnSpan:u,compactUserAssistance:es,inlineUserAssistance:Xe,onBlur:de.onFocusOut,onFocus:de.onFocusIn,ref:Ue,mainContent:e,testId:U,...Je})})}const ts=void 0!==Ze&&"inside"===ne,os=De&&Ce?0===b?.totalSize?ss.select_noMatchesFound():1===b?.totalSize?ss.select_oneMatchFound():"exact"===b?.sizePrecision?ss.select_sizeMatchesFound({TOTAL_SIZE:`${b?.totalSize}`}):ss.select_sizeOrMoreMatchesFound({TOTAL_SIZE:`${b?.totalSize}`}):"",is=""===T&&"none"===ne,as=te.isPhone()&&!J?s.jsx(te.SelectMobileFieldInput,{"aria-controls":We,"aria-describedby":ze["aria-describedby"],"aria-expanded":De,"aria-invalid":ze["aria-invalid"],"aria-label":Qe,"aria-labelledby":qe.id,displayValue:Ye,hasEmptyLabel:is,hasInsideLabel:ts,isRequired:F,onBlur:ze.onBlur,onFocus:ze.onFocus,placeholder:j,ref:le,textAlign:ie,variant:ze.variant}):s.jsx(ve,{"aria-controls":We,"aria-expanded":De,"aria-label":Qe,displayValue:Ye,hasEmptyLabel:""===T&&"none"===ne,hasInsideLabel:ts,inputRef:le,isAddToListShown:ge,isAdvancedSearchShown:Le,isRequired:F,isUserFiltering:je,liveRegionText:os,placeholder:j,textAlign:ie,userInput:_e,virtualKeyboard:te.isTablet()?_:void 0,...ze,...Re}),ls=De&&void 0!==b&&(null===b||b.totalSize>0||te.isBeforeDataFetch(b)||Ee),rs=ls?te.isPhone()?s.jsx(ye,{"aria-describedby":a,"aria-label":Qe,assistiveText:l,clearValue:Fe,collectionRenderer:c??ns,collectionRendererContext:Ae,data:b,displayValue:Ye,dropdownId:We,helpSourceLink:x,helpSourceText:S,isAddToListShown:ge,isAdvancedSearchShown:Le,isEmptyResults:Ee,isFocused:ke,isLoading:Me,isOpen:ls,isRequired:F,label:T,liveRegionText:os,mainFieldInputRef:le,onAddToListAction:pe.onAction,onAdvancedSearchAction:he.onAction,onFieldBlur:de.onFocusOut,onFieldFocus:de.onFocusIn,onFieldInput:Re.onInput,onFieldKeyDown:Re.onKeyDown,onFieldKeyUp:Re.onKeyUp,placeholder:j,propIsLoading:v,setDropdownOpen:Pe,stopFiltering:Oe,setUserInput:Ke,textAlign:ie,userAssistanceDensity:ae,userInput:_e,virtualKeyboard:_}):s.jsx(Se,{...we,assistiveText:l,collectionRenderer:c??ns,collectionRendererContext:Ae,data:b,dropdownId:We,dropdownRef:Te,helpSourceLink:x,helpSourceText:S,isAddToListShown:ge,isAdvancedSearchShown:Le,isDisabled:J,isDropdownAbove:Ie,isEmptyResults:Ee,isOpen:ls,isReadonly:Q,label:T,mainFieldRef:Ue,onAddToListAction:pe.onAction,onAdvancedSearchAction:he.onAction,userAssistanceDensity:ae}):null;return s.jsxs(G.Fragment,{children:[s.jsx(h.FormFieldContext.Provider,{value:He,children:s.jsx(me,{columnSpan:u,compactUserAssistance:es,hasInsideLabel:ts,inlineUserAssistance:Xe,isDropdownArrowShown:!0,mainFieldRef:Ue,onBlur:de?.onFocusOut,onDropdownArrowClick:fe.onClick,onFocus:de?.onFocusIn,rootRef:Ve,testId:U,...$e,...Je,...Be,children:as})}),rs]})}));e.SelectSingle=Fe}));
//# sourceMappingURL=SelectSingle-9d0dca8f.js.map
