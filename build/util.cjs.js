"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var uuid=function(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n},formatTime=function formatTime(fm){var date=new Date,time={y:date.getFullYear(),M:date.getMonth()+1,d:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()};return fm.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v){return((v.length>1?"0":"")+eval("time."+v.slice(-1))).slice(-(v.length>2?v.length:2))})},getQueryString=function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return n?decodeURIComponent(n[2]):""},getDataType=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},deepclone=function e(t){switch(getDataType(t)){case"number":case"string":case"boolean":case"null":case"undefined":case"function":return t;case"object":var n={};for(var r in t)if(t.hasOwnProperty(r)){var a=t[r];n[r]=e(a)}return n;case"array":var i=[];return t.forEach(function(t){return i.push(e(t))}),i}},deepclone_1=deepclone,changzhnUtil={uuid:uuid,formatTime:formatTime,getQueryString:getQueryString,deepclone:deepclone_1},changzhnUtil_1=changzhnUtil.uuid,changzhnUtil_2=changzhnUtil.formatTime,changzhnUtil_3=changzhnUtil.getQueryString,changzhnUtil_4=changzhnUtil.deepclone;exports.default=changzhnUtil,exports.uuid=changzhnUtil_1,exports.formatTime=changzhnUtil_2,exports.getQueryString=changzhnUtil_3,exports.deepclone=changzhnUtil_4;
