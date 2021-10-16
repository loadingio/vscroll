 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Math) {
      ;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002Fassets\u002Flib\u002Fclusterize.js\u002Fmain\u002Fclusterize.css\"\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"scroll\" style=\"margin:auto;width:200px;height:400px;border:1px solid #ccc;box-shadow:0 3px 3px rgba(0,0,0,.2);border-radius:.25em;overflow:scroll\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"content\" style=\"display:flex;flex-wrap:wrap;align-items:start\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var j = $$obj[pug_index1];
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var k = $$obj[pug_index2];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var m = $$obj[pug_index3];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var m = $$obj[pug_index3];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var k = $$obj[pug_index2];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var m = $$obj[pug_index4];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var m = $$obj[pug_index4];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
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
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var k = $$obj[pug_index5];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var m = $$obj[pug_index6];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var m = $$obj[pug_index6];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var k = $$obj[pug_index5];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var m = $$obj[pug_index7];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var m = $$obj[pug_index7];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
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
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var j = $$obj[pug_index8];
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var k = $$obj[pug_index9];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var m = $$obj[pug_index10];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var m = $$obj[pug_index10];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var k = $$obj[pug_index9];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var m = $$obj[pug_index11];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var m = $$obj[pug_index11];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
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
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var k = $$obj[pug_index12];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var m = $$obj[pug_index13];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var m = $$obj[pug_index13];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var k = $$obj[pug_index12];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var m = $$obj[pug_index14];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var m = $$obj[pug_index14];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
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

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fassets\u002Flib\u002Fclusterize.js\u002Fmain\u002Fclusterize.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Findex.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fbacklog\u002Findex.pug";
pug_html = pug_html + "var scroll, content, children, ph1, ph2;\nscroll = document.querySelector('#scroll');\ncontent = document.querySelector('#content');\nchildren = Array.from(content.childNodes);\ncontent.innerHTML = '';\nph1 = document.createElement(\"div\");\nph2 = document.createElement(\"div\");\ncontent.appendChild(ph1);\ncontent.appendChild(ph2);\nph1.style.width = \"100%\";\nph2.style.width = \"100%\";\n(function(it){\n  return it.apply({});\n})(function(){\n  var i$, i, delta, this$ = this;\n  this.height = 0;\n  for (i$ = 0; i$ \u003C 100; ++i$) {\n    i = i$;\n    content.insertBefore(children[i], ph2);\n  }\n  this.range = [0, 99];\n  delta = 200;\n  this.refresh = function(){\n    var sbox, box1, box2, box3, box4, crange, min, ref$, i$, i, to$, max, ref1$, cbox, height;\n    sbox = scroll.getBoundingClientRect();\n    box1 = children[this.range[0]].getBoundingClientRect();\n    box2 = children[this.range[1]].getBoundingClientRect();\n    box3 = this.range[0] + (delta - 1) \u003C this.range[1] && children[this.range[0] + (delta - 1)] ? children[this.range[0] + (delta - 1)].getBoundingClientRect() : null;\n    box4 = this.range[1] - (delta - 1) \u003E= this.range[0] && children[this.range[1] - (delta - 1)] ? children[this.range[1] - (delta - 1)].getBoundingClientRect() : null;\n    crange = [this.range[0], this.range[1]];\n    if (box1.y \u003E= -sbox.height * 2) {\n      min = (ref$ = this.range[0] - delta) \u003E 0 ? ref$ : 0;\n      for (i$ = this.range[0] - 1; i$ \u003E= min; --i$) {\n        i = i$;\n        content.insertBefore(children[i], ph1.nextSibling);\n      }\n      this.range[0] = min;\n    } else if (box3 && box3.y \u003C -sbox.height * 2) {\n      for (i$ = this.range[0] + (delta - 1), to$ = this.range[0]; i$ \u003E= to$; --i$) {\n        i = i$;\n        content.removeChild(children[i]);\n      }\n      this.range[0] = this.range[0] + delta;\n    }\n    if (box2.y \u003C= sbox.height * 2) {\n      max = (ref$ = this.range[1] + delta + 1) \u003C (ref1$ = children.length) ? ref$ : ref1$;\n      for (i$ = this.range[1] + 1; i$ \u003C max; ++i$) {\n        i = i$;\n        content.insertBefore(children[i], ph2);\n      }\n      this.range[1] = max - 1;\n    } else if (box4 && box4.y \u003E sbox.height * 2) {\n      for (i$ = this.range[1] - (delta - 1), to$ = this.range[1]; i$ \u003C to$; ++i$) {\n        i = i$;\n        content.removeChild(children[i]);\n      }\n      this.range[1] = this.range[1] - delta;\n    }\n    if (crange[0] !== this.range[0] || crange[1] !== this.range[1]) {\n      cbox = content.getBoundingClientRect();\n      height = (cbox.height - (this.hh1 || 0) - (this.hh2 || 0)) * children.length \u002F (this.range[1] - this.range[0]);\n      this.hh1 = height * (this.range[0] \u002F children.length);\n      this.hh2 = height * ((children.length - this.range[1] - 1) \u002F children.length);\n      ph1.style.height = this.hh1 + \"px\";\n      return ph2.style.height = this.hh2 + \"px\";\n    }\n  };\n  return scroll.addEventListener('scroll', function(){\n    return this$.refresh();\n  });\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Math" in locals_for_with ?
        locals_for_with.Math :
        typeof Math !== 'undefined' ? Math : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 