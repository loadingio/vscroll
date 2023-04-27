vscroll = {}
vscroll.fixed = (opt = {}) ->
  @root = opt.root
  @childNodes = Array.from(@root.childNodes)
  @init!
  @

vscroll.fixed.prototype = Object.create(Object.prototype) <<<
  init: ->
    @ph = [0,1]
      .map -> document.createElement \div
      .map ~>
        it.style <<< width: \100%, height: \0px, gridColumn: "1 / -1"
        @root.appendChild it
    @root.addEventListener \scroll, ~> @locate!
    @rbox = {height: 0}

  setchild: ->
    tpl = document.createElement \template
    tpl.innerHTML = it
    @childNodes = Array.from(tpl.content.childNodes)
    @root.innerHTML = ''
    if !@ph.0.parentNode => @root.insertBefore @ph.0, @root.childNodes.0
    if !@ph.1.parentNode => @root.appendChild @ph.1

  update: (probe-len = 0) ->
    # Note: it's really expensive to do layout related actions
    # ( such as getBoundingClientRect, scrollTop, etc )
    # when the list is long.

    # always clear and reset values so re-update won't mess up things.
    # however, this doesn't preserve scrollTop.
    # TODO we may want to support scrollTop preservation after update.
    @ <<< range: [1, 0], row: 1, count: 1
    @range.0 = @range.0 <? @childNodes.length - 1
    @range.1 = @range.1 <? @childNodes.length - 1
    # reinsert dom ( up to probe-len, to keep dom small and performant )
    for i from 0 til @childNodes.length =>
      if @childNodes[i].parentNode => @childNodes[i].parentNode.removeChild @childNodes[i]
    len = (probe-len or @childNodes.length) <? @childNodes.length
    for i from 0 til len => if !@childNodes[i].parentNode => @root.insertBefore @childNodes[i], @ph.1

    # update layout and get box, after dom is prepared.
    @ph.0.style.height = @ph.1.style.height = "0px"
    @root.scrollTop = 0
    @rbox = rbox = @root.getBoundingClientRect!

    y = undefined
    for i from 0 til len =>
      if  @childNodes[i].nodeType != Node.ELEMENT_NODE => continue
      box = @childNodes[i].getBoundingClientRect!
      @line-height = box.height
      if !(y?) => y = box.y
      else if box.y == y => @count++
      else
        @line-height = box.y - y
        break
    /*
    # can merge with above.
    # we dont seem to need this, since row can be infered based on rbox.height and @line-height below.
    # remove it once we confirm this.
    for i from 0 til len =>
      if @childNodes[i].nodeType != Node.ELEMENT_NODE => continue
      box = @childNodes[i].getBoundingClientRect!
      if (box.y - rbox.y) <= rbox.height * 4 => continue
      @row = (Math.ceil(i / @count) >? 1)
      break
    */
    @row = Math.ceil((rbox.height * 4) / (@line-height or 1))
    @delta = (@row * @count) >? 1

    # clean and restore dom for locate
    for i from 0 til len => @childNodes[i].parentNode.removeChild @childNodes[i]
    @locate!

  locate: ->
    [len, delta, count, nodes, lh, root, ph, rbox, range] = [
      @childNodes.length, @delta, @count, @childNodes, @line-height, @root, @ph, @rbox, @range
    ]
    if !ph.0.parentNode => root.insertBefore ph.0, root.childNodes.0
    if !ph.1.parentNode => root.appendChild ph.1
    [min,max] = [len,-1]
    for i from 0 til len by delta =>
      j = (i + delta - 1) <? (nodes.length - 1)
      b1 = {y: (i/count) * lh, height: lh}
      b2 = {y: (j/count) * lh, height: lh}
      if b1.y - root.scrollTop <= 1.5 * rbox.height and b2.y + b2.height - root.scrollTop > -0.5 * rbox.height =>
        if i < min => min = i
        if j > max => max = j
    if root.scrollTop > root.scrollHeight / 2 and min == len and max == -1 =>
      [min, max] = [delta * Math.floor(len / delta), len - 1]
    for i from (range.0 >? 0) til min =>
      if nodes[i].parentNode => nodes[i].parentNode.removeChild nodes[i]
    # ensure range.0 is greater than/equal to min so the entry at min will be inserted
    for i from (range.0 - 1 >? min) to min by -1 =>
      if !nodes[i].parentNode => root.insertBefore nodes[i], ph.0.nextSibling
    for i from range.1 til max by -1 =>
      if nodes[i].parentNode => nodes[i].parentNode.removeChild nodes[i]
    # ensure range.1 is smaller than/equal to max so the entry at min will be inserted
    for i from (range.1 + 1 <? max) >? 0 to max =>
      if !nodes[i].parentNode => root.insertBefore nodes[i], ph.1
    @range = [min, max]
    ph.0.style.height = "#{lh * ((min/count) >? 0)}px"
    ph.1.style.height = "#{lh * Math.floor((len - max - 1) / count)}px"

  appendChild: (n) ->
    @childNodes.splice @childNodes.length, 0, n
  insertBefore: (n, s) ->
    idx = @childNodes.indexOf(s)
    if idx < 0 => idx = @childNodes.length
    @childNodes.splice idx, 0, n
  removeChild: (n) ->
    if !~(idx = @childNodes.indexOf n) => return
    @childNodes.splice idx, 1

vscroll.dummy = (opt = {}) ->
  @root = opt.root
  @childNodes = []
  @

vscroll.dummy.prototype = Object.create(Object.prototype) <<<
  appendChild: (n) ->
    @childNodes.splice @childNodes.length, 0, n
    @root.appendChild n
  insertBefore: (n, s) ->
    @childNodes.splice @childNodes.indexOf(s), 0, n
    @root.insertBefore n, s
  removeChild: (n) ->
    if !~(idx = @childNodes.indexOf n) => return
    @childNodes.splice idx, 1
    @root.removeChild n

if module? => module.exports = vscroll
else if window? => window.vscroll = vscroll
