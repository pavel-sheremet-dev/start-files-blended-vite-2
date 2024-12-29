import TodoList from '../components/TodoList/TodoList';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const storageTodo = localStorage.getItem('todos');
    if (storageTodo) {
      return JSON.parse(storageTodo);
    }
    return [];
  });

  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addNewTodo = inputValue => {
    console.log(inputValue);
  };
  return (
    <div>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Todos;
