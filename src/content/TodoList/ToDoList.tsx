import { useState } from 'react';
import { Todo } from './ToDo';

interface TodoItem {
  title: string;
  id: number;
}

export const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleAddTodo = () => {
    if (!inputValue) return;

    const newTodo: TodoItem = {
      title: inputValue,
      id: Date.now(),
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
};
