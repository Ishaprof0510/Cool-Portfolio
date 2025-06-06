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

for ( let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
   // const name = todoObject.name;
    // const duedate = todoObject.duedate;

    const {name, duedate} = todoObject;

    const html = `
    <div> ${name} </div> 
    <div> ${duedate} </div> 
    </div> <button class = "delete-todo-button"
    onclick = "
     todoList.splice(${i}, 1);
     renderTodoList();
    "> Delete </button> 
    </div> 
    `;
    todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
    let inputElement = document.querySelector('.js-name-input');
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

