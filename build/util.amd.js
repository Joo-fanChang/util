define(["exports"],function(exports){"use strict";var uuid=function(){var t,e,n="";for(t=0;t<32;t++)e=16*Math.random()|0,8!==t&&12!==t&&16!==t&&20!==t||(n+="-"),n+=(12===t?4:16===t?3&e|8:e).toString(16);return n},formatTime=function formatTime(fm){var date=new Date,time={y:date.getFullYear(),M:date.getMonth()+1,d:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()};return fm.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v){return((v.length>1?"0":"")+eval("time."+v.slice(-1))).slice(-(v.length>2?v.length:2))})},query=function(t){return void 0===t&&(t=""),void 0===(e=t.split("?")[1])&&(e=""),n={},e.split("&").forEach(function(t){return(e=t.split("="))[0]&&(n[e[0]]=e[1]);var e}),n;var e,n},getQueryString=function(){var t=new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),e=window.location.search.substr(1).match(t);return e?decodeURIComponent(e[2]):""},changzhnUtil={uuid:uuid,formatTime:formatTime,query:query,getQueryString:getQueryString},changzhnUtil_1=changzhnUtil.uuid,changzhnUtil_2=changzhnUtil.formatTime,changzhnUtil_3=changzhnUtil.query,changzhnUtil_4=changzhnUtil.getQueryString;exports.default=changzhnUtil,exports.uuid=changzhnUtil_1,exports.formatTime=changzhnUtil_2,exports.query=changzhnUtil_3,exports.getQueryString=changzhnUtil_4,Object.defineProperty(exports,"__esModule",{value:!0})});
