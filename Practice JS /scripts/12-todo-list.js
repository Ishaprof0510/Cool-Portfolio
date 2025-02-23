const todoList = [{
    name:'Dinner',
    duedate: '02-10-2025'
}, {
    name:'Youtube',
    duedate: '02-11-2025'
}];

renderTodoList();

function renderTodoList(){
let todoListHTML = '';

todoList.forEach( (todoObject, index) => {
const { name, duedate } = todoObject;
const html = `
    <div> ${name} </div> 
    <div> ${duedate} </div> 
    </div> <button class = "delete-todo-button js-delete-todo-button"> Delete </button> 
    </div> 
    `;
    todoListHTML += html;
});

document.querySelector('.js-todo-list').innerHTML = todoListHTML;


document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton, index) => {
 deleteButton.addEventListener('click', () => {
    todoList.splice(index, 1);
     renderTodoList();
 });
});

}

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
   addTodo();
});


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const duedate = dateInputElement.value;

    todoList.push({
        // name: name,
        //duedate: duedate,

        name, 
        duedate
    });


     inputElement.value = '';

     renderTodoList();

}

