const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// Add ToDo
function newTodo() {
  // Asks for a task
  let task = prompt("New Task")
  // Counts Tasks
  let count = itemCountSpan.innerHTML
  let count2 = uncheckedCountSpan.innerHTML
  if (task === '') {
    return
  }  
  // If task is not null
  if (task != null) {
    // Add to count
    count++;
    count2++;    
    // Change the item-count to the variable Count
    itemCountSpan.textContent = count
    uncheckedCountSpan.textContent = count2
    // Creates <li>
    let newTask = document.createElement('li')
    newTask.setAttribute("class", "unchecked todo-container")
    newTask.setAttribute("id", task)
    // Checkbox
    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", task)   
    // Add <label>
    let label = document.createElement('label')
    // Adds <li> to <ul>
    list.append(newTask)
    // Add <label> to <li>
    newTask.append(label)
    // Add checked box to <li>
    label.append(checkbox)
    // Adds text to <li>
    label.append(task)
    // Add a close button to each <li>
    let button = document.createElement('button')
    button.setAttribute("type", "button")
    button.setAttribute("id", task)
    button.setAttribute("style", "float:right")
    button.append("Remove Task")
    label.append(button)
  }
}

// Change status from unclicked to clicked and vice versa
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'INPUT') {
    // Gets clicked id
    let which = event.target.id
    let doneTask = document.getElementById(which)
    // Find out class to see if it is checked or unchecked
    let doneTaskAttribute = doneTask.getAttribute("class")
    if (doneTaskAttribute === "unchecked todo-container") {
      // Changes clicked element to checked class
      doneTask.setAttribute("class", "checked todo-container")
      // -1 Unchecked Count
      let count = uncheckedCountSpan.innerHTML
      count = count - 1
      uncheckedCountSpan.textContent = count
    }
    else if (doneTaskAttribute === "checked todo-container") {
      // +1 Unchecked Count
      let count = uncheckedCountSpan.innerHTML
      count++
      uncheckedCountSpan.textContent = count
      // Changes clicked element to unchecked class
      doneTask.setAttribute("class", "unchecked todo-container")
    }
  }
}, true)

list.addEventListener('click', function(ev2){
  if (ev2.target.tagName === "BUTTON") {
    // Removes the <li>
    let which = event.target.id
    let removing = document.getElementById(which)
    let removingAttribute = removing.getAttribute("class")
    removing.remove()
    // Change the Item Count
    let count = itemCountSpan.innerHTML
    let count2 = uncheckedCountSpan.innerHTML
    if (removingAttribute === "unchecked todo-container") {
      count = count - 1
      itemCountSpan.innerHTML = count
      count2 = count2 - 1
      uncheckedCountSpan.innerHTML = count2
    }
    else if (removingAttribute === "checked todo-container") {
      count = count - 1
      itemCountSpan.innerHTML = count
    }
  }
}) 
