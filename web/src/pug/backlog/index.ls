scroll = document.querySelector '#scroll'
content = document.querySelector '#content'

children = Array.from(content.childNodes)

content.innerHTML = ''
ph1 = document.createElement("div")
ph2 = document.createElement("div")
content.appendChild ph1
content.appendChild ph2
ph1.style.width = "100%"
ph2.style.width = "100%"

<-(->it.apply {}) _

@height = 0
for i from 0 til 100 => content.insertBefore children[i], ph2
@range = [0,99]

delta = 200

@refresh = ->
  sbox = scroll.getBoundingClientRect!
  box1 = children[@range.0].getBoundingClientRect!
  box2 = children[@range.1].getBoundingClientRect!
  box3 = if @range.0 + (delta - 1) < @range.1 and children[@range.0 + (delta - 1)] =>
    children[@range.0 + (delta - 1)].getBoundingClientRect!
  else null
  box4 = if @range.1 - (delta - 1) >= @range.0 and children[@range.1 - (delta - 1)] =>
    children[@range.1 - (delta - 1)].getBoundingClientRect!
  else null
  crange = [@range.0, @range.1]
  if box1.y >= -sbox.height * 2 =>
    min = @range.0 - delta >? 0
    for i from @range.0 - 1 to min by -1 => content.insertBefore children[i], ph1.nextSibling
    @range.0 = min
  else if box3 and box3.y < -sbox.height * 2 =>
    for i from @range.0 + (delta - 1) to @range.0 by -1 => content.removeChild children[i]
    @range.0 = @range.0 + delta
  if box2.y <= sbox.height * 2 =>
    max = @range.1 + delta + 1 <? children.length
    for i from @range.1 + 1 til max => content.insertBefore children[i], ph2
    @range.1 = max - 1
  else if box4 and box4.y > sbox.height * 2 =>
    for i from @range.1 - (delta - 1) til @range.1 => content.removeChild children[i]
    @range.1 = @range.1 - delta
  if crange.0 != @range.0 or crange.1 != @range.1 =>
    cbox = content.getBoundingClientRect!
    height = (cbox.height - (@hh1 or 0) - (@hh2 or 0)) * children.length / (@range.1 - @range.0)
    @hh1 = height * (@range.0 / children.length)
    @hh2 = height * ((children.length - @range.1 - 1) / children.length)
    ph1.style.height = "#{@hh1}px"
    ph2.style.height = "#{@hh2}px"



scroll.addEventListener \scroll, ~> @refresh!
