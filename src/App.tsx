import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TodoList } from '@/components/TodoList';

export interface PeopleProps {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
}

const people = [
  {
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
  },
  {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
  },
  {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
  },
  {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment:
      'pioneering cortisone drugs, steroids and birth control pills',
  },
  {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
  },
];

function App() {
  const handlerClick = () => {
    console.log('Click');
  };
  return (
    <Card className="w-96 bg-slate-600 border-none m-auto mt-5 p-4">
      <h1 className="text-center text-cyan-400 mb-3">Super Todo:</h1>
      <Card className="bg-transparent border-none">
        <Input placeholder="Edit..." className=" focus-visible:ring-cyan-400" />
        <Button
          variant={'outline'}
          onClick={handlerClick}
          className="focus-visible:ring-cyan-400"
        >
          Add task
        </Button>
      </Card>
      <TodoList people={people} />
    </Card>
  );
}

export default App;
