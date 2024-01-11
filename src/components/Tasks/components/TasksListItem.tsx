import { Icon } from 'components/common';
import { Tasks } from 'utils/types';
import s from '../Tasks.module.scss';

interface TasksListItemProps {
  task: Tasks;
}

export const TasksListItem: React.FC<TasksListItemProps> = ({ task }) => {
  const { description } = task;
  return (
    <li className={s.list__item}>
      <p className={s.list__item_name}>{description}</p>
      <Icon name="Plus" size={18} fill="gray" className={s.list__item_icon} />
    </li>
  );
};
