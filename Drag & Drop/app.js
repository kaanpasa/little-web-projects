const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
function dragStart() {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
}

fill.addEventListener('dragend', dragEnd)
function dragEnd() {
  this.className = 'fill'
}

for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragleave)
  empty.addEventListener('drop', dragDrop)
}

function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hover'
}

function dragleave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}