define(['exports', './dayUtils-a902fbf8', './getFormatParse-b7ff0219', './logger-0f873e29'], (function(t,e,r,a){"use strict";t.getDaysScale=(t={target:"minorAxis"})=>{const{target:e,formatter:a,labelPosition:o}=t;return{formatter:a||r.getFormatParse({locale:navigator.language,month:"numeric",day:"2-digit"}).format,labelPosition:o||("majorAxis"===e?"center":"start"),getPreviousDate:t=>{const e=new Date(t);return e.setHours(0,0,0,0),e.toISOString()},getNextDate:t=>{const e=new Date(t);return e.setDate(e.getDate()+1),e.toISOString()}}},t.getHoursScale=(t={target:"minorAxis"})=>{const{formatter:e,labelPosition:a}=t;return{formatter:e||r.getFormatParse({locale:navigator.language,hour:"numeric"}).format,labelPosition:a||"start",getPreviousDate:t=>{const e=new Date(t);return e.setMinutes(0,0,0),e.toISOString()},getNextDate:t=>{const e=Date.parse(t);return new Date(e+36e5).toISOString()}}},t.getMinutesScale=(t={target:"minorAxis"})=>{const{formatter:e,labelPosition:a}=t;return{formatter:e||r.getFormatParse({locale:navigator.language,hour:"numeric",minute:"2-digit"}).format,labelPosition:a||"start",getPreviousDate:t=>{const e=new Date(t);return e.setSeconds(0,0),e.toISOString()},getNextDate:t=>{const e=Date.parse(t);return new Date(e+6e4).toISOString()}}},t.getMonthsScale=(t={target:"minorAxis"})=>{const{formatter:e,labelPosition:a}=t;return{formatter:e||r.getFormatParse({locale:navigator.language,month:"long"}).format,labelPosition:a||"start",getPreviousDate:t=>{const e=new Date(t);return e.setDate(1),e.setHours(0,0,0,0),e.toISOString()},getNextDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()+1),e.toISOString()}}},t.getQuartersScale=(t={target:"minorAxis"})=>{const{formatter:e,labelPosition:a}=t;return{formatter:e||r.getFormatParse({locale:navigator.language,month:"long"}).format,labelPosition:a||"start",getPreviousDate:t=>{const e=new Date(t),r=Math.floor(e.getMonth()/3);return e.setDate(1),e.setHours(0,0,0,0),e.setMonth(3*r),e.toISOString()},getNextDate:t=>{const e=new Date(t);return e.setMonth(e.getMonth()+3),e.toISOString()}}},t.getSecondsScale=(t={target:"minorAxis"})=>{const{formatter:e,labelPosition:a}=t;return{formatter:e||r.getFormatParse({locale:navigator.language,hour:"numeric",minute:"2-digit",second:"2-digit"}).format,labelPosition:a||"start",getPreviousDate:t=>{const e=new Date(t);return e.setMilliseconds(0),e.toISOString()},getNextDate:t=>{const e=Date.parse(t);return new Date(e+1e3).toISOString()}}},t.getWeeksScale=(t={target:"minorAxis"})=>{const{formatter:a,labelPosition:o}=t;return{formatter:a||r.getFormatParse({locale:navigator.language,month:"numeric",day:"2-digit"}).format,labelPosition:o||"start",getPreviousDate:t=>{const r=new Date(t),a=(r.getDay()-e.getWeekStart(navigator.language)+7)%7;return r.setHours(0,0,0,0),a>0&&r.setDate(r.getDate()-a),r.toISOString()},getNextDate:t=>{const e=new Date(t);return e.setDate(e.getDate()+7),e.toISOString()}}},t.getYearsScale=(t={target:"minorAxis"})=>{const{formatter:e,labelPosition:a}=t;return{formatter:e||r.getFormatParse({locale:navigator.language,year:"numeric"}).format,labelPosition:a||"start",getPreviousDate:t=>{const e=new Date(t);return e.setMonth(0),e.setDate(1),e.setHours(0,0,0,0),e.toISOString()},getNextDate:t=>{const e=new Date(t);return e.setFullYear(e.getFullYear()+1),e.toISOString()}}}}));
//# sourceMappingURL=scales-d066c9c5.js.map
