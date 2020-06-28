export class Todo{
    static fromJSON({tarea,completed,id,dateCreated}){
        const tempTodo = new Todo(tarea);
        tempTodo.completed = completed;
        tempTodo.id = id;
        tempTodo.dateCreated = dateCreated;
        return tempTodo;
    }
    constructor(tarea){
        this.tarea = tarea;
        this.completed = false;
        this.id = new Date().getTime();
        this.dateCreated = new Date();
    }
    printTodo(){
        console.log(`${this.tarea} - ${this.id}`);
        
    }
}