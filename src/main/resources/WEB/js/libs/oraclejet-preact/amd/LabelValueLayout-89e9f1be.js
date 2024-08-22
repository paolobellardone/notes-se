define(['exports', 'preact/jsx-runtime', './classNames-08d99695', './Flex-db3ddadb', './FormContext-5130e198', './useFormContext-30acdd33', './FormFieldContext-3c44aaaa', './useFormFieldContext-8196183c', './size-4e81acac', 'css!./LabelValueLayoutStyles.styles.css', './useComponentTheme-5aa41a8f', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme'], (function(e,t,a,l,s,o,r,d,n,_,y,i,u,b,m,S){"use strict";var c="LabelValueLayoutStyles_labelInnerStyles_base__z3rxc55",h="LabelValueLayoutStyles_labelInnerStyles_start__z3rxc56",x="LabelValueLayoutStyles_labelInnerStyles_startNotPureReadonly__z3rxc57",L="LabelValueLayoutStyles_labelInnerStyles_startWithNoTopRadioSetUA__z3rxc58",T="LabelValueLayoutStyles_labelInnerStyles_insideRadioSet__z3rxc59",F="LabelValueLayoutStyles_labelInnerStyles_startWithNoTopCheckboxSetUA__z3rxc5a",p="LabelValueLayoutStyles_labelInnerStyles_insideCheckboxSet__z3rxc5b",C="LabelValueLayoutStyles_labelInnerStyles_noWrap__z3rxc5c",V="LabelValueLayoutStyles_labelSlotStyles_base__z3rxc50",z="LabelValueLayoutStyles_labelSlotStyles_start__z3rxc51",w="LabelValueLayoutStyles_labelSlotStyles_top__z3rxc52",R="LabelValueLayoutStyles_labelSlotStyles_topAndTopUA__z3rxc53",N="LabelValueLayoutStyles_labelSlotStyles_topPureReadonly__z3rxc54";e.LabelValueLayout=({label:e,labelEdge:s,children:r,labelStartWidth:_="33%",parentComponentVariant:A="textField",hasTopUserAssistance:I=!1})=>{const{baseTheme:U}=y.useComponentTheme(i.TextFieldRedwoodTheme),{baseTheme:W}=y.useComponentTheme(u.RadioRedwoodTheme),{baseTheme:k}=y.useComponentTheme(S.CheckboxRedwoodTheme),{baseTheme:E}=y.useComponentTheme(b.LabelRedwoodTheme),{baseTheme:f}=y.useComponentTheme(m.FormLayoutRedwoodTheme),j=A.startsWith("text"),v="radioSet"===A,g="checkboxSet"===A,B="start"===s,P="top"===s||"inside"===s,$="inside"===s,q=n.sizeToCSS(_),D=`calc(100% - ${q})`,G=B?{flexBasis:q,width:q,maxWidth:q}:{},H=B?{flexBasis:D,width:D,maxWidth:D}:{},{isFormLayout:J,isReadonly:K,labelWrapping:M}=o.useFormContext(),{isReadonly:O}=d.useFormFieldContext(),Q=J&&K||!J&&O,X=a.classNames([f,V,B&&z,P&&w,P&&I&&R,P&&Q&&N]),Y=a.classNames([j&&U,v&&W,g&&k,(v||g)&&E,f,c,B&&h,j&&B&&!Q&&x,v&&$&&T,g&&$&&p,v&&B&&!I&&L,g&&B&&!I&&F,"truncate"===M&&C]);return t.jsxs(l.Flex,{wrap:"wrap",align:O&&B?"stretch":"start",children:[t.jsx("div",{class:X,style:G,children:t.jsx("div",{class:Y,children:e})}),t.jsx("div",{class:"LabelValueLayoutStyles_valueSlotStyles__z3rxc5d",style:H,children:r})]})}}));
//# sourceMappingURL=LabelValueLayout-89e9f1be.js.map
