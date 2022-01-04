export default class Model {
  constructor() {
    this.view = null;
    this.todos = [];
    this.currentId = 0;
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description) {
    const todo = {
      //Si una propiedad se llama igual que su valor, se puede dejar sin asignar
      id: this.currentId++,
      title,
      description,
      complete: false,
    };
    this.todos.push(todo);

    //Retornamos un clon de mi objeto (a un objeto vacio le asigno las propiedades de otro)
    //Esto para asegurarnos de que el modelo anterior no se vea afectado
    return Object.assign({}, todo);
    //Otra forma de clonar un objeto es mediante la expansion...
    //return {...todo};
  }
}
