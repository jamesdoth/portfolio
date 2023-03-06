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

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-gray-200 text-2xl font-medium mb-4'>My Todo List</h1>
      <div className='flex mb-4'>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='form-input w-full rounded-lg text-left pl-2'
          placeholder='Add a new todo'
        />
        <button
          onClick={handleAddTodo}
          className='ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'
        >
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          id={todo.id}
          onDelete={handleDeleteTodo}
        />
      ))}
    </div>
  );
};
