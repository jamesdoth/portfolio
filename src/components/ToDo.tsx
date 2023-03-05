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
    
  );
};
