(function(){
  var portal;
  portal = function(opt){
    var i$, i, ph, to$, this$ = this;
    opt == null && (opt = {});
    this.root = typeof opt.root === 'string'
      ? document.querySelector(opt.root)
      : opt.root;
    this.nodes = opt.nodes || Array.from(this.root.childNodes);
    for (i$ = this.nodes.length - 1; i$ >= 0; --i$) {
      i = i$;
      if (this.nodes[i].parentNode) {
        this.nodes[i].parentNode.removeChild(this.nodes[i]);
      }
    }
    this.delta = opt.delta || 200;
    this.placeholder = ph = {
      start: document.createElement("div"),
      end: document.createElement("div")
    };
    this.phh = {
      start: 0,
      end: 0
    };
    this.root.appendChild(ph.start);
    this.root.appendChild(ph.end);
    ph.start.style.width = ph.end.style.width = "100%";
    this.range = [0, Math.min(this.delta - 1, this.nodes.length - 1)];
    for (i$ = this.range[0], to$ = this.range[1]; i$ <= to$; ++i$) {
      i = i$;
      this.root.insertBefore(this.nodes[i], ph.end);
    }
    this.handler = function(){
      return this$.refresh();
    };
    this.root.addEventListener('scroll', this.handler);
    return this;
  };
  portal.prototype = import$(Object.create(Object.prototype), {
    refresh: function(){
      var ref$, root, delta, nodes, range, doit, ret, this$ = this;
      ref$ = [this.root, this.delta, this.nodes, this.range], root = ref$[0], delta = ref$[1], nodes = ref$[2], range = ref$[3];
      doit = function(){
        var ref$, ph1, ph2, rbox, pvts, redo, val, ref1$, i$, i, hh1, hh2, total;
        ref$ = [this$.placeholder.start, this$.placeholder.end], ph1 = ref$[0], ph2 = ref$[1];
        rbox = root.getBoundingClientRect();
        pvts = [range[0], range[0] + delta, range[1], range[1] - delta].map(function(it){
          if (nodes[it]) {
            return nodes[it].getBoundingClientRect();
          } else {
            return null;
          }
        });
        console.log([Math.round(rbox.height), root.scrollHeight, "[scrolltop: ", root.scrollTop, "]", range, "[", Math.round(pvts[0].y), Math.round(pvts[1] ? pvts[1].y : 0), "] [", Math.round(pvts[2].y), Math.round(pvts[3] ? pvts[3].y : 0), "]", Math.round(this$.phh.start), Math.round(this$.phh.end)].join(' '));
        redo = false;
        if (pvts[2].y < rbox.height * 2) {
          val = (ref$ = range[1] + delta) < (ref1$ = nodes.length - 1) ? ref$ : ref1$;
          for (i$ = range[1] + 1; i$ <= val; ++i$) {
            i = i$;
            root.insertBefore(nodes[i], ph2);
          }
          range[1] = val;
          redo = true;
        }
        if (pvts[3] && pvts[3].y > rbox.height * 2) {
          val = (ref$ = range[1] - delta) > 0 ? ref$ : 0;
          for (i$ = range[1]; i$ > val; --i$) {
            i = i$;
            root.removeChild(nodes[i]);
          }
          range[1] = val;
          redo = true;
        }
        ref$ = [this$.phh.start, this$.phh.end], hh1 = ref$[0], hh2 = ref$[1];
        total = nodes.length * (root.scrollHeight - hh1 - hh2) / ((ref$ = range[1] - range[0] + 1) > 1 ? ref$ : 1);
        this$.phh.start = hh1 = total * ((ref$ = range[0]) > 0 ? ref$ : 0) / ((ref$ = nodes.length) > 1 ? ref$ : 1);
        this$.phh.end = hh2 = total * ((ref$ = nodes.length - range[1] - 1) > 0 ? ref$ : 0) / ((ref$ = nodes.length) > 1 ? ref$ : 1);
        console.log([root.scrollHeight, hh1, hh2].map(function(it){
          return Math.round(it);
        }));
        root.offsetHeight;
        return redo;
      };
      if (this.pending === 1) {
        setTimeout(function(){
          var ret;
          this$.pending = 0;
          ret = doit();
          if (ret) {
            return this$.pending = 1;
          }
        }, 1000);
        return this.pending = 2;
      } else if (!this.pending) {
        ret = doit();
        if (ret) {
          return this.pending = 1;
        }
      }
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = portal;
  } else if (typeof window != 'undefined' && window !== null) {
    window.portal = portal;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
