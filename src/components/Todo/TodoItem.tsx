import clsx from 'clsx';
import { TodosProps } from '@/utils/types';

interface TodoItemProps {
  todo: TodosProps;
  handleDeleteItem: (id: string) => void;
  handleIsChecked: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleDeleteItem,
  handleIsChecked,
}) => {
  const { id, note, isDone } = todo;
  return (
    <li
      className={clsx(
        `flex items-center p-2 rounded-md bg-slate-200 shadow-md hover:shadow-cyan-200 transition-shadow  ${
          isDone && 'shadow-green-300 bg-green-200'
        }`,
      )}
    >
      <p
        onClick={() => handleIsChecked(id)}
        className="flex justify-center item-center grow cursor-pointer mr-2"
      >
        {isDone && '✔️ '}
        {note}
      </p>
      <div className="mr-2 cursor-pointer" onClick={() => console.log('Edit')}>
        ✏️
      </div>
      <div className="ml-2 cursor-pointer" onClick={() => handleDeleteItem(id)}>
        🗑️
      </div>
    </li>
  );
};
