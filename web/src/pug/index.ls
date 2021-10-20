root = document.querySelector('#content')
rbox = root.getBoundingClientRect!

nodes = Array.from(root.childNodes)
boxes = nodes.map ->
  box = it.getBoundingClientRect!
  box.y = box.y - rbox.y
  box
nodes.map -> it.parentNode.removeChild it
total = boxes.reduce(((a,b) -> a + b.height),0)
bh = boxes.0.height + 3

ph = [0,1]
  .map -> document.createElement \div
  .map -> root.appendChild it

ph.1.style.height = "#{total}px"
ph.0.style.width = "100%"
ph.1.style.width = "100%"

range = [0,0]

# manual config
[row, count] = [30, 3]

# auto config
[y, count] = [boxes.0.y, 0]
for i from 0 til boxes.length =>
  if boxes[i].y == y => count++
  else break
for i from 0 til boxes.length =>
  if boxes[i].y > rbox.height * 2 =>
    row = Math.ceil(i / count)
    break


delta = row * count

handler = ->
  [min,max] = [boxes.length,-1]
  for i from 0 til boxes.length by delta =>
    j = (i + delta - 1) <? (nodes.length - 1)
    b1 = boxes[i]
    b2 = boxes[j]
    b1 = {y: (i/count) * bh, height: bh}
    b2 = {y: (j/count) * bh, height: bh}
    if b1.y - root.scrollTop <= 1.5 * rbox.height and b2.y + b2.height - root.scrollTop > -0.5 * rbox.height =>
      if i < min => min = i
      if j > max => max = j
  if root.scrollTop > root.scrollHeight / 2 and min == boxes.length and max == -1 => [min, max] = [1000, 1028]
  for i from range.0 til min => if nodes[i].parentNode => root.removeChild nodes[i]
  for i from range.0 - 1 to min by -1 => if !nodes[i].parentNode => root.insertBefore nodes[i], ph.0.nextSibling
  for i from range.1 til max by -1 => if nodes[i].parentNode => root.removeChild nodes[i]
  for i from range.1 + 1 to max => if !nodes[i].parentNode => root.insertBefore nodes[i], ph.1
  range := [min, max]
  ph.0.style.height = "#{bh * ((min/count) >? 0)}px"
  ph.1.style.height = "#{bh * Math.floor((boxes.length - max - 1) / count)}px"

root.addEventListener \scroll, handler
handler!
