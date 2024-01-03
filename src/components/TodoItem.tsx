import { PeopleProps } from '@/App';

interface TodoItemProps {
  person: PeopleProps;
}

export const TodoItem: React.FC<TodoItemProps> = ({ person }) => {
  const { name, profession, accomplishment } = person;
  return (
    <li className="last:mb-0">
      <h2>Name: {name} </h2>
      <span>Profession: {profession}</span>
      <p>accomplishment: {accomplishment}</p>
    </li>
  );
};
