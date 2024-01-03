import { TodosProps } from '@/App';
import { Checkbox } from './ui/checkbox';

interface TodoItemProps {
  task: TodosProps;
}

export const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const { note, isDone } = task;
  return (
    <li className=" p-2 last:mb-0 flex items-center border-2 rounded-lg">
      <Checkbox className="mr-2 focus-visible:ring-cyan-400" checked={isDone} />
      <p>{note}</p>
    </li>
  );
};
