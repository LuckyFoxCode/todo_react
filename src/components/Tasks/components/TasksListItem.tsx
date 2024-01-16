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
      <label className={s.labelWrapper}>
        <input
          id={id}
          type="checkbox"
          checked={isDone}
          className={s.labelWrapper__checkbox}
          onChange={handleToggleCheckbox}
        />
        <span className={s.labelWrapper__customCheckbox}>
          <Icon
            name="Done"
            size={16}
            fill="white"
            className={s.labelWrapper__customCheckbox_icon}
          />
        </span>
      </label>
      <p className={s.list__item_name}>{description}</p>
      <Icon
        name="Trash"
        size={20}
        fill="#1E202C"
        className={s.list__item_icon}
        onClick={() => handleRemoveTask(id)}
      />
    </li>
  );
};
