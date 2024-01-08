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

  const handleEditTodo = (task: TodosProps) => {
    const isDoneTask = notes.map((n) => {
      if (n.id === task.id) {
        return { ...task };
      } else {
        return n;
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
          {notes.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDeleteItem={handleDeleteItem}
              handleEditTodo={handleEditTodo}
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
