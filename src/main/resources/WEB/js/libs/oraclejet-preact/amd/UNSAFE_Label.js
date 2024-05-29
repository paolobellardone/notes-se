define(['exports', './Label-16321133', 'preact/jsx-runtime', './FormFieldContext-57ac57ba', 'preact', './useFormFieldContext-cbd8677f', 'preact/hooks', './classNames-49c3ba27', './FormContext-598efe92', './useFormContext-9b29eeaf', './useComponentTheme-9a36e65b', './logger-36c6eea0', './TabbableModeContext-c9143afd', './TopLayerHost-d9bd8ecf', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39', './Flex-0052275f', './dimensions-094b9f7d', './size-6d3a087d', './utils-225c0e9a', './colorUtils-f1647b17', './_curry1-73b01864', './mergeInterpolations-497657fd', './_curry3-1e42149e', './_curry2-b8890f0a', './_isObject-8093a293', './boxalignment-a67cc263', './arrayUtils-bef2e8fb', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-c890dd1b', './flexbox-4b93b535', 'css!./flexbox.styles.css', './flexitem-8052fa2b', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'css!./MessageBannerVariants.styles.css', './Floating-aaafdcf7', './useFloating-e7375283', './useUser-6c8723b4', './positionUtils-5e82645b', './refUtils-64b1b5b1', './useOutsideClick-d7ba24e7', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-5df7b135', './UNSAFE_Floating/themes/FloatingContract.css', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles.css', 'css!./IconStyle.styles.css', './IconButton-edf452c8', './BaseButton-4a512058', './usePress-465090ef', './useHover-29c192f3', './useToggle-a59ec51a', './useActive-152990ee', './useTabbableMode-c39b463d', './useId-e0c3517c', './useColorScheme-33c4f510', './clientHints-5a067fae', './mergeProps-bae345c4', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './useTestId-dfceb92d', './ButtonLayout-071d379d', './Text-77df83fd', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './useTooltip-f1e6a531', './useTooltipControlled-4401c2d2', './Layer-ea9920e0', './useThemeInterpolations-eb2b5ee2', './useScale-f847e1c0', './theme-f0ff48ad', './Theme-748163ef', './useFocus-dab1b280', './useTouch-68d1a08f', './useAnimation-24256140', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', './EnvironmentProvider-fbf8d770', './LayerManager-b2837363', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-6913a734', './getLocale-6daccf20', './stringUtils-c9076bae', './Message.types-180b4242', './TransitionGroup-f4f056d2', './MessagesContext-ec60ba60', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './InputGroupContext-6c5f432c', './Popup-c6026a77', './tabbableUtils-a1aa6b01', './head-990e418e', './_arity-9286283c', './_isArray-f8c70222', './_isString-668b4c85', './FocusTrap-fdb3a0ed', './FocusTracker-8296f9cd', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-93466d5f', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './useAnimationStatus-37ce08c6', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', 'css!./PopupStyles.styles.css', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./SeparatorStyles.styles.css', './CompactLabelAssistance-c936e7a6', './useTranslationBundle-20ce0acf', './CompactHelpSource-824e6791', './Help-1dd33d8b', './Icon-6b14fc3e', './UNSAFE_Icon/themes/IconStyle.css', './useFocusWithin-dbdce73a', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./TextFieldVariants.styles.css'], (function(e,s,t,o,a,l,c,n,d,r,i,m,u,y,F,S,h,b,p,T,U,A,_,f,E,g,B,N,x,L,w,C,M,P,k,V,I,v,H,j,O,R,G,z,W,q,D,J,K,Q,X,Y,Z,$,ee,se,te,oe,ae,le,ce,ne,de,re,ie,me,ue,ye,Fe,Se,he,be,pe,Te,Ue,Ae,_e,fe,Ee,ge,Be,Ne,xe,Le,we,Ce,Me,Pe,ke,Ve,Ie,ve,He,je,Oe,Re,Ge,ze,We,qe,De,Je,Ke,Qe,Xe,Ye,Ze,$e,es,ss,ts,os,as,ls,cs,ns,ds,rs,is,ms,us,ys,Fs,Ss,hs,bs,ps,Ts,Us,As,_s,fs,Es,gs,Bs,Ns,xs,Ls,ws,Cs,Ms,Ps,ks,Vs,Is,vs,Hs,js,Os,Rs,Gs,zs,Ws,qs,Ds,Js,Ks,Qs,Xs,Ys){"use strict";e.Label=s.Label,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Label.js.map