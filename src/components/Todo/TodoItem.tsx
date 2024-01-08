import { useState } from 'react';
import { cn } from '@/lib/utils';
import { TodosProps } from '@/utils/types';
import { Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface TodoItemProps {
  todo: TodosProps;
  handleDeleteItem: (id: string) => void;
  handleEditTodo: (task: TodosProps) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  handleDeleteItem,
  handleEditTodo,
}) => {
  const { id, note, isDone } = todo;

  const [isEditing, setIsEditing] = useState<boolean>(!false);

  const isEditingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleEditTodo({ ...todo, note: e.target.value });
  };

  return (
    <li
      className={cn(
        `flex items-center p-2 rounded-md bg-slate-200 shadow-md transition-shadow hover:shadow-cyan-300 ${
          isDone && 'shadow-green-300 bg-green-200'
        }`,
      )}
    >
      {isEditing ? (
        <p
          onClick={() => handleEditTodo(todo)}
          className="flex justify-center item-center grow cursor-pointer mr-2"
        >
          {note}
        </p>
      ) : (
        <Input type="text" value={note} onChange={isEditingInput} />
      )}
      <Button
        onClick={() => setIsEditing((prev) => !prev)}
        className="bg-transparent hover:bg-transparent"
      >
        <Pencil1Icon className="size-6 text-gray-700 transition-colors hover:text-yellow-400" />
      </Button>

      <Button
        onClick={() => handleDeleteItem(id)}
        className="bg-transparent hover:bg-transparent"
      >
        <TrashIcon className="size-6 text-gray-700 transition-colors hover:text-red-400 cursor-pointer" />
      </Button>
    </li>
  );
};
