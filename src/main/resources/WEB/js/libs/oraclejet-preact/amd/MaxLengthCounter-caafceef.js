define(['exports', 'preact/jsx-runtime', 'preact/hooks', './classNames-08d99695', './usePress-a9ed1488', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', 'css!./MaxLengthCounterStyles.styles.css'], (function(s,e,n,t,a,r,l,c){"use strict";var o="MaxLengthCounterStyles_spanStyles__7dy9j72";const u=()=>{};s.MaxLengthCounter=function({maxLength:s,valueLength:r=0,onClick:c}){const{isFocused:d}=l.useFormFieldContext(),i=n.useCallback((s=>s.preventDefault()),[]),x=t.classNames([!d&&"MaxLengthCounterStyles_hide__7dy9j71"]),{pressProps:h}=a.usePress(c??u);return e.jsx("div",{class:"MaxLengthCounterStyles_maxLengthCounterBase__7dy9j70",onMouseDown:i,...h,children:e.jsxs("span",{class:x,children:[e.jsx("span",{class:o,children:r}),e.jsx("span",{class:o,children:"/"}),e.jsx("span",{class:o,children:s})]})})}}));
//# sourceMappingURL=MaxLengthCounter-caafceef.js.map
