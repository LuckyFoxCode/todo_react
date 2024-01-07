import { useState } from 'react';
import { TodosProps } from '@/utils/types';
import { Button, Input } from '../common';

interface TodoFormProps {
  setNotes: React.Dispatch<React.SetStateAction<TodosProps[]>>;
}

export const TodoForm: React.FC<TodoFormProps> = ({ setNotes }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNotes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), note: inputValue, isDone: false },
    ]);

    setInputValue('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-4 flex mb-3 shadow-lg"
    >
      <Input
        type="text"
        placeholder="Note..."
        value={inputValue}
        onChange={handleInputValue}
        className="mr-2"
      />
      <Button
        type="submit"
        disabled={inputValue.length === 0}
        className={`${!inputValue.length && 'bg-slate-100 text-slate-200'}`}
      >
        Add note
      </Button>
    </form>
  );
};
