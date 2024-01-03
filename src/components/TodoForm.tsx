import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

export const TodoForm = () => {
  return (
    <Card className="bg-transparent border-none flex">
      <Input
        placeholder="Edit..."
        className=" focus-visible:ring-cyan-400 mr-2"
      />
      <Button variant={'outline'} className="focus-visible:ring-cyan-400">
        Add task
      </Button>
    </Card>
  );
};
