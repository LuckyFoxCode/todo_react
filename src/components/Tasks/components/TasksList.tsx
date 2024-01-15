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

  return (
    <div className={s.tasks__wrapper}>
      <h2 className={s.tasks__title} style={{ color: color }}>
        {title}
      </h2>
      <ul className={s.list}>
        {notes
          .filter((task) => task.categoryId === id)
          .map((t) => (
            <TasksListItem key={t.id} task={t} />
          ))}
      </ul>
      {<AddTask categoryId={id} setNotes={setNotes} />}
    </div>
  );
};
