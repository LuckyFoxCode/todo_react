import { Icon } from 'components/common/Icon';
import { CategoriesProps } from 'utils/types';
import s from '../Categories.module.scss';

interface CategoriesListItemProps {
  category: CategoriesProps;
  handleSetActiveCategory: (id: string) => void;
  handleDeleteCategory: (id: string) => void;
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = ({
  category,
  handleSetActiveCategory,
  handleDeleteCategory,
}) => {
  const { id, title, colorTitle, isActive } = category;
  return (
    <li
      className={s.list__item}
      style={{ backgroundColor: isActive ? '#fff' : '' }}
    >
      <div
        className={s.list__item_color}
        style={{ backgroundColor: colorTitle }}
      />
      <span
        className={s.list__item_descr}
        onClick={() => handleSetActiveCategory(id)}
      >
        {title}
      </span>
      <Icon
        name="Plus"
        size={16}
        fill={colorTitle}
        className={s.list__item_icon}
        onClick={() => handleDeleteCategory(id)}
      />
    </li>
  );
};
