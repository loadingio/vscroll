root = document.querySelector('#content')
vs = new vscroll.fixed {root}
vs.update!
root.addEventListener \scroll, -> console.log root.childNodes.length
