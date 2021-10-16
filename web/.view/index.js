 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Math) {
      ;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"\u002Fassets\u002Flib\u002Fclusterize.js\u002Fmain\u002Fclusterize.css\"\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"content\" style=\"margin:auto;width:200px;height:400px;border:1px solid #ccc;box-shadow:0 3px 3px rgba(0,0,0,.2);border-radius:.25em;overflow:scroll;display:flex;flex-wrap:wrap;align-items:start\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var j = $$obj[pug_index1];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var k = $$obj[pug_index2];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var m = $$obj[pug_index3];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var m = $$obj[pug_index3];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var m = $$obj[pug_index4];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var m = $$obj[pug_index4];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var k = $$obj[pug_index5];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var m = $$obj[pug_index6];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var m = $$obj[pug_index6];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var m = $$obj[pug_index7];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var m = $$obj[pug_index7];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var j = $$obj[pug_index8];
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var k = $$obj[pug_index9];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var m = $$obj[pug_index10];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var m = $$obj[pug_index10];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var m = $$obj[pug_index11];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var m = $$obj[pug_index11];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var k = $$obj[pug_index12];
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var m = $$obj[pug_index13];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var m = $$obj[pug_index13];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
// iterate [0,1,2,3,4,5,6]
;(function(){
  var $$obj = [0,1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var m = $$obj[pug_index14];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i * 343 + j * 49 + k * 7 + m) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var m = $$obj[pug_index14];
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("style", pug_style(`height:${Math.random() * 50 + 20}px;flex:1 0 auto;margin:5px;background:#9bf;color:#fff;width:${40 + Math.random() * 40}px;text-align:center`), true, true)) + "\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
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

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fassets\u002Flib\u002Fportal\u002Fdev\u002Findex.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript src=\"\u002Fassets\u002Flib\u002Fldview\u002Fmain\u002Findex.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u002F*\nportal = (opt={}) -\u003E\n  @root = if typeof(opt.root) == \\string =\u003E document.querySelector(opt.root) else opt.root\n  @nodes = opt.nodes or Array.from(@root.childNodes)\n  for i from @nodes.length - 1 to 0 by -1 =\u003E if @nodes[i].parentNode =\u003E @nodes[i].parentNode.removeChild @nodes[i]\n  @delta = opt.delta or 200\n  @placeholder = ph = \n    start: document.createElement(\"div\")\n    end: document.createElement(\"div\")\n  @phh = start: 0, end: 0\n  @root.appendChild ph.start\n  @root.appendChild ph.end\n  ph.start.style.width = ph.end.style.width = \"100%\"\n  @range = [0, Math.min(@delta - 1, @nodes.length)]\n  for i from @range.0 to @range.1 =\u003E @root.insertBefore @nodes[i], ph.end\n  @root.addEventListener \\scroll, ~\u003E @refresh!\n  @\n\nportal.prototype = Object.create(Object.prototype) \u003C\u003C\u003C do\n  refresh: -\u003E\n    [root, delta, nodes, range] = [@root, @delta, @nodes, @range]\n    [ph1, ph2] = [@placeholder.start, @placeholder.end]\n    sbox = root.getBoundingClientRect!\n    box1 = nodes[range.0].getBoundingClientRect!\n    box2 = nodes[range.1].getBoundingClientRect!\n    box3 = if range.0 + (delta - 1) \u003C range.1 and nodes[range.0 + (delta - 1)] =\u003E\n      nodes[range.0 + (delta - 1)].getBoundingClientRect!\n    else null\n    box4 = if range.1 - (delta - 1) \u003E= range.0 and nodes[range.1 - (delta - 1)] =\u003E\n      nodes[range.1 - (delta - 1)].getBoundingClientRect!\n    else null\n    crange = [range.0, range.1]\n    if box1.y \u003E= -sbox.height * 2 =\u003E\n      min = range.0 - delta \u003E? 0\n      for i from range.0 - 1 to min by -1 =\u003E root.insertBefore nodes[i], ph1.nextSibling\n      range.0 = min\n    else if box3 and box3.y \u003C -sbox.height * 2 =\u003E\n      for i from range.0 + (delta - 1) to range.0 by -1 =\u003E root.removeChild nodes[i]\n      range.0 = range.0 + delta\n    if box2.y \u003C= sbox.height * 2 =\u003E\n      max = range.1 + delta + 1 \u003C? nodes.length\n      for i from range.1 + 1 til max =\u003E root.insertBefore nodes[i], ph2\n      range.1 = max - 1\n    else if box4 and box4.y \u003E sbox.height * 2 =\u003E\n      for i from range.1 - (delta - 1) til range.1 =\u003E root.removeChild nodes[i]\n      range.1 = range.1 - delta\n    if !@phh.end or crange.0 != range.0 or crange.1 != range.1 =\u003E\n      ch = root.scrollHeight\n      [hh1,hh2] = [@phh.start, @phh.end]\n      height = (ch - (hh1 or 0) - (hh2 or 0)) * nodes.length \u002F (range.1 - range.0)\n      @phh.start = hh1 = height * (range.0 \u002F nodes.length)\n      @phh.end = hh2 = height * ((nodes.length - range.1 - 1) \u002F nodes.length)\n      ph1.style.height = \"#{hh1}px\"\n      ph2.style.height = \"#{hh2}px\"\n\n*\u002F\nnew portal({\n  root: document.querySelector('#content')\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Math" in locals_for_with ?
        locals_for_with.Math :
        typeof Math !== 'undefined' ? Math : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 