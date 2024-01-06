import clsx from 'clsx';
import { TodosProps } from '@/utils/types';

interface TodoItemProps {
  todo: TodosProps;
  onClick: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onClick }) => {
  const { id, note, isDone } = todo;
  return (
    <li
      onClick={() => onClick(id)}
      className={clsx(
        `flex p-2 rounded-md shadow-md hover:shadow-cyan-200 transition-shadow justify-center cursor-pointer ${
          isDone && 'shadow-green-300'
        }`,
      )}
    >
      {note}
    </li>
  );
};
