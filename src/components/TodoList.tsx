import { TodosProps } from '@/App';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: TodosProps[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="my-6 px-5 py-4 [&>li]:mb-2 bg-slate-100 rounded-lg">
      {([] && todos).map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
