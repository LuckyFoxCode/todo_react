import { Button, Input } from '../common';

export const TodoForm = () => {
  return (
    <form className="bg-white rounded-lg p-4 flex mb-3 shadow-lg">
      <Input type="text" placeholder="Edit notes" className="mr-2" />
      <Button type="submit">Add note</Button>
    </form>
  );
};
