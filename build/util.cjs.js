"use strict";function uuid(){var e,t,r="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(r+="-"),r+=(12===e?4:16===e?3&t|8:t).toString(16);return r}function formatTime(fm){var date=new Date,time={y:date.getFullYear(),M:date.getMonth()+1,d:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()};return fm.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v){return((v.length>1?"0":"")+eval("time."+v.slice(-1))).slice(-(v.length>2?v.length:2))})}function query(e){return void 0===e&&(e=""),void 0===(t=e.split("?")[1])&&(t=""),r={},t.split("&").forEach(function(e){return(t=e.split("="))[0]&&(r[t[0]]=t[1]);var t}),r;var t,r}function getQueryString(){var e=new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),t=window.location.search.substr(1).match(e);return t?decodeURIComponent(t[2]):""}var index={uuid:uuid,formatTime:formatTime,query:query,getQueryString:getQueryString};module.exports=index;