import { PeopleProps } from '@/App';
import { TodoItem } from './TodoItem';

interface ITodoList {
  people: PeopleProps[];
}

export const TodoList: React.FC<ITodoList> = ({ people }) => {
  return (
    <ul className="my-6 ml-6 [&>li]:mb-2">
      {([] && people).map((person) => (
        <TodoItem key={person.id} person={person} />
      ))}
    </ul>
  );
};
