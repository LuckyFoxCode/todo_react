import { TodoForm, TodoList } from '@/components/Todo';

export const App = () => {
  return (
    <div className="w-full bg-slate-500 rounded-lg px-3 py-6">
      <h1 className="text-cyan-400 text-center text-xl">Super Todo App?</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};
