import { useState } from 'react';
import { Tasks } from 'utils/types';
import { Button, Input } from '../';
import s from './AddTask.module.scss';

interface AddTaskProps {
  categoryId: string;
  setNotes: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

export const AddTask: React.FC<AddTaskProps> = ({ categoryId, setNotes }) => {
  const [inputVal, setInputVal] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const task = {
      id: crypto.randomUUID(),
      categoryId,
      description: inputVal,
      isDone: false,
    };

    setNotes((prevState) => [...prevState, task]);
    setInputVal('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <Input
        value={inputVal}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputVal(e.target.value)
        }
        placeholder="Add task"
      />
      <Button
        disabled={inputVal.length === 0}
        type="submit"
        title="Add"
        className={s.form__btn}
      />
    </form>
  );
};
