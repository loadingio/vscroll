mount = document.querySelector \#mount
result = document.querySelector \#result

run = ->
  # a fresh container each run: a brand-new node carries none of a previous
  # instance's scroll listeners or placeholder divs, so re-running stays clean.
  mount.innerHTML = ''
  list = document.createElement \div
  list.id = \list
  for i from 0 til 300
    row = document.createElement \div
    row.className = \row
    row.textContent = "item #i"
    row._n = i
    list.appendChild row
  mount.appendChild list

  vs = new vscroll.fixed {root: list}
  vs.update!    # virtualize: only a window of rows sits in the DOM
  # filter: drop every odd row from the virtual list
  odd = vs.childNodes.filter (n) -> n.nodeType == 1 and (n._n % 2)
  odd.for-each (n) -> vs.removeChild n
  vs.update!

  # assert against the REAL DOM: no odd (filtered-out) row may remain
  dom = [].slice.call list.querySelectorAll('.row')
  orphans = dom.filter (n) -> n._n % 2
  ok = orphans.length == 0
  result.textContent = """
    rows in DOM after filter : #{dom.length}
    odd rows still in DOM     : #{orphans.length} (must be 0)#{if orphans.length => ' -> ' + orphans.slice(0, 10).map((.textContent)).join(', ') else ''}
    RESULT: #{if ok => 'PASS — filtered-out rows left the DOM' else 'FAIL — filtered-out rows orphaned in the DOM'}
  """
  result.className = if ok => \pass else \fail

document.querySelector(\#run).addEventListener \click, run
run!
