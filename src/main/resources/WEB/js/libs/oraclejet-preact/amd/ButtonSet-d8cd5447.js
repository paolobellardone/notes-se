define(['exports', 'preact/jsx-runtime', 'preact/compat', './dimensions-89f18413', './mergeInterpolations-9ede4cf7', './classNames-08d99695', './UNSAFE_ButtonSet/themes/ButtonSetStyles.css', './useButtonSetContext-dffdaea3', 'preact', './ButtonSetPositionContext-fd98cc11', 'preact/hooks', './toggleButtonUtils-e01582ef', './useTestId-f3b8b319', './useRovingTabIndexContainer-079ed64f', './TabbableModeContext-a9c97640', './useTabbableMode-dc440317', './refUtils-d354a169'], (function(e,t,s,a,o,n,i,l,r,d,b,c,u,f,x,h,m){"use strict";function p({children:e}){const s=r.toChildArray(e);return t.jsx(r.Fragment,{children:s.map(((e,a)=>r.isValidElement(e)?t.jsx(d.ButtonSetPositionContext.Provider,{value:{position:c.indexToPosition(a,s.length)},children:e}):null))})}p.displayName="ButtonSetItems";const T=[...Object.values(a.dimensionInterpolations)],g=o.mergeInterpolations(T),y=s.forwardRef((({children:e,testId:s,"aria-label":a,"aria-labelledby":o,"aria-controls":r,"aria-describedby":d,width:c},T)=>{const{layoutWidth:y}=l.useButtonSetContext(),C=u.useTestId(s),{isTabbable:I}=h.useTabbableMode(),{isRoving:v}=b.useContext(x.TabbableModeContext),{focusedId:S,rovingTabIndexContainerProps:{ref:B,...j}}=f.useRovingTabIndexContainer(!I),{class:P,...R}=g({width:c}),M=n.classNames([i.styles.base,P,"equal"===y?i.styles.fullWidth:void 0]);return t.jsx("span",{role:"toolbar",class:M,style:R,ref:v?T:m.mergeRefs(T,B),"aria-label":a,"aria-labelledby":o,"aria-describedby":d,"aria-controls":r,...C,...j,children:v?t.jsx(p,{children:e}):t.jsx(x.TabbableModeContext.Provider,{value:{isTabbable:I,isRoving:!0,focusedId:S},children:t.jsx(p,{children:e})})})}));y.displayName="ButtonSet",e.ButtonSet=y}));
//# sourceMappingURL=ButtonSet-d8cd5447.js.map