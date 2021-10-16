const removeButtons = document.querySelectorAll('li button');
const addItemForm = document.querySelector('#add-item-form');
const listItemInput = document.querySelector('#add-list-item');
const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(e) {
    if (e.target.tagName ==='BUTTON') {
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});

function addTodos () {
    const newItem = document.createElement('li');
    newItem.innerText = listItemInput.value + ' ';
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.classList.add('delete');
    newItem.appendChild(removeBtn);
    todoList.appendChild(newItem);
    listItemInput.value = '';
    console.log("you just added an item!");
}

addItemForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addTodos();
})


