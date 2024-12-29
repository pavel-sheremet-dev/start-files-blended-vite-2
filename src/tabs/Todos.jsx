import { useState } from 'react';
import Text from '../components/Text/Text';
import { nanoid } from 'nanoid';

const initial = { text: '', id: '' };

const Todos = () => {
  const [todos, setTodos] = useState(initial);
    const addTodo = (text) => {
    const newTodo = {text:text, id: nanoid()}
    setTodos(prev => [...prev, newTodo]);
  }
  const deleteTodo = id => {setTodos(prev => prev.filter(item => item.id !== id));}

  return <></>;
};

export default Todos;
