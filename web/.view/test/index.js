 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (libLoader, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}























































































pug_html = pug_html + "\u003Chtml\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Ctitle\u003Evscroll.fixed removeChild test\u003C\u002Ftitle\u003E\u003Cstyle\u003Ebody{font-family:system-ui,sans-serif;margin:1.5em;line-height:1.6;color:#222;max-width:640px}\n#list{width:320px;height:220px;overflow-y:scroll;border:1px solid #ccc;display:grid;grid-template-columns:1fr;gap:2px;padding:4px}\n.row{background:#69f;color:#fff;padding:6px 8px;border-radius:3px}\nbutton{margin:.2em 0 1em;padding:.4em .9em}\n.cap{font-size:12px;color:#777;margin:.6em 0 .2em}\n#result{margin:1em 0;white-space:pre-wrap;font-family:monospace;font-size:13px;padding:.8em;border-radius:4px;background:#f4f4f4}\n.pass{color:#0a7d16}.fail{color:#c00}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Ch3\u003Evscroll.fixed — does removeChild detach the real DOM node?\u003C\u002Fh3\u003E\u003Cp\u003EThis is an assertion, not a playground. It builds 300 virtualized rows, then\n\"filters\" to the even-numbered rows by calling \u003Ccode\u003EremoveChild\u003C\u002Fcode\u003E on every\nodd row + \u003Ccode\u003Eupdate()\u003C\u002Fcode\u003E — the way an ld-each filter drops rows from a\nhosted list. A dropped row must also leave the DOM.\u003C\u002Fp\u003E\u003Cdiv id=\"result\"\u003Erunning…\u003C\u002Fdiv\u003E\u003Cbutton id=\"run\"\u003ERun again\u003C\u002Fbutton\u003E\u003Cdiv class=\"cap\"\u003E↓ the list below shows the filter result: even rows only (virtualized, so it looks short)\u003C\u002Fdiv\u003E\u003Cdiv id=\"mount\"\u003E\u003C\u002Fdiv\u003E\u003Cscript src=\"\u002Fassets\u002Flib\u002F@loadingio\u002Fvscroll\u002Fdev\u002Findex.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript\u003Evar mount,result,run;mount=document.querySelector(\"#mount\");result=document.querySelector(\"#result\");run=function(){var e,t,n,r,o,l,u,i,c;mount.innerHTML=\"\";e=document.createElement(\"div\");e.id=\"list\";for(t=0;t\u003C300;++t){n=t;r=document.createElement(\"div\");r.className=\"row\";r.textContent=\"item \"+n;r._n=n;e.appendChild(r)}mount.appendChild(e);o=new vscroll.fixed({root:e});o.update();l=o.childNodes.filter(function(e){return e.nodeType===1&&e._n%2});l.forEach(function(e){return o.removeChild(e)});o.update();u=[].slice.call(e.querySelectorAll(\".row\"));i=u.filter(function(e){return e._n%2});c=i.length===0;result.textContent=\"rows in DOM after filter : \"+u.length+\"\\nodd rows still in DOM     : \"+i.length+\" (must be 0)\"+(i.length?\" -\u003E \"+i.slice(0,10).map(function(e){return e.textContent}).join(\", \"):\"\")+\"\\nRESULT: \"+(c?\"PASS — filtered-out rows left the DOM\":\"FAIL — filtered-out rows orphaned in the DOM\");return result.className=c?\"pass\":\"fail\"};document.querySelector(\"#run\").addEventListener(\"click\",run);run();\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 