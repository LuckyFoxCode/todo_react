import { TodoForm } from '@/components/Todo';
import { todos } from './data/todos';

export const App = () => {
  return (
    <div className="w-full bg-slate-500 rounded-lg p-2">
      <h1 className="text-cyan-400 text-center text-xl">Super Todo App?</h1>
      <TodoForm />
      {!todos.length && (
        <div className="flex flex-col items-center">
          <h2 className="">Not found notes...</h2>
          <p>Please add your first note 😥</p>
        </div>
      )}
    </div>
  );
};
