import { Card } from '@/components/ui/card';
import { TodoList } from '@/components/TodoList';
import { TodoForm } from './components/TodoForm';

export interface TodosProps {
  id: string;
  note: string;
  isDone: boolean;
}

const todos: TodosProps[] = [
  { id: '0', note: 'Awesome library Shadcn/UI 🔥', isDone: true },
  { id: '1', note: 'React is it freamwork or library? 🙃', isDone: false },
  { id: '3', note: 'Added new task in Super Todo App 👀', isDone: true },
];

export const App = () => {
  return (
    <Card className="w-3/4 bg-slate-600 border-none m-auto mt-5 p-4">
      <h1 className="text-center text-cyan-400 mb-3">Super Todo:</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </Card>
  );
};
