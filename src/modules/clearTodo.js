import data from './data.js';
import display from './display.js';

const clearTodo = () => {
  let count = 1;
  data.todos = data.todos.filter((todo) => todo.completed !== true);

  data.todos = data.todos.map((todo) => ({
    description: todo.description,
    completed: todo.completed,
    index: count+ 1,
  }));
  localStorage.setItem('todos', JSON.stringify(data.todos));
  display();
};

export default clearTodo;