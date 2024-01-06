import { TodosProps } from '@/utils/types';

interface TodoItemProps {
  todo: TodosProps;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { note } = todo;
  return (
    <li className="flex p-2 rounded-md shadow-md hover:shadow-cyan-200 transition-shadow justify-center">
      {note}
    </li>
  );
};
