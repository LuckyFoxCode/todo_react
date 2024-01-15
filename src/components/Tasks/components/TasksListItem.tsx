import { Icon } from 'components/common';
import { Tasks } from 'utils/types';
import s from '../Tasks.module.scss';

interface TasksListItemProps {
  task: Tasks;
  handleRemoveTask: (id: string) => void;
  handleToggleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TasksListItem: React.FC<TasksListItemProps> = ({
  task,
  handleRemoveTask,
  handleToggleCheckbox,
}) => {
  const { id, description, isDone } = task;

  return (
    <li className={s.list__item}>
      <input
        id={id}
        type="checkbox"
        checked={isDone}
        className={s.list__item_checkbox}
        onChange={handleToggleCheckbox}
      />
      <p className={s.list__item_name}>{description}</p>
      <Icon
        name="Plus"
        size={18}
        fill="gray"
        className={s.list__item_icon}
        onClick={() => handleRemoveTask(id)}
      />
    </li>
  );
};
