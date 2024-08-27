/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojlogger","ojs/ojthemeutils","@oracle/oraclejet-preact/UNSAFE_IntlDateTime"],function(e,t,r,s){"use strict";let o={};const n=()=>(i(),o),a=e=>{const r=e.timeStyle?.short?.pattern,s=e.dateStyle?.short?.pattern;return r&&!s||s&&!r?(t.error("timeStyle.short.pattern and dateStyle.short.pattern must be set together."),!1):!l(e)||(t.error("setDateTimePreferences options must not be empty."),!1)},i=()=>{Object.isFrozen(o)||(l(o.dateStyle)&&l(o.timeStyle)&&(o.dateStyle=c()),Object.freeze(o))},c=()=>{const e=r.parseJSONFromFontFamily("oj-inputdatetime-option-defaults")||{};let t;return t="numeric"===e.converterYear||"2-digit"===e.converterYear?e.converterYear:"numeric",{short:{year:t}}},l=e=>!e||0===Object.keys(e).length;let y={};const m=()=>y,d=e=>{const r=e.style?.currency,s=e.style?.decimal;let o=!0;return r&&!u(r.separators)&&(t.error("style.currency.separators group and decimal must be set together."),o=!1),s&&!u(s.separators)&&(t.error("style.decimal.separators group and decimal must be set together."),o=!1),(p(e)||p(r)&&p(s))&&(t.error("setNumberPreferences options must not be empty."),o=!1),o},u=e=>!!e&&!(!e.decimal||!e.group),p=e=>!e||0===Object.keys(e).length,h=(e,t)=>{let r={};const s={separators:e};return Object.assign(r,s,t),r},b=e=>!e||0===Object.keys(e).length,g=(e,t)=>{const r=!t||0===Object.keys(t).length,s=t&&t.timeZone&&1===Object.keys(t).length;if(r||s)return S(e);if(!("short"===t.dateStyle&&void 0===t.timeStyle||"short"===t.timeStyle&&void 0===t.dateStyle||"short"===t.dateStyle&&"short"===t.timeStyle))return;let o,n;"short"===t.dateStyle&&e.dateStyle?.short?.pattern&&(o=f(e.dateStyle)),"short"===t.timeStyle&&(n=f(e.timeStyle));const a=j(o,n);return a?{pattern:a}:void 0},S=e=>{const t=f(e.dateStyle);return t?{pattern:t}:void 0},f=e=>e?.short?.pattern,j=(e,t)=>e&&t?`${e} ${t}`:t||e||void 0;e.formatWithYearFormat=(e,t,r)=>s.formatWithYearFormat(e,t,r),e.getDateTimePreferences=n,e.getMergedDateTimePreferencesWithOptions=e=>{const t=n();if(!t||0===Object.keys(t).length)return e;const r=g(t,e),s=t?.dateStyle?.short?.year,o=void 0===r&&s?{dateStyleShortYear:s}:void 0,a=t.timeZone,i=a?{timeZone:a}:{};let c={};return Object.assign(c,r??o,i,e),c},e.getMergedNumberPreferencesWithOptions=e=>{const t=m();if(!t||0===Object.keys(t).length)return e;if(!b(e?.separators))return e;const r=t.style?.currency?.separators,s=t.style?.decimal?.separators,o=!b(r),n=!b(s);return o||n?void 0!==e?.style&&"decimal"!==e.style||!n?"currency"===e?.style&&o?h(r,e):e:h(s,e):e},e.getNumberPreferences=m,e.setDateTimePreferences=e=>{Object.isFrozen(o)||a(e)&&(o=e,i())},e.setNumberPreferences=e=>{Object.isFrozen(y)||d(e)&&(y=e,Object.freeze(y))},Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojconverter-preferences.js.map