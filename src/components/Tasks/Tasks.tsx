import { tasks } from 'data/tasks';
import { SelectedCategory } from 'utils/types';
import { TasksList } from './components';
import s from './Tasks.module.scss';

interface TasksProps {
  selectedCategory: SelectedCategory;
}

export const Tasks: React.FC<TasksProps> = ({ selectedCategory }) => {
  return (
    <div className={s.tasks}>
      {tasks.length === 0 ? (
        <span className={s.tasks__descr}>Tasks is empty... 😢</span>
      ) : (
        <TasksList selectedCategory={selectedCategory} />
      )}
    </div>
  );
};
