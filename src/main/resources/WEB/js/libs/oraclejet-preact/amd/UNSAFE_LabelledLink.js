define(['exports', 'preact/jsx-runtime', './Label-16321133', './Link-0eb3b20c', './Text-77df83fd', 'preact/hooks', 'preact/compat', './TextFieldInput-90149232', 'css!./ObfuscatedTextFieldInputStyles.styles.css', './useAccessibleContext-723ca770', './FormContext-598efe92', './useFormContext-9b29eeaf', './TabbableModeContext-c9143afd', './textAlign-a02ed68b', './FormFieldContext-57ac57ba', './logger-36c6eea0', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './TopLayerHost-d9bd8ecf', './StyledTextField-9933e630', './Flex-0052275f', 'css!./LabelValueLayoutStyles.styles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./RadioStyles.styles.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', 'module', 'css!./CheckboxStyles.styles.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', './InputGroupContext-6c5f432c', 'preact', 'css!./LiveRegionStyles.styles.css', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-96d6436b', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', './Floating-aaafdcf7', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './Popup-c6026a77', './UNSAFE_Separator/themes/SeparatorStyles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './View-a907404d', './useTextField-5da71f2f', './HiddenAccessible-00402562', './classNames-49c3ba27', './useComponentTheme-9a36e65b', './mergeInterpolations-497657fd', './UNSAFE_LabelledLink/themes/redwood/LabelledLinkTheme', './useFormFieldContext-cbd8677f', './CompactLabelAssistance-c936e7a6', './useTooltip-f1e6a531', './useTooltipControlled-4401c2d2', './useId-e0c3517c', './Layer-ea9920e0', './useThemeInterpolations-eb2b5ee2', './useColorScheme-33c4f510', './useScale-f847e1c0', './theme-f0ff48ad', './Theme-748163ef', './useHover-29c192f3', './useToggle-a59ec51a', './useFocus-dab1b280', './useTouch-68d1a08f', './mergeProps-bae345c4', './useAnimation-24256140', './useTestId-dfceb92d', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39', './EnvironmentProvider-fbf8d770', './LayerManager-b2837363', './useTranslationBundle-20ce0acf', './CompactHelpSource-824e6791', './useTabbableMode-c39b463d', './Help-1dd33d8b', './Icon-6b14fc3e', './size-6d3a087d', './utils-225c0e9a', './Common/themes/themeContract.css', './colorUtils-f1647b17', './_curry1-73b01864', './UNSAFE_Icon/themes/IconStyle.css', './useFocusWithin-dbdce73a', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'css!./TextFieldVariants.styles.css', './usePress-465090ef', './useInteractionStyle-38f4bebf', './clientHints-5a067fae', './useActive-152990ee', './UNSAFE_Link/themes/redwood/LinkTheme', './UNSAFE_Link/themes/LinkStyles.css', 'css!./LinkStyles.styles.css', './UNSAFE_Link/themes/redwood/LinkBaseTheme.css', 'module', './UNSAFE_Link/themes/redwood/LinkVariants.css', 'css!./LinkVariants.styles.css', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './useTextFieldInputHandlers-05409fd5', './TextFieldUtils-da033871', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', 'css!./TextFieldInputVariants.styles.css', 'css!./text.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c890dd1b', './Common/themes/redwood/theme', './LabelValueLayout-deee3466', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_RadioItem/themes/RadioStyles.css', './UNSAFE_RadioItem/themes/redwood/RadioBaseTheme.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'css!./CheckboxVariants.styles.css', './LayoutStyles.css-defee9f4', 'css!./LayoutStyles.styles.css', './useInputGroupContext-4f428bd7', './useUser-6c8723b4', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './dimensions-094b9f7d', './boxalignment-a67cc263', './arrayUtils-bef2e8fb', 'css!./boxalignment.styles.css', './flexbox-4b93b535', 'css!./flexbox.styles.css', './flexitem-8052fa2b', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', './ComponentMessageContainer-7a5e377a', './MessagesManager-43d0389d', './useMessagesContext-dde6f9c9', './Transition-4c8a0bab', './ComponentMessage-08a172f3', './MessageStartIcon-94a5f4d2', './SuccessS-584d6276', './ErrorS-905bce15', './InformationS-5581ccca', './WarningS-cf815827', './PRIVATE_Message/themes/MessageStyles.css', './MessageSummary-161b06f8', './MessageUtils-652ca803', './soundUtils-01a0eb35', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './InlineHelp-50fa2c98', './InlineHelpSource-f9e63eec', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', 'css!./MessageBannerVariants.styles.css', './useFloating-e7375283', './positionUtils-5e82645b', './refUtils-64b1b5b1', './useOutsideClick-d7ba24e7', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-5df7b135', './UNSAFE_Floating/themes/FloatingContract.css', './BaseButton-4a512058', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './ButtonLayout-071d379d', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './getLocale-6daccf20', './stringUtils-c9076bae', './Message.types-180b4242', './tabbableUtils-a1aa6b01', './head-990e418e', './_arity-9286283c', './_curry3-1e42149e', './_curry2-b8890f0a', './_isArray-f8c70222', './_isString-668b4c85', './FocusTrap-fdb3a0ed', './FocusTracker-8296f9cd', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-93466d5f', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './useAnimationStatus-37ce08c6', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'css!./PopupStyles.styles.css', 'css!./SeparatorStyles.styles.css', './borders-10aa3eea', './colors-08bc02b8', './padding-6d435d25', './aria-8a796f36', './equals-cab1de94', './_isObject-8093a293', './useMessageSeverity-57195beb', './useFormFieldContextProps-29db0330', './UNSAFE_LabelledLink/themes/LabelledLinkStyles.css', 'css!./LabelledLinkStyles.styles.css', './UNSAFE_LabelledLink/themes/redwood/LabelledLinkVariants.css', 'css!./LabelledLinkVariants.styles.css'], (function(e,s,t,o,a,l,n,d,i,c,r,m,h,y,F,S,b,u,T,A,x,U,p,L,_,E,N,f,g,w,k,C,B,I,M,V,R,P,v,j,H,O,W,D,G,z,$,q,J,K,Q,X,Y,Z,ee,se,te,oe,ae,le,ne,de,ie,ce,re,me,he,ye,Fe,Se,be,ue,Te,Ae,xe,Ue,pe,Le,_e,Ee,Ne,fe,ge,we,ke,Ce,Be,Ie,Me,Ve,Re,Pe,ve,je,He,Oe,We,De,Ge,ze,$e,qe,Je,Ke,Qe,Xe,Ye,Ze,es,ss,ts,os,as,ls,ns,ds,is,cs,rs,ms,hs,ys,Fs,Ss,bs,us,Ts,As,xs,Us,ps,Ls,_s,Es,Ns,fs,gs,ws,ks,Cs,Bs,Is,Ms,Vs,Rs,Ps,vs,js,Hs,Os,Ws,Ds,Gs,zs,$s,qs,Js,Ks,Qs,Xs,Ys,Zs,et,st,tt,ot,at,lt,nt,dt,it,ct,rt,mt,ht,yt,Ft,St,bt,ut,Tt,At,xt,Ut,pt,Lt,_t,Et,Nt,ft,gt,wt,kt,Ct,Bt,It,Mt,Vt,Rt,Pt,vt,jt,Ht,Ot,Wt,Dt,Gt,zt,$t,qt,Jt,Kt,Qt,Xt,Yt,Zt,eo,so,to,oo,ao,lo,no,io,co,ro,mo,ho,yo,Fo,So,bo,uo,To,Ao,xo,Uo,po,Lo,_o,Eo,No,fo,go,wo,ko,Co,Bo,Io,Mo,Vo,Ro,Po,vo){"use strict";const jo=({children:e,id:o})=>s.jsx(Fe.HiddenAccessible,{isHidden:!0,children:s.jsx(t.Label,{id:o,children:e})});function Ho({hasInsideLabel:e,isFormLayout:s,isFormReadonly:t,textAlign:o}){const a=[...Object.values(y.textInterpolations)],l=ue.mergeInterpolations(a),{class:n}=l({textAlign:o}),{classes:d}=be.useComponentTheme(Te.LabelledLinkRedwoodTheme,{formLayout:s?"isFormLayout":"notFormLayout",readonlyForm:t?"isReadonlyForm":"notReadonlyForm",insideLabel:e?"hasInsideLabel":"noInsideLabel"});return{classes:Se.classNames([n,d])}}e.LabelledLink=({"aria-describedby":e,children:l,columnSpan:n,href:d,label:i,labelEdge:r,labelStartWidth:h,onClick:y,target:S,textAlign:b,userAssistanceDensity:u})=>{const{isFormLayout:T,isReadonly:x,labelEdge:U,labelStartWidth:p,textAlign:L,userAssistanceDensity:_}=m.useFormContext(),E=r??U,N=h??p,f=b??L,g=u??_,w=l??d,{baseId:k,formFieldContext:C,labelProps:B,inputProps:I,userAssistanceProps:M}=ye.useTextField({ariaDescribedBy:e,isReadonly:!0,labelEdge:E,value:w}),V=s.jsx(t.Label,{...B,children:i}),R={label:"none"!==E?V:void 0,labelEdge:"none"!==E?E:void 0,labelStartWidth:"none"!==E?N:void 0},P="efficient"===g?s.jsx(G.InlineUserAssistance,{userAssistanceDensity:g,...M}):void 0,{classes:v}=Ho({hasInsideLabel:"inside"===E,isFormLayout:T,isFormReadonly:x,textAlign:f}),j=""===i,H="none"===E,{containerAria:O,hiddenLabelAria:W,linkAria:D}=function({"aria-describedby":e,baseId:s,hasEmptyLabel:t,hasHiddenLabel:o,labelId:a}){const l=`${s}--container`,n=a??`${s}--hidden-label`,{UNSAFE_ariaLabelledBy:d}=c.useAccessibleContext();return{containerAria:{id:l},hiddenLabelAria:o?{id:n}:{},linkAria:{"aria-describedby":e,"aria-labelledby":Se.classNames([n,t&&o&&d,l])}}}({"aria-describedby":I["aria-describedby"],baseId:k,hasEmptyLabel:j,hasHiddenLabel:H,labelId:B.id});return s.jsx(F.FormFieldContext.Provider,{value:C,children:s.jsx(A.ReadonlyTextField,{columnSpan:n,role:"presentation",inlineUserAssistance:P,...R,mainContent:s.jsxs("div",{class:v,...O,children:[H&&s.jsx(jo,{...W,children:i}),s.jsx(he.View,{width:"100%",children:s.jsx(o.Link,{href:d,target:S,onClick:y,...D,children:s.jsx(a.Text,{size:"md",variant:"inherit",children:w})})})]})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_LabelledLink.js.map