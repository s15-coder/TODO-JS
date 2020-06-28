import {Todo} from './todo.class';

export class TodoList {

    constructor() {
        this.cargarLocalStorage();
    }
    nuevoTodo(todo) {
        
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completed = !todo.completed;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    borrarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

       this.todos = this.todos.map(Todo.fromJSON);
    }

}