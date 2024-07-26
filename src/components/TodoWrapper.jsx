import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), name: todo, completed: false, isEditing: false },
    ]);
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const handleEditTask = (name, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, name, isEditing: !todo.isEditing } : todo
      )
    );
  };

  useEffect(() => {
    console.log(todos); // This will log the updated state of todos
  }, [todos]);

  return (
    <div className="TodoWrapper">
      <h1>Todo Lists!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTask={handleEditTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={handleToggleComplete}
            deleteTodo={handleDeleteTodo}
            editTodo={handleEditTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
