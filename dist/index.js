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
    this.range = [0, Math.min(this.delta - 1, this.nodes.length)];
    for (i$ = this.range[0], to$ = this.range[1]; i$ <= to$; ++i$) {
      i = i$;
      this.root.insertBefore(this.nodes[i], ph.end);
    }
    this.root.addEventListener('scroll', function(){
      return this$.refresh();
    });
    return this;
  };
  portal.prototype = import$(Object.create(Object.prototype), {
    refresh: function(){
      var ref$, root, delta, nodes, range, ph1, ph2, sbox, box1, box2, box3, box4, crange, min, i$, i, to$, max, ref1$, ch, hh1, hh2, height;
      ref$ = [this.root, this.delta, this.nodes, this.range], root = ref$[0], delta = ref$[1], nodes = ref$[2], range = ref$[3];
      ref$ = [this.placeholder.start, this.placeholder.end], ph1 = ref$[0], ph2 = ref$[1];
      sbox = root.getBoundingClientRect();
      box1 = nodes[range[0]].getBoundingClientRect();
      box2 = nodes[range[1]].getBoundingClientRect();
      box3 = range[0] + (delta - 1) < range[1] && nodes[range[0] + (delta - 1)] ? nodes[range[0] + (delta - 1)].getBoundingClientRect() : null;
      box4 = range[1] - (delta - 1) >= range[0] && nodes[range[1] - (delta - 1)] ? nodes[range[1] - (delta - 1)].getBoundingClientRect() : null;
      crange = [range[0], range[1]];
      if (box1.y >= -sbox.height * 2) {
        min = (ref$ = range[0] - delta) > 0 ? ref$ : 0;
        for (i$ = range[0] - 1; i$ >= min; --i$) {
          i = i$;
          root.insertBefore(nodes[i], ph1.nextSibling);
        }
        range[0] = min;
      } else if (box3 && box3.y < -sbox.height * 2) {
        for (i$ = range[0] + (delta - 1), to$ = range[0]; i$ >= to$; --i$) {
          i = i$;
          root.removeChild(nodes[i]);
        }
        range[0] = range[0] + delta;
      }
      if (box2.y <= sbox.height * 2) {
        max = (ref$ = range[1] + delta + 1) < (ref1$ = nodes.length) ? ref$ : ref1$;
        for (i$ = range[1] + 1; i$ < max; ++i$) {
          i = i$;
          root.insertBefore(nodes[i], ph2);
        }
        range[1] = max - 1;
      } else if (box4 && box4.y > sbox.height * 2) {
        for (i$ = range[1] - (delta - 1), to$ = range[1]; i$ < to$; ++i$) {
          i = i$;
          root.removeChild(nodes[i]);
        }
        range[1] = range[1] - delta;
      }
      if (!this.phh.end || crange[0] !== range[0] || crange[1] !== range[1]) {
        ch = root.scrollHeight;
        ref$ = [this.phh.start, this.phh.end], hh1 = ref$[0], hh2 = ref$[1];
        height = (ch - (hh1 || 0) - (hh2 || 0)) * nodes.length / (range[1] - range[0]);
        this.phh.start = hh1 = height * (range[0] / nodes.length);
        this.phh.end = hh2 = height * ((nodes.length - range[1] - 1) / nodes.length);
        ph1.style.height = hh1 + "px";
        return ph2.style.height = hh2 + "px";
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
