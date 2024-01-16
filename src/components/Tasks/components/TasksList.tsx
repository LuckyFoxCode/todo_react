import { AddTask } from 'components/common';
import { tasks } from 'data';
import { useState } from 'react';
import { SelectedCategory, Tasks } from 'utils/types';
import s from '../Tasks.module.scss';
import { TasksListItem } from './TasksListItem';

interface TasksListProps {
  selectedCategory: SelectedCategory;
}

export const TasksList: React.FC<TasksListProps> = ({ selectedCategory }) => {
  const [notes, setNotes] = useState<Tasks[]>(tasks);
  const { id, title, color } = selectedCategory;

  const isEmptyTasks = notes.filter((n) => n.categoryId === id);

  const handleRemoveTask = (id: string) => {
    const filteredTasks = notes.filter((note) => note.id !== id);

    setNotes(filteredTasks);
  };

  const handleToggleCheckbox = ({
    target: { id, checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setNotes((prev) =>
      prev.map((el) => {
        if (el.id === id) {
          el.isDone = checked;
        }
        return el;
      }),
    );
  };

  return (
    <div className={s.tasks__wrapper}>
      <h2 className={s.tasks__title} style={{ color: color }}>
        {title}
      </h2>
      {!!isEmptyTasks.length && (
        <ul className={s.list}>
          {notes
            .filter((task) => task.categoryId === id)
            .map((t) => (
              <TasksListItem
                key={t.id}
                task={t}
                handleRemoveTask={handleRemoveTask}
                handleToggleCheckbox={handleToggleCheckbox}
              />
            ))}
        </ul>
      )}
      {<AddTask categoryId={id} setNotes={setNotes} />}
    </div>
  );
};
