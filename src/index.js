import './styles.css';

import {Todo, TodoList} from './classes/index.js';
import { createTodoHtml } from './js/componentes';


//Init TODOS-List.
export const todoList = new TodoList()
todoList.todos.forEach((todo)=> createTodoHtml(todo));

