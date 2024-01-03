import { PeopleProps } from '@/App';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  people: PeopleProps[];
}

export const TodoList: React.FC<TodoListProps> = ({ people }) => {
  return (
    <ul className="my-6 ml-6 [&>li]:mb-2">
      {([] && people).map((person) => (
        <TodoItem key={person.id} person={person} />
      ))}
    </ul>
  );
};
