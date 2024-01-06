import { useState } from 'react';
import { TodoForm, TodoList } from '@/components/Todo';
import { todos } from './data/todos';
import { TodosProps } from './utils/types';

export const App = () => {
  const [notes, setNotes] = useState<TodosProps[]>(todos);
  return (
    <div className="w-full bg-slate-500 rounded-lg px-3 py-6">
      <h1 className="text-cyan-400 text-center text-xl mb-3">
        Super Todo App?
      </h1>
      <TodoForm setNotes={setNotes} />
      <TodoList notes={notes} setNotes={setNotes} />
    </div>
  );
};
