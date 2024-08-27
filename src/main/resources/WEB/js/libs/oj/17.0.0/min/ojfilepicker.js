/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","preact/jsx-runtime","ojs/ojcore-base","ojs/ojdomutils","ojs/ojvcomponent","preact","ojs/ojtranslation","ojs/ojfilepickerutils","ojs/ojfocusutils","jqueryui-amd/tabbable"],function(e,t,i,r,s,n,l,o,a,c){"use strict";i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i,a=a&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a;var d=function(e,t,i,r){var s,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(n<3?s(l):n>3?s(t,i,l):s(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};e.FilePicker=class extends n.Component{constructor(e){super(e),this.rootRef=n.createRef(),this._handleSelectingFiles=e=>{if("click"===e.type||"keypress"===e.type&&"Enter"===e.code){this.selecting=!0,e.preventDefault();const t=this.props;return o.pickFiles(this._handleFileSelected,{accept:t.accept,selectionMode:t.selectionMode,capture:t.capture??"none"}),!0}return!1},this._handleFileSelected=e=>{this._fileSelectedHelper(e)},this._handleDragEnter=e=>{e.preventDefault(),e.stopPropagation()},this._handleDragOver=e=>{e.preventDefault(),e.stopPropagation();const t=e.dataTransfer;if(this.inDropZone)return;const r=i.AgentUtils.getAgentInfo();if(this.inDropZone=!0,this.isDroppable=!0,r.browser!==i.AgentUtils.BROWSER.SAFARI&&r.browser!==i.AgentUtils.BROWSER.IE){const i=t.items;let r=[];const s=this._validateSelectionMode(i),n=this._validateTypes(i);s&&0===n.rejected.length?this.setState({validity:"valid"}):(this.isDroppable=!1,s?r=this._getMimeTypeValidationMessages(n.rejected):r.push({severity:"error",summary:l.getTranslatedString("oj-ojFilePicker.singleFileUploadError")}),this._fireInvalidSelectAction(r,e,!0))}else this.setState({validity:"valid"})},this._handleDragLeave=(e,t=!1)=>{this.inDropZone&&(e.preventDefault(),e.stopPropagation(),this.rootRef.current.contains(e.relatedTarget)||(this.inDropZone=!1,this.setState({validity:"NA"}),this.isDroppable||t||(this.dragPromiseResolver(),this.dragPromiseResolver=null)))},this._handleFileDrop=e=>{if(this.inDropZone){e.preventDefault(),e.stopPropagation();const t=this._createFileList(e.dataTransfer.files);let i=!1;if(this.isDroppable){let r=[];if(this._validateSelectionMode(t)){const e=this._validateTypes(t);e.rejected.length>0&&(r=this._getMimeTypeValidationMessages(e.rejected),i=!0)}else r.push({severity:"error",summary:l.getTranslatedString("oj-ojFilePicker.singleFileUploadError")});r.length>0&&(this.isDroppable=!1,this._fireInvalidSelectAction(r,e,!1)),this.isDroppable&&this._handleFilesAdded(t,e)}this._handleDragLeave(e,i)}},this._handleFocusIn=e=>{e.target===e.currentTarget&&this._handleFocus(e),this.selecting||this.setState({focus:!r.recentPointer()})},this._handleFocusOut=e=>{e.target===e.currentTarget&&this._handleBlur(e),this.selecting||this.setState({focus:!1})},this._handleFocus=e=>{this.rootRef.current?.dispatchEvent(new FocusEvent("focus",{relatedTarget:e.relatedTarget}))},this._handleBlur=e=>{this.rootRef.current?.dispatchEvent(new FocusEvent("blur",{relatedTarget:e.relatedTarget}))},this.state={focus:!1,validity:"NA"}}_fileSelectedHelper(e){if(e.length>0){const t=this._validateTypes(e).rejected;t.length>0?this._fireInvalidSelectAction(this._getMimeTypeValidationMessages(t),null,!1):this._handleFilesAdded(e,null)}this.selecting=!1}focus(){a.focusFirstTabStop(this.rootRef.current)}blur(){const e=document.activeElement;this.rootRef.current.contains(e)&&e.blur()}render(e){const t=e.trigger;if(e.disabled)return this._renderDisabled(e,t);const i="drop"!==e.selectOn?this._handleSelectingFiles:void 0;return t?this._renderWithCustomTrigger(e,t,i):this._renderWithDefaultTrigger(e,i)}_renderDisabled(e,i){const r=i?"oj-filepicker":"oj-filepicker oj-filepicker-no-trigger";return t.jsx(s.Root,{class:r,children:t.jsx("div",{class:"oj-filepicker-disabled oj-filepicker-container",children:i||this._renderDefaultTriggerContent(e)})})}_renderWithCustomTrigger(e,i,r){const n=this._getDndHandlers(e);return t.jsx(s.Root,{class:`oj-filepicker ${this._getFocusClass()}`,ref:this.rootRef,onfocusin:this._handleFocusIn,onfocusout:this._handleFocusOut,children:t.jsx("div",{onClick:r,onKeyPress:this._handleSelectingFiles,onDragEnter:n.handleDragEnter,onDragOver:n.handleDragOver,onDragLeave:n.handleDragLeave,onDragEnd:n.handleDragLeave,onDrop:n.handleFileDrop,class:"oj-filepicker-container","aria-label":this._getAriaLabel(e,r),role:this._getRole(e,r),children:i})})}_renderWithDefaultTrigger(e,i){const r=this.state.validity,n="valid"===r?"oj-valid-drop":"invalid"===r?"oj-invalid-drop":"",l=this._getDndHandlers(e);return t.jsx(s.Root,{class:`oj-filepicker oj-filepicker-no-trigger ${this._getFocusClass()}`,onfocusin:this._handleFocusIn,onfocusout:this._handleFocusOut,ref:this.rootRef,children:t.jsx("div",{onClick:i,onKeyPress:this._handleSelectingFiles,class:"oj-filepicker-container",tabIndex:0,"aria-label":this._getAriaLabel(e,i),role:this._getRole(e,i),children:t.jsx("div",{class:`oj-filepicker-dropzone ${n}`,onDragEnter:l.handleDragEnter,onDragOver:l.handleDragOver,onDragLeave:l.handleDragLeave,onDragEnd:l.handleDragLeave,onDrop:l.handleFileDrop,children:this._renderDefaultTriggerContent(e)})})})}_renderDefaultTriggerContent(e){return[t.jsx("div",{class:"oj-filepicker-text",children:this._getPrimaryText(e)}),t.jsx("div",{class:"oj-filepicker-secondary-text",children:this._getSecondaryText(e)})]}_getRole(e,t){const i=t?"button":void 0;return e.role?e.role:i}_getAriaLabel(e,t){const i=t?e.trigger?"Add Files.":`Add Files. ${this._getPrimaryText(e)}. ${this._getSecondaryText(e)}`:void 0;return e["aria-label"]?e["aria-label"]:i}_getPrimaryText(e){const t=e.primaryText;let i;if(t)if("string"==typeof t)i=t;else{i=t()}else i=l.getTranslatedString("oj-ojFilePicker.dropzonePrimaryText");return i}_getSecondaryText(e){const t="single"===e.selectionMode,i=e.secondaryText;let r;if(i)if("string"==typeof i)r=i;else{r=i({selectionMode:e.selectionMode})}else r=l.getTranslatedString(t?"oj-ojFilePicker.secondaryDropzoneText":"oj-ojFilePicker.secondaryDropzoneTextMultiple");return r}_getDndHandlers(e){return"click"!==e.selectOn?{handleDragEnter:this._handleDragEnter,handleDragOver:this._handleDragOver,handleDragLeave:this._handleDragLeave,handleFileDrop:this._handleFileDrop}:{}}_getFocusClass(){return this.state.focus?"oj-focus-highlight":""}_validateSelectionMode(e){return"single"!==this.props.selectionMode||1===e.length}_validateTypes(e){const t=[],i=[];let r,s;if(e)for(let n=0;n<e.length;n++){r=e[n];const o=r.name;if(s=l.getTranslatedString("oj-ojFilePicker.unknownFileType"),o){let e=o.split(".");s=e.length>1?"."+e.pop():s}s=r.type?r.type:s,-1===t.indexOf(s)&&-1===i.indexOf(s)&&(this._acceptFile(r)?t.push(s):i.push(s))}return{accepted:t,rejected:i}}_getMimeTypeValidationMessages(e){const t=[];return 1===e.length?t.push({severity:"error",summary:l.getTranslatedString("oj-ojFilePicker.singleFileTypeUploadError",{fileType:e[0]})}):t.push({severity:"error",summary:l.getTranslatedString("oj-ojFilePicker.multipleFileTypeUploadError",{fileTypes:e.join(l.getTranslatedString("oj-converter.plural-separator"))})}),t}_acceptFile(e){const t=this.props.accept;if(!t||0===t.length||!e)return!0;let r;for(let s=0;s<t.length;s++){if(r=i.StringUtils.trim(t[s]),!r)return!0;if(r.startsWith(".",0)){if(!e.name||e.name&&e.name.toLowerCase().endsWith(r.toLowerCase()))return!0}else{if(!e.type)return!1;if("image/*"===r){if(e.type.startsWith("image/",0))return!0}else if("video/*"===r){if(e.type.startsWith("video/",0))return!0}else if("audio/*"===r){if(e.type.startsWith("audio/",0))return!0}else if(e.type===r)return!0}}return!1}_handleFilesAdded(e,t){const i=this._createFileList(e);this.props.onOjBeforeSelect?.({files:i,originalEvent:t}).then(()=>{this.props.onOjSelect?.({files:i,originalEvent:t}),this.elementPromiseResolver&&(this.elementPromiseResolver(),this.elementPromiseResolver=null)},e=>{this._fireInvalidSelectAction(e,t,!1)})}_fireInvalidSelectAction(e,t,i){i&&this.setState({validity:"invalid"});const r=i?new Promise(e=>{this.dragPromiseResolver=e}):null;this.props.onOjInvalidSelect?.({messages:e,originalEvent:t,until:r}),this.elementPromiseResolver&&(this.elementPromiseResolver(),this.elementPromiseResolver=null)}_createFileList(e){const t={length:{value:e.length},item:{value(e){return this[e]}}};for(let i=0;i<e.length;i++)t[i]={value:e[i],enumerable:!0};return Object.create(FileList.prototype,t)}},e.FilePicker.defaultProps={accept:null,capture:"none",disabled:!1,selectOn:"auto",selectionMode:"multiple"},e.FilePicker._metadata={properties:{accept:{type:"Array<string>"},capture:{type:"string",enumValues:["none","environment","user","implementation"]},disabled:{type:"boolean"},primaryText:{type:"string|function"},secondaryText:{type:"string|function"},selectOn:{type:"string",enumValues:["auto","click","drop","clickAndDrop"]},selectionMode:{type:"string",enumValues:["multiple","single"]}},slots:{trigger:{}},events:{ojBeforeSelect:{cancelable:!0},ojInvalidSelect:{},ojSelect:{}},extension:{_OBSERVED_GLOBAL_PROPS:["aria-label","role"]},methods:{focus:{},blur:{}}},e.FilePicker=d([s.customElement("oj-file-picker")],e.FilePicker),Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojfilepicker.js.map