import clsx from 'clsx';
import { TodosProps } from '@/utils/types';
import { TodoItem } from './';

interface TodoListProps {
  className?: string;
  notes: TodosProps[];
  setNotes: React.Dispatch<React.SetStateAction<TodosProps[]>>;
}

export const TodoList: React.FC<TodoListProps> = ({
  notes,
  className,
  setNotes,
}) => {
  const handleDeleteItem = (id: string) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <>
      {!notes.length ? (
        <div className="flex flex-col items-center">
          <h2 className="">Not found notes...</h2>
          <p>Please add your first note 😥</p>
        </div>
      ) : (
        <ul
          className={clsx(
            'flex flex-col gap-3 bg-slate-100 p-4 rounded-lg',
            className,
          )}
        >
          {([] && notes).map((todo) => (
            <TodoItem key={todo.id} todo={todo} onClick={handleDeleteItem} />
          ))}
        </ul>
      )}
    </>
  );
};
