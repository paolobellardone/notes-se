define(['exports', 'preact/jsx-runtime', 'preact/compat', './Check-ce39a751', './CheckboxOff-6b66498d', './CheckboxOn-49af25e9', './CheckboxMixed-e8fe65bc', './HiddenAccessible-00402562', './useComponentTheme-9a36e65b', './UNSAFE_Checkbox/themes/CheckboxIconContract.css', './UNSAFE_Checkbox/themes/redwood/CheckboxIconTheme', './TabbableModeContext-c9143afd', './useTabbableMode-c39b463d'], (function(e,c,o,a,n,i,d,s,b,l,r,h,t){"use strict";const x=o.forwardRef((({onClick:e,isActive:o,isFocusRingShown:h,isDisabled:x,isReadonly:k,isRequired:C,isChecked:u="unchecked",id:m,name:f,value:y,onKeyUp:p,onKeyDown:v,onChange:S,onFocus:g,onBlur:F,"aria-label":T,"aria-labelledby":A,"aria-describedby":R},j=null)=>{const{isTabbable:w}=t.useTabbableMode(),D="partial"===u,I="checked"===u||D,M=!!I&&(!D||"mixed"),{classes:O}=b.useComponentTheme(r.CheckboxIconRedwoodTheme,{disabled:x?"isDisabled":"notDisabled",checked:I?"isChecked":"notChecked",readonly:k?"isReadonly":"notReadonly",active:o?"isActive":"notActive",focus:h?"isFocused":"notFocused",iconSize:"4xUnits"}),U=k?I?a.SvgCheck:n.SvgCheckboxOff:I?D?d.SvgCheckboxMixed:i.SvgCheckboxOn:n.SvgCheckboxOff;return c.jsxs(c.Fragment,{children:[c.jsx(s.HiddenAccessible,{children:c.jsx("input",{...k?{"aria-readonly":!0}:{},"aria-checked":M,"aria-label":T,"aria-labelledby":A,"aria-describedby":R,"aria-required":C,ref:j,name:f,value:y,onKeyUp:p,onKeyDown:v,onBlur:F,onChange:S,onFocus:g,id:m,type:"checkbox",disabled:x,checked:I,tabIndex:w?0:-1})}),c.jsx("span",{className:O,"aria-hidden":"true",onClick:e,role:"img",children:c.jsx(U,{size:l.checkboxIconVars.iconSize,color:"currentColor"})})]})}));e.StyledCheckbox=x}));
//# sourceMappingURL=StyledCheckbox-acf8ef54.js.map