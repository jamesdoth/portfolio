import { useState } from 'react';

interface TodoProps {
  title: string;
  id: number;
  onDelete: (id: number) => void;
}
