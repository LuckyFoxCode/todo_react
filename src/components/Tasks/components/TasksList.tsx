import { tasks } from 'data';
import s from '../Tasks.module.scss';
import { TasksListItem } from './TasksListItem';

interface TasksListProps {}

export const TasksList: React.FC<TasksListProps> = () => {
  return (
    <div className={s.tasks__wrapper}>
      <h2 className={s.tasks__title}>Frontend</h2>
      <ul className={s.list}>
        {tasks.map((task) => (
          <TasksListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
