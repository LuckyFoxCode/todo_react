import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { TodoList } from '@/components/TodoList';

export interface TodosProps {
  id: string;
  note: string;
  isDone: boolean;
}

const todos: TodosProps[] = [
  { id: '0', note: 'Awesome library Shadcn/UI 🔥', isDone: true },
  { id: '1', note: 'React is it freamwork or library? 🙃', isDone: false },
  { id: '3', note: 'Added new task in Super Todo App 👀', isDone: true },
];

function App() {
  const handlerClick = () => {
    console.log('Click');
  };
  return (
    <Card className="w-3/4 bg-slate-600 border-none m-auto mt-5 p-4">
      <h1 className="text-center text-cyan-400 mb-3">Super Todo:</h1>
      <Card className="bg-transparent border-none flex">
        <Input
          placeholder="Edit..."
          className=" focus-visible:ring-cyan-400 mr-2"
        />
        <Button
          variant={'outline'}
          onClick={handlerClick}
          className="focus-visible:ring-cyan-400"
        >
          Add task
        </Button>
      </Card>
      <TodoList todos={todos} />
    </Card>
  );
}

export default App;
