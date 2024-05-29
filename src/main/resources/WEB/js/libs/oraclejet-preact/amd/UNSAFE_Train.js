define(['exports', 'preact/jsx-runtime', 'preact/hooks', 'preact', './useComponentTheme-9a36e65b', './useTestId-dfceb92d', './UNSAFE_Train/themes/redwood/TrainTheme', './usePress-465090ef', './useInteractionStyle-38f4bebf', './classNames-49c3ba27', './mergeProps-bae345c4', './SuccessS-584d6276', './ErrorS-905bce15', './InformationS-5581ccca', './WarningS-cf815827', './useActive-152990ee', './useTranslationBundle-20ce0acf', './HiddenAccessible-00402562', './logger-36c6eea0', './TopLayerHost-d9bd8ecf', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './UNSAFE_Train/themes/TrainStyles.css', 'css!./TrainStyles.styles.css', './UNSAFE_Train/themes/redwood/TrainBaseTheme.css', 'module', './UNSAFE_Train/themes/redwood/TrainVariants.css', 'css!./TrainVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-5dc16b39', './clientHints-5a067fae', './useHover-29c192f3', './useToggle-a59ec51a', './Icon-6b14fc3e', './size-6d3a087d', './utils-225c0e9a', './colorUtils-f1647b17', './_curry1-73b01864', './useTooltip-f1e6a531', './useTooltipControlled-4401c2d2', './useId-e0c3517c', './Floating-aaafdcf7', './useFloating-e7375283', './useUser-6c8723b4', './positionUtils-5e82645b', './refUtils-64b1b5b1', './useOutsideClick-d7ba24e7', './arrayUtils-bef2e8fb', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-5df7b135', './UNSAFE_Floating/themes/FloatingContract.css', './Layer-ea9920e0', './useThemeInterpolations-eb2b5ee2', './useColorScheme-33c4f510', './useScale-f847e1c0', './theme-f0ff48ad', './Theme-748163ef', './mergeInterpolations-497657fd', './_curry3-1e42149e', './_curry2-b8890f0a', './_isObject-8093a293', './useFocus-dab1b280', './useTouch-68d1a08f', './useAnimation-24256140', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'css!./TooltipContentStyles.styles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./TooltipContentVariants.styles.css', './EnvironmentProvider-fbf8d770', './LayerManager-b2837363', './UNSAFE_Icon/themes/IconStyle.css', 'css!./IconStyle.styles.css', 'css!./HiddenAccessibleStyles.styles.css'], (function(e,s,t,o,n,i,a,r,l,c,d,p,u,m,S,b,T,h,y,v,C,f,g,x,F,A,E,I,N,_,H,w,P,U,D,j,V,B,k,L,O,R,$,M,W,z,q,G,J,K,Q,X,Y,Z,ee,se,te,oe,ne,ie,ae,re,le,ce,de,pe,ue,me,Se,be,Te,he,ye,ve,Ce,fe,ge,xe,Fe,Ae,Ee){"use strict";const Ie=o.createContext(null);const Ne=({isConnected:e})=>{const{styles:t,variantClasses:o}=n.useComponentTheme(a.TrainRedwoodTheme,{connectorConnected:e?"isConnected":"notConnected"});return s.jsx("span",{class:c.classNames([t.connectorBaseStyle,o])})},_e={confirmation:p.SvgSuccessS,error:u.SvgErrorS,fatal:u.SvgErrorS,info:m.SvgInformationS,warning:S.SvgWarningS};function He({messageType:e,isDisabled:t=!1}){const o=_e[e],{styles:i,variantClasses:r}=n.useComponentTheme(a.TrainRedwoodTheme,{messageType:e,stepIconDisabled:t?"isDisabled":"notDisabled"});return s.jsx("div",{class:c.classNames([i.messageTypeIconBaseStyle,r]),role:"presentation",children:s.jsx(o,{})})}const we=({isDisabled:e,isVisited:o,messageType:i})=>{const{index:r,selectedStepIndex:p}=t.useContext(Ie),u=p===r,{interactionProps:m,applyPseudoHoverStyle:S,applyHoverStyle:T}=l.useInteractionStyle(e||u),{isActive:h,activeProps:y}=b.useActive({isDisabled:e||u});console.log("isActive",h);const v=d.mergeProps(m,y),{styles:C,variantClasses:f}=n.useComponentTheme(a.TrainRedwoodTheme,{stepIconDisabled:e?"isDisabled":"notDisabled",stepIconCurrent:u?"isCurrent":"notCurrent",stepIconVisited:o?"isVisited":"notVisited",stepIconNeedsEventsHover:T?"isNeedsEventsHover":"notNeedsEventsHover",stepIconPseudoHover:S?"isPseudoHover":"notPseudoHover",stepIconActive:h?"isActive":"notActive"});return s.jsx("span",{class:C.stepIconContainerStyle,children:i?s.jsx(He,{messageType:i,isDisabled:e}):s.jsx("span",{...v,class:c.classNames([C.stepIconBaseStyle,f]),children:r+1})})},Pe=({label:e,isDisabled:o,isVisited:i,messageType:r})=>{const{numberOfSteps:d,index:p,selectedStepIndex:u}=t.useContext(Ie),m=T.useTranslationBundle("@oracle/oraclejet-preact"),S=u===p,{interactionProps:b,applyPseudoHoverStyle:y,applyHoverStyle:v}=l.useInteractionStyle(o||S),C=S?m.train_current():i?m.train_visited():m.train_not_visited(),f=p+1,g=r?`${m.train_status({currentStep:f.toString(),numberOfSteps:d.toString()})}. ${C}, ${m.train_message_type()}: ${r}`:`${m.train_status({currentStep:f.toString(),numberOfSteps:d.toString()})}. ${C}`,{styles:x,variantClasses:F}=n.useComponentTheme(a.TrainRedwoodTheme,{stepLabelDisabled:o?"isDisabled":"notDisabled",stepLabelCurrent:S?"isCurrent":"notCurrent",stepLabelVisited:i?"isVisited":"notVisited",stepLabelNeedsEventsHover:v?"isNeedsEventsHover":"notNeedsEventsHover",stepLabelPseudoHover:y?"isPseudoHover":"notPseudoHover"});return s.jsx("span",{class:x.stepLabelWrapperStyle,children:s.jsxs("a",{...b,href:"#",class:c.classNames([x.stepLabelBaseStyle,F]),onClick:e=>{e.preventDefault()},children:[e,s.jsx(h.HiddenAccessible,{children:g})]})})};e.Step=({id:e,isDisabled:o,isVisited:i,messageType:p,label:u})=>{const{onSelect:m,numberOfSteps:S,selectedStepIndex:b,index:T}=t.useContext(Ie)||(()=>{throw new Error("Step component must be rendered within a Train component.")})(),h=b===T,[y,v]=t.useState(!1),{interactionProps:C,applyPseudoHoverStyle:f,applyHoverStyle:g}=l.useInteractionStyle(o||h),x=b>T,F=t.useCallback((s=>{o||h||m(s,e)}),[o,h,m,e]),{pressProps:A}=r.usePress(F,{}),E=T!==S-1,I=t.useCallback((()=>{v(!1)}),[]),N=t.useCallback((()=>{v(!0)}),[]),{styles:_,variantClasses:H}=n.useComponentTheme(a.TrainRedwoodTheme,{stepDisabled:o?"isDisabled":"notDisabled",needsEventsHover:g?"isNeedsEventsHover":"notNeedsEventsHover",pseudoHover:f?"isPseudoHover":"notPseudoHover",stepActive:y&&!h?"isActive":"notActive"}),w=d.mergeProps(A,C,{onMouseUp:I,onMouseDown:N});return s.jsxs("span",{class:_.stepContainerStyle,children:[E&&s.jsx(Ne,{isConnected:x}),s.jsxs("span",{...w,class:c.classNames([_.stepBaseStyle,H]),children:[s.jsx(we,{isVisited:i,isDisabled:o,messageType:p}),s.jsx(Pe,{label:u,isVisited:i,isDisabled:o,messageType:p})]})]})},e.Train=function({onSelect:e,selectedStep:r,children:l,testId:c}){const{classes:d,styles:p}=n.useComponentTheme(a.TrainRedwoodTheme),u=i.useTestId(c),m=l.findIndex((e=>e.props.id===r)),S={onSelect:t.useCallback(((s,t)=>{e?.({event:s,toStep:t})}),[e]),selectedStep:r,selectedStepIndex:m,numberOfSteps:l.length,index:0},b=o.toChildArray(l).filter(Boolean);return s.jsx("div",{class:d,...u,children:b.map(((e,t)=>s.jsx(Ie.Provider,{value:{...S,index:t},children:s.jsx("div",{class:p.baseListStyle,children:e})})))})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Train.js.map