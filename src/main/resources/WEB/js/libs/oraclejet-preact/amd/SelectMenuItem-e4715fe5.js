define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useId-c9578d26', './Check-99925738', './MenuItem-87cd59b8', './SelectMenuGroupContext-67f24a8f'], (function(e,t,o,i,n,s,u){"use strict";e.SelectMenuItem=function({value:e,label:m,isDisabled:c,endIcon:l}){const{isMultiple:d,value:a,onCommit:r,groupKey:p}=o.useContext(u.SelectMenuGroupContext),C=i.useId(),x=o.useMemo((()=>`oj-menu-item-${C}`),[C]),{isSelected:I,memoizedOnCommit:M}=o.useMemo((()=>d?{isSelected:!!a?.includes(e),memoizedOnCommit:()=>{const t=I?a?.filter((t=>t!==e))||[]:[...a||[],e];r?.({value:t,previousValue:a})}}:{isSelected:a===e,memoizedOnCommit:()=>{r?.({value:e,previousValue:a})}}),[a,e,r,d]);return t.jsx(s.BaseMenuItem,{id:x,type:"select",role:d?"menuitemcheckbox":"menuitemradio",isChecked:I,isDisabled:c,startIcon:I?t.jsx(n.SvgCheck,{}):t.jsx("span",{}),label:m,onAction:M,endIcon:l,itemKey:`${p}-${e}`})}}));
//# sourceMappingURL=SelectMenuItem-e4715fe5.js.map
