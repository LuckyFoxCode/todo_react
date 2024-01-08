import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TodoForm, TodoList } from '@/components/Todo';
import { folders } from '@/data/folders';
import { todos } from '@/data/todos';
import { TodosProps } from '@/utils/types';
import { PlusIcon, TextAlignLeftIcon, ThickArrowLeftIcon } from '@radix-ui/react-icons';
import { cn } from './lib/utils';

// const colors = {
//   indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
//   cyan: 'bg-cyan-600 hover:bg-cyan-700 text-white',
// };

export const App = () => {
  const [notes, setNotes] = useState<TodosProps[]>(todos);
  const [isShow, setIsShow] = useState<boolean>(true);

  // let colorClasses = colors[color];

  const toggleAsideBar = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className="h-screen flex">
      <aside className="relative flex flex-col bg-slate-300 pt-10 pb-3 px-3 mr-3">
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
        <ul className="pl-4 mb-4">
          {folders.map((f) => (
            <li
              key={f.id}
              className={cn(
                `flex items-center mb-4 last:mb-0 p-2 rounded-md`,
                `${f.isActive && 'bg-white'}`,
              )}
            >
              <div
                className={cn(`size-4 rounded-full mr-2 bg-${f.bgColor}-300`)}
              />
              {isShow && <p>{f.folder}</p>}
            </li>
          ))}
        </ul>
        <Button variant="ghost" className="mb-4">
          <PlusIcon className="mr-2" /> {isShow && 'All Folder'}
        </Button>
      </aside>
      <div className="w-auto bg-slate-500 rounded-lg">
        <TodoForm setNotes={setNotes} />
        <TodoList notes={notes} setNotes={setNotes} />
      </div>
    </div>
  );
};
