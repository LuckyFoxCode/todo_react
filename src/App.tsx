import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TodoForm, TodoList } from '@/components/Todo';
import { todos } from '@/data/todos';
import { TodosProps } from '@/utils/types';
import { PlusIcon, TextAlignLeftIcon, ThickArrowLeftIcon } from '@radix-ui/react-icons';

export const App = () => {
  const [notes, setNotes] = useState<TodosProps[]>(todos);
  const [isShow, setIsShow] = useState<boolean>(true);

  const toggleAsideBar = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="flex">
      <aside className="relative flex flex-col bg-slate-300 p-3 mr-3">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleAsideBar}
          className="absolute top-4 right-0 size-7 bg-slate-50"
        >
          <ThickArrowLeftIcon className="size-5" />
        </Button>
        <Button variant="ghost" className="mb-4">
          <TextAlignLeftIcon className="mr-2" /> {isShow && 'All task'}
        </Button>
        <div className="size-4 bg-orange-400 rounded-full mb-4" />
        <div className="size-4 bg-orange-400 rounded-full mb-4" />
        <div className="size-4 bg-orange-400 rounded-full mb-4" />
        <div className="size-4 bg-orange-400 rounded-full mb-4" />
        <div className="size-4 bg-orange-400 rounded-full mb-4" />
        <Button variant="ghost" className="mb-4">
          <PlusIcon className="mr-2" /> {isShow && 'Add Folder'}
        </Button>
      </aside>
      <main className="w-full bg-slate-500 rounded-lg">
        <TodoForm setNotes={setNotes} />
        <TodoList notes={notes} setNotes={setNotes} />
      </main>
    </div>
  );
};
