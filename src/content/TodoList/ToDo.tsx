import { useState } from 'react';

interface TodoProps {
  title: string;
  id: number;
  onDelete: (id: number) => void;
}

export const Todo = ({ title, id, onDelete }: TodoProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className='flex items-center mb-4'>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={handleComplete}
        className='form-checkbox h-6 w-6 text-purple-600'
      />
      <p
        className={`ml-3 text-lg font-medium ${
          isCompleted ? 'line-through text-gray-500' : ''
        }`}
      >
        {title}
      </p>
      <button onClick={handleDelete} className='ml-auto text-red-600'>
        Delete
      </button>
    </div>
  );
};
