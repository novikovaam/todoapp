'use strict'

const toDoInput = document.querySelector('.toDoInput')
const toDoBtn = document.querySelector('.toDoBtn')
const toDoList = document.querySelector('.toDoList')
const toDoDone = document.querySelector('.toDoList')
//const inputValue = document.getElementById('iii').value

toDoBtn.addEventListener('click', addTask)
toDoList.addEventListener('click', deleteTask)
toDoDone.addEventListener('click', toCrossOut)


function addTask(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('tasks')

    const newTask = document.createElement('li')
    while (toDoInput.value && toDoInput.value.trim() !== '' ) {
    newTask.innerText = toDoInput.value
    toDoInput.value = ''
    newTask.classList.add('todoItem')
    todoDiv.appendChild(newTask)

    const doneButton = document.createElement('button')
    doneButton.innerHTML = '<i class="fas fa-check-circle"></i>'
    doneButton.classList.add('doneBtn')
    todoDiv.appendChild(doneButton)

    const deleteTaskBtn = document.createElement('button')

    deleteTaskBtn.innerHTML = '<i class="far fa-trash-alt" ></i>'
    deleteTaskBtn.classList.add('deleteTaskBtn')
    todoDiv.appendChild(deleteTaskBtn)
    toDoList.appendChild(todoDiv)
    }
}

function deleteTask(event) {
    const theTarget = event.target;
    if (theTarget.classList[0] === 'deleteTaskBtn') {
        const removeTask = theTarget.parentElement;
        removeTask.remove();
    }
}

function toCrossOut(event) {
    const theTarget = event.target;
    if (theTarget.classList[0] === 'doneBtn') {
        const сrossOutTask = theTarget.parentElement;
        сrossOutTask.classList.add('crossOut');

    }
}

