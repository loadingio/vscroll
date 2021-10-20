 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Math, h, idx, w) {
      ;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
var idx = 0;
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
var h = 0;
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
var w = 0;
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"content\" style=\"margin:auto;width:480px;height:400px;border:1px solid #ccc;box-shadow:0 3px 3px rgba(0,0,0,.2);border-radius:.25em;overflow:scroll;display:flex;flex-wrap:wrap;align-items:stretch;gap:3px;padding:3px\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2]
;(function(){
  var $$obj = [0,1,2];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var j = $$obj[pug_index1];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var k = $$obj[pug_index2];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var m = $$obj[pug_index3];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var m = $$obj[pug_index3];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var k = $$obj[pug_index2];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var m = $$obj[pug_index4];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var m = $$obj[pug_index4];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var j = $$obj[pug_index1];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var k = $$obj[pug_index5];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var m = $$obj[pug_index6];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var m = $$obj[pug_index6];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var k = $$obj[pug_index5];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var m = $$obj[pug_index7];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var m = $$obj[pug_index7];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var i = $$obj[pug_index0];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var j = $$obj[pug_index8];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var k = $$obj[pug_index9];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var m = $$obj[pug_index10];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var m = $$obj[pug_index10];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var k = $$obj[pug_index9];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var m = $$obj[pug_index11];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var m = $$obj[pug_index11];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var j = $$obj[pug_index8];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var k = $$obj[pug_index12];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var m = $$obj[pug_index13];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var m = $$obj[pug_index13];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var k = $$obj[pug_index12];
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var m = $$obj[pug_index14];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var m = $$obj[pug_index14];
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
idx = i * 343 + j * 49 + k * 7 + m;
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = (Math.random() * 3 + 1) * (Math.sin(idx / 10) + 2) * 20;
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = (40 + Math.random() * 40);
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
h = 50;
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 230;
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
w = 120;
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`min-height:${h}px;flex:1 0 auto;background:#69f;color:#fff;width:${w}px;display:flex;align-items:center;justify-content:center`), true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = idx) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fassets\u002Flib\u002Fportal\u002Fdev\u002Findex.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Findex.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "var root, rbox, nodes, boxes, total, bh, ph, range, ref$, row, count, y, i$, to$, i, delta, handler;\nroot = document.querySelector('#content');\nrbox = root.getBoundingClientRect();\nnodes = Array.from(root.childNodes);\nboxes = nodes.map(function(it){\n  var box;\n  box = it.getBoundingClientRect();\n  box.y = box.y - rbox.y;\n  return box;\n});\nnodes.map(function(it){\n  return it.parentNode.removeChild(it);\n});\ntotal = boxes.reduce(function(a, b){\n  return a + b.height;\n}, 0);\nbh = boxes[0].height + 3;\nph = [0, 1].map(function(){\n  return document.createElement('div');\n}).map(function(it){\n  return root.appendChild(it);\n});\nph[1].style.height = total + \"px\";\nph[0].style.width = \"100%\";\nph[1].style.width = \"100%\";\nrange = [0, 0];\nref$ = [30, 3], row = ref$[0], count = ref$[1];\nref$ = [boxes[0].y, 0], y = ref$[0], count = ref$[1];\nfor (i$ = 0, to$ = boxes.length; i$ \u003C to$; ++i$) {\n  i = i$;\n  if (boxes[i].y === y) {\n    count++;\n  } else {\n    break;\n  }\n}\nfor (i$ = 0, to$ = boxes.length; i$ \u003C to$; ++i$) {\n  i = i$;\n  if (boxes[i].y \u003E rbox.height * 2) {\n    row = Math.ceil(i \u002F count);\n    break;\n  }\n}\ndelta = row * count;\nhandler = function(){\n  var ref$, min, max, i$, step$, to$, i, j, ref1$, b1, b2;\n  ref$ = [boxes.length, -1], min = ref$[0], max = ref$[1];\n  for (i$ = 0, to$ = boxes.length, step$ = delta; step$ \u003C 0 ? i$ \u003E to$ : i$ \u003C to$; i$ += step$) {\n    i = i$;\n    j = (ref$ = i + delta - 1) \u003C (ref1$ = nodes.length - 1) ? ref$ : ref1$;\n    b1 = boxes[i];\n    b2 = boxes[j];\n    b1 = {\n      y: (i \u002F count) * bh,\n      height: bh\n    };\n    b2 = {\n      y: (j \u002F count) * bh,\n      height: bh\n    };\n    if (b1.y - root.scrollTop \u003C= 1.5 * rbox.height && b2.y + b2.height - root.scrollTop \u003E -0.5 * rbox.height) {\n      if (i \u003C min) {\n        min = i;\n      }\n      if (j \u003E max) {\n        max = j;\n      }\n    }\n  }\n  if (root.scrollTop \u003E root.scrollHeight \u002F 2 && min === boxes.length && max === -1) {\n    ref$ = [1000, 1028], min = ref$[0], max = ref$[1];\n  }\n  for (i$ = range[0]; i$ \u003C min; ++i$) {\n    i = i$;\n    if (nodes[i].parentNode) {\n      root.removeChild(nodes[i]);\n    }\n  }\n  for (i$ = range[0] - 1; i$ \u003E= min; --i$) {\n    i = i$;\n    if (!nodes[i].parentNode) {\n      root.insertBefore(nodes[i], ph[0].nextSibling);\n    }\n  }\n  for (i$ = range[1]; i$ \u003E max; --i$) {\n    i = i$;\n    if (nodes[i].parentNode) {\n      root.removeChild(nodes[i]);\n    }\n  }\n  for (i$ = range[1] + 1; i$ \u003C= max; ++i$) {\n    i = i$;\n    if (!nodes[i].parentNode) {\n      root.insertBefore(nodes[i], ph[1]);\n    }\n  }\n  range = [min, max];\n  ph[0].style.height = bh * ((ref$ = min \u002F count) \u003E 0 ? ref$ : 0) + \"px\";\n  return ph[1].style.height = bh * Math.floor((boxes.length - max - 1) \u002F count) + \"px\";\n};\nroot.addEventListener('scroll', handler);\nhandler();\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Math" in locals_for_with ?
        locals_for_with.Math :
        typeof Math !== 'undefined' ? Math : undefined, "h" in locals_for_with ?
        locals_for_with.h :
        typeof h !== 'undefined' ? h : undefined, "idx" in locals_for_with ?
        locals_for_with.idx :
        typeof idx !== 'undefined' ? idx : undefined, "w" in locals_for_with ?
        locals_for_with.w :
        typeof w !== 'undefined' ? w : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 