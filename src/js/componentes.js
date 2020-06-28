import { Todo } from "../classes";
import { todoList } from "../index.js";

//Html references.
const htmlReferenceList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const clearCompleted = document.querySelector('.clear-completed');
const filters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

//It creates and inserts TODO html element.
export const createTodoHtml = (todo) => {

    const todoHtml = `
    <li class="${todo.completed ? 'completed' : ''} " data-id="${todo.id}">
    <div class="view">
        <input class="toggle" type="checkbox"  ${todo.completed ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;
    const divHtml = document.createElement('div');

    divHtml.innerHTML = todoHtml;

    htmlReferenceList.append(divHtml.firstElementChild);

    return divHtml.firstElementChild;
}

txtInput.addEventListener('keyup', (event) => {
    const value = event.target.value;
    if (event.keyCode === 13 && value.length > 0) {
        const todo = new Todo(value);
        createTodoHtml(todo);
        event.target.value = '';
        todoList.nuevoTodo(todo);
    }
}
);

htmlReferenceList.addEventListener('click', (event) => {
    const nameElement = event.target.localName;
    const parentElement = event.target.parentElement.parentElement;
    const todoId = parentElement.getAttribute('data-id');
    if (nameElement.includes('input')) {

        todoList.marcarCompletado(todoId);
        parentElement.classList.toggle('completed');

    } else if (nameElement.includes('button')) {

        todoList.eliminarTodo(todoId);
        htmlReferenceList.removeChild(parentElement);

    }

});

clearCompleted.addEventListener('click', () => {
    todoList.borrarCompletados();
    for (let i = htmlReferenceList.children.length - 1; i >= 0; i--) {
        const element = htmlReferenceList.children[i];
        console.log(element.classList);
        if (element.classList.contains('completed')) {
            htmlReferenceList.removeChild(element);
        }
    }

});

filters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if (!filter) { return; }

    anchorFilters.forEach(element=>   element.classList.remove('selected'));
event.target.classList.add('selected');
    

    for (const elemento of htmlReferenceList.children) {
        elemento.classList.remove('hidden');
        const completed = elemento.classList.contains('completed');

        switch (filter) {
            case 'Completados':
                if (!completed) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Pendientes':
                if (completed) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }

});