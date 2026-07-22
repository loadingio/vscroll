# Change Logs

## v0.0.12

 - fix bug: scrollTop resets to 0 after update() when user is scrolled down
   - root cause: Chrome scroll anchoring adjusts scrollTop during removeChild loop when items above the viewport are removed (ph0=0px case). each removal reduces scrollTop by one row height, eventually clamping it to 0.
   - fix: save scrollTop before any DOM manipulation (moved before the removeChild loop) so scroll anchoring cannot corrupt the saved value.
   - also set ph.0 height to savedScroll + rbox.height before restoring scrollTop, to ensure scrollHeight is large enough to avoid clamping during restore.
 - fix bug: focused input loses focus after update()
   - root cause: removeChild on the row containing the focused input causes the browser to blur it; reinserting the row does not restore focus.
   - fix: save document.activeElement before DOM manipulation; restore focus after locate() if the element is still contained within root.


## v0.0.11

 - fix bug: boundary of loop for inserting nodes in locate may be out of nodes array's range.
   - additional rules applied that were missing in v0.0.10


## v0.0.10

 - fix bug: boundary of loop for inserting nodes in locate may be out of nodes array's range.


## v0.0.9

 - fix bug: entry is not shown if there is only one entry.
   - when initing, range may be the same with min / max so we have to ensure the range doesn't go beyond min max
 - upgrade dependencies to fix vulnerabilities


## v0.0.8

 - release with compact directory structure


## v0.0.7

 - fix `main` field and add `browser` field in `package.json`
 - minimize minimized file further with mangling and compression
 - upgrade modules


## v0.0.6

 - bug fix: probe-len should not be longer than childNodes.length 


## v0.0.5

 - support `setChild` for directly update content via innerHTML
 - support update based on partial content with an additional parameter `probe-len`
 - make `update` faster by removing unnecessary calculation
 - bug fix: use the real parent before removing node
 

## v0.0.4

 - rename `handler` to `locate` to reflect its purpose and make it as an open api


## v0.0.3

 - by default set `grid-column: 1 / -1` in placeholder to support grid layout
 - insert all nodes initially instead of only 100 items to correctly get row and count
   - this can be improved by progressively insertion in the future.
 - calculate row count by relative node position to container instead of to viewport
 - reset values, DOM and scrollTop when call `update` to prevent glitches.
   - we may want to preserve scrollTop in the future update.


## v0.0.2

 - don't calculate box for elements that are not ELEMENT_NODE


## v0.0.1

 - initial release
