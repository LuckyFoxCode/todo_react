import { tasks } from 'data/tasks';
import { TasksList } from './components';
import s from './Tasks.module.scss';

interface TasksProps {}

export const Tasks: React.FC<TasksProps> = () => {
  return (
    <div className={s.tasks}>
      {Boolean(!tasks.length) && (
        <span className={s.tasks__descr}>Tasks is empty... 😢</span>
      )}
      {!!tasks.length && <TasksList />}
    </div>
  );
};
