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
    [ph1, ph2] = [@placeholder.start, @placeholder.end]
    sbox = root.getBoundingClientRect!
    box1 = nodes[range.0].getBoundingClientRect!
    box2 = nodes[range.1].getBoundingClientRect!
    box3 = if range.0 + (delta) <= range.1 and nodes[range.0 + (delta)] =>
      nodes[range.0 + (delta)].getBoundingClientRect!
    else null
    box4 = if range.1 - (delta - 1) >= range.0 and nodes[range.1 - (delta - 1)] =>
      nodes[range.1 - (delta - 1)].getBoundingClientRect!
    else null
    crange = [range.0, range.1]
    refp = nodes[range.0]
    refpb = refp.getBoundingClientRect!
    if box1.y >= -sbox.height * 2.5 and range.0 > 0 =>
      min = range.0 - delta >? 0
      for i from range.0 - 1 to min by -1 => root.insertBefore nodes[i], ph1.nextSibling
      range.0 = min
    else if box3 and box3.y < -sbox.height * 2.5 =>

      refp = nodes[range.0 + delta]
      refpb = refp.getBoundingClientRect!
      for i from range.0 + (delta - 1) to range.0 by -1 => root.removeChild nodes[i]
      range.0 = range.0 + delta
    if box2.y <= sbox.height * 2.5 and range.1 < nodes.length - 1 =>
      max = range.1 + delta + 1 <? nodes.length
      for i from range.1 + 1 til max => root.insertBefore nodes[i], ph2
      range.1 = max - 1
    else if box4 and box4.y > sbox.height * 2.5=>
      for i from range.1 - (delta - 1) to range.1 => root.removeChild nodes[i]
      range.1 = range.1 - delta
    if !@phh.end or crange.0 != range.0 or crange.1 != range.1 =>
      ch = root.scrollHeight
      [ohh1, ohh2] = [hh1,hh2] = [@phh.start, @phh.end]
      height = (ch - (hh1 or 0) - (hh2 or 0)) * nodes.length / (range.1 - range.0)
      console.log Math.round(height)
      @phh.start = hh1 = height * (range.0 / nodes.length)
      @phh.end = hh2 = height * ((nodes.length - range.1 - 1) / nodes.length)
      ph1.style.paddingTop = "#{hh1}px"
      ph2.style.paddingTop = "#{hh2}px"

  refresh-alt: ->
    [root, delta, nodes, range] = [@root, @delta, @nodes, @range]
    [ph1, ph2] = [@placeholder.start, @placeholder.end]
    console.log "A", ph1.getBoundingClientRect!y
    sbox = root.getBoundingClientRect!
    box1 = nodes[range.0].getBoundingClientRect!
    box2 = nodes[range.1].getBoundingClientRect!
    box3 = if range.0 + (delta - 1) <= range.1 and nodes[range.0 + (delta - 1)] =>
      nodes[range.0 + (delta - 1)].getBoundingClientRect!
    else null
    box4 = if range.1 - (delta - 1) >= range.0 and nodes[range.1 - (delta - 1)] =>
      nodes[range.1 - (delta - 1)].getBoundingClientRect!
    else null
    crange = [range.0, range.1]
    refp = nodes[range.0]
    refpb = refp.getBoundingClientRect!
    #console.log refpb.y, range.0
    if box1.y >= -sbox.height * 2.5 =>
      min = range.0 - delta >? 0
      #console.log "ph1 nextsibling", ph1.nextSibling
      for i from range.0 - 1 to min by -1 => root.insertBefore nodes[i], ph1.nextSibling
      range.0 = min
    else if box3 and box3.y < -sbox.height * 5.5 =>
      console.log "remove"
      refp = nodes[range.0 + delta]
      refpb = refp.getBoundingClientRect!
      #console.log \here, refpb.y, range.0 + delta
      for i from range.0 + (delta - 1) to range.0 by -1 => root.removeChild nodes[i]
      range.0 = range.0 + delta
    if box2.y <= sbox.height * 2.5 =>
      max = range.1 + delta + 1 <? nodes.length
      for i from range.1 + 1 til max => root.insertBefore nodes[i], ph2
      range.1 = max - 1
    else if box4 and box4.y > sbox.height * 2.5 =>
      for i from range.1 - (delta - 1) to range.1 => root.removeChild nodes[i]
      range.1 = range.1 - delta
    console.log "B", ph1.getBoundingClientRect!y
    if !@phh.end or crange.0 != range.0 or crange.1 != range.1 =>
      ch = root.scrollHeight
      #console.log ch
      [ohh1, ohh2] = [hh1,hh2] = [@phh.start, @phh.end]
      height = (ch - (hh1 or 0) - (hh2 or 0)) * nodes.length / (range.1 - range.0)
      @phh.start = hh1 = height * (range.0 / nodes.length)
      @phh.end = hh2 = height * ((nodes.length - range.1 - 1) / nodes.length)
      ph1.style.paddingTop = "#{hh1}px"
      ph2.style.paddingTop = "#{hh2}px"
      refpb2 = refp.getBoundingClientRect!
      console.log "C", ph1.getBoundingClientRect!y
      root.scrollTop = root.scrollTop + (refpb2.y - refpb.y)
      console.log "D", ph1.getBoundingClientRect!y
      console.log range, ch, hh1, hh2, ohh1, ohh2, refpb2.y, refpb.y, root.childNodes.length, root.scrollTop, nodes[range.0].getBoundingClientRect!y, sbox.height * 2.5
      if !@blah and range.0 == 900 and range.1 == 1028 => @blah = 1
      if range.0 == 750 and range.1 == 1028 and @blah == 1 =>
        @blah = 2
      if range.0 == 900 and range.1 == 1028 and @blah == 2 =>
        @blah = 3
        @root.removeEventListener \scroll, @handler
        console.log \done.
        setTimeout (~>

          ch = root.scrollHeight
          #console.log ch
          [ohh1, ohh2] = [hh1,hh2] = [@phh.start, @phh.end]
          height = (ch - (hh1 or 0) - (hh2 or 0)) * nodes.length / (range.1 - range.0)
          @phh.start = hh1 = height * (range.0 / nodes.length)
          @phh.end = hh2 = height * ((nodes.length - range.1 - 1) / nodes.length)
          ph1.style.paddingTop = "#{hh1}px"
          ph2.style.paddingTop = "#{hh2}px"
          refpb2 = refp.getBoundingClientRect!
          console.log "C", ph1.getBoundingClientRect!y
          root.scrollTop = root.scrollTop + (refpb2.y - refpb.y)

        ), 100
      /*

        @root.removeEventListener \scroll, @handler
        # this value is ...
        root.offsetHeight
        console.log root.scrollHeight, ph1.style.height, nodes[750].getBoundingClientRect!y, nodes[750].getBoundingClientRect!height, root.childNodes.length, Array.from(root.childNodes).indexOf(nodes[750]), nodes[751].getBoundingClientRect!y, ph1.getBoundingClientRect!y
        setTimeout (->
          # different from this. this is much smaller. ( - 3000 )
          # not sure why ( perhaps it relates to reflow )
          console.log root.scrollHeight, ph1.style.height, nodes[750].getBoundingClientRect!y, nodes[750].getBoundingClientRect!height, root.childNodes.length, Array.from(root.childNodes).indexOf(nodes[750]), nodes[751].getBoundingClientRect!y, ph1.getBoundingClientRect!y
          setTimeout (->
            console.log root.scrollHeight, ph1.style.height, nodes[750].getBoundingClientRect!y, nodes[750].getBoundingClientRect!height, root.childNodes.length, Array.from(root.childNodes).indexOf(nodes[750]), nodes[751].getBoundingClientRect!y, ph1.getBoundingClientRect!y
          ), 10
        ), 10
      */

if module? => module.exports = portal
else if window? => window.portal = portal
