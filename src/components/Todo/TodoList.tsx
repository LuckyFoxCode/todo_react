import clsx from 'clsx';
import { todos } from '@/data/todos';
import { TodoItem } from './';

interface TodoListProps {
  className?: string;
}

export const TodoList: React.FC<TodoListProps> = ({ className }) => {
  return (
    <>
      {todos.length ? (
        <ul
          className={clsx(
            'flex flex-col gap-3 bg-slate-100 p-4 rounded-lg',
            className,
          )}
        >
          {([] && todos).map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="">Not found notes...</h2>
          <p>Please add your first note 😥</p>
        </div>
      )}
    </>
  );
};
