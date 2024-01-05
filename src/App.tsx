import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { TodoList } from '@/components/TodoList';
import { Toaster } from './components/ui/toaster';
import { TodoForm } from './components/TodoForm';

export interface TodosProps {
  id: string;
  note: string;
  isDone: boolean;
}

export const App = () => {
  const [todos, setTodos] = useState<TodosProps[]>([
    { id: '0', note: 'Awesome library Shadcn/UI 🔥', isDone: true },
    { id: '1', note: 'React is it freamwork or library? 🙃', isDone: false },
    { id: '3', note: 'Added new task in Super Todo App 👀', isDone: true },
  ]);

  return (
    <>
      <Card className="w-3/4 bg-slate-600 border-none m-auto mt-5 p-4">
        <h1 className="text-center text-cyan-400 mb-3">Super Todo:</h1>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} />
      </Card>
      <Toaster />
    </>
  );
};
