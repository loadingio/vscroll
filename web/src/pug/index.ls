/*
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
  @range = [0, Math.min(@delta - 1, @nodes.length)]
  for i from @range.0 to @range.1 => @root.insertBefore @nodes[i], ph.end
  @root.addEventListener \scroll, ~> @refresh!
  @

portal.prototype = Object.create(Object.prototype) <<< do
  refresh: ->
    [root, delta, nodes, range] = [@root, @delta, @nodes, @range]
    [ph1, ph2] = [@placeholder.start, @placeholder.end]
    sbox = root.getBoundingClientRect!
    box1 = nodes[range.0].getBoundingClientRect!
    box2 = nodes[range.1].getBoundingClientRect!
    box3 = if range.0 + (delta - 1) < range.1 and nodes[range.0 + (delta - 1)] =>
      nodes[range.0 + (delta - 1)].getBoundingClientRect!
    else null
    box4 = if range.1 - (delta - 1) >= range.0 and nodes[range.1 - (delta - 1)] =>
      nodes[range.1 - (delta - 1)].getBoundingClientRect!
    else null
    crange = [range.0, range.1]
    if box1.y >= -sbox.height * 2 =>
      min = range.0 - delta >? 0
      for i from range.0 - 1 to min by -1 => root.insertBefore nodes[i], ph1.nextSibling
      range.0 = min
    else if box3 and box3.y < -sbox.height * 2 =>
      for i from range.0 + (delta - 1) to range.0 by -1 => root.removeChild nodes[i]
      range.0 = range.0 + delta
    if box2.y <= sbox.height * 2 =>
      max = range.1 + delta + 1 <? nodes.length
      for i from range.1 + 1 til max => root.insertBefore nodes[i], ph2
      range.1 = max - 1
    else if box4 and box4.y > sbox.height * 2 =>
      for i from range.1 - (delta - 1) til range.1 => root.removeChild nodes[i]
      range.1 = range.1 - delta
    if !@phh.end or crange.0 != range.0 or crange.1 != range.1 =>
      ch = root.scrollHeight
      [hh1,hh2] = [@phh.start, @phh.end]
      height = (ch - (hh1 or 0) - (hh2 or 0)) * nodes.length / (range.1 - range.0)
      @phh.start = hh1 = height * (range.0 / nodes.length)
      @phh.end = hh2 = height * ((nodes.length - range.1 - 1) / nodes.length)
      ph1.style.height = "#{hh1}px"
      ph2.style.height = "#{hh2}px"

*/
new portal do
  root: document.querySelector('#content')
