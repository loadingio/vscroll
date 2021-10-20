portal = (opt={}) ->
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  @nodes = opt.nodes or Array.from(@root.childNodes)
  for i from @nodes.length - 1 to 0 by -1 => if @nodes[i].parentNode => @nodes[i].parentNode.removeChild @nodes[i]
  @delta = opt.delta or 200
  @placeholder = ph = 
    start: document.createElement("div")
    end: document.createElement("div")
  @phh = start: 0, end: 0
  @root.appendChild ph.start
  @root.appendChild ph.end
  ph.start.style.width = ph.end.style.width = "100%"
  @range = [0, Math.min(@delta - 1, @nodes.length - 1)] # boundary ( inclusive both side )
  for i from @range.0 to @range.1 => @root.insertBefore @nodes[i], ph.end
  @handler = ~> @refresh!
  @root.addEventListener \scroll, @handler #~> @refresh!
  @

portal.prototype = Object.create(Object.prototype) <<< do
  refresh: ->
    [root, delta, nodes, range] = [@root, @delta, @nodes, @range]
    doit = ~>
      [ph1, ph2] = [@placeholder.start, @placeholder.end]
      rbox = root.getBoundingClientRect!
      pvts = [range.0, range.0 + delta, range.1, range.1 - delta]
        .map -> if nodes[it] => nodes[it].getBoundingClientRect! else null

      console.log([
        Math.round(rbox.height)
        root.scrollHeight
        "[scrolltop: ", root.scrollTop, "]"
        range, "[",
        Math.round(pvts.0.y), Math.round(if pvts.1 => pvts.1.y else 0), "] ["
        Math.round(pvts.2.y), Math.round(if pvts.3 => pvts.3.y else 0), "]"
        Math.round(@phh.start), Math.round(@phh.end)
      ].join(' '))
      redo = false

      if pvts.2.y < rbox.height * 2 =>
        val = range.1 + delta <? nodes.length - 1
        for i from range.1 + 1 to val => root.insertBefore nodes[i], ph2
        range.1 = val
        redo = true

      if pvts.3 and pvts.3.y > rbox.height * 2 =>
        val = range.1 - delta >? 0
        for i from range.1 til val by -1 => root.removeChild nodes[i]
        range.1 = val
        redo = true

      [hh1, hh2] = [@phh.start, @phh.end]
      total = nodes.length * (root.scrollHeight - hh1 - hh2) / ((range.1 - range.0 + 1) >? 1)
      @phh.start = hh1 = total * ((range.0) >? 0) / (nodes.length >? 1)
      @phh.end = hh2 = total * ((nodes.length - range.1 - 1) >? 0) / (nodes.length >? 1)
      #ph1.style.height = "#{hh1}px"
      #ph2.style.height = "#{hh2}px"
      console.log [root.scrollHeight, hh1, hh2].map -> Math.round(it)
      root.offsetHeight
      return redo
    if @pending == 1 =>
      setTimeout (~>
        @pending = 0
        ret = doit!
        if ret => @pending = 1
      ), 1000
      @pending = 2
    else if !@pending =>
      ret = doit!
      if ret => @pending = 1

if module? => module.exports = portal
else if window? => window.portal = portal
