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

  const handleIsChecked = (id: string) => {
    const isDoneTask = notes.map((note) => {
      if (note.id === id) {
        return { ...note, isDone: !note.isDone };
      } else {
        return note;
      }
    });

    setNotes(isDoneTask);
  };

  return (
    <>
      {
        <ul
          className={clsx(
            'flex flex-col gap-4 bg-slate-400 p-4 rounded-lg',
            className,
          )}
        >
          {([] && notes).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteItem={handleDeleteItem}
              handleIsChecked={handleIsChecked}
            />
          ))}
          {!notes.length && (
            <div className="flex flex-col items-center">
              <h2 className="">Empty 😥</h2>
              <p>Please add your first note... </p>
            </div>
          )}
        </ul>
      }
    </>
  );
};
