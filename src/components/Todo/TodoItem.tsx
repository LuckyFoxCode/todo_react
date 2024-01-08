import { cn } from '@/utils/cn';
import { TodosProps } from '@/utils/types';
import { Icon } from '@iconify/react';

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
      className={cn(
        `flex items-center p-2 rounded-md bg-slate-200 shadow-md transition-shadow hover:shadow-cyan-300 ${
          isDone && 'shadow-green-300 bg-green-200'
        }`,
      )}
    >
      <p
        onClick={() => handleIsChecked(id)}
        className="flex justify-center item-center grow cursor-pointer mr-2"
      >
        {note}
      </p>
      <button onClick={() => console.log('Edit')} className="mr-2">
        <Icon
          icon="iconoir:edit-pencil"
          className="size-6 text-gray-700 transition-colors hover:text-yellow-400"
        />
      </button>

      <Icon
        icon="iconoir:trash"
        className="size-5 text-gray-700 transition-colors hover:text-red-400 cursor-pointer"
        onClick={() => handleDeleteItem(id)}
      />
    </li>
  );
};
