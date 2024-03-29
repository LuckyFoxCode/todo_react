import clsx from 'clsx';
import { Icon } from 'components/common';
import { Category, SelectedCategory } from 'utils/types';
import s from '../Categories.module.scss';

interface CategoriesListItemProps {
  category: Category;
  handleDeleteCategory: (id: string) => void;
  selectedCategory: SelectedCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<SelectedCategory>>;
  setSelectedAll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CategoriesListItem: React.FC<CategoriesListItemProps> = ({
  category,
  handleDeleteCategory,
  selectedCategory,
  setSelectedCategory,
  setSelectedAll,
}) => {
  const { id, title, colorTitle } = category;

  const isSelectedCategory = () => {
    setSelectedCategory({
      id,
      title,
      color: colorTitle,
    });
    setSelectedAll(false);
  };

  return (
    <li
      className={clsx(s.list__item, selectedCategory.id === id && s['active'])}
    >
      <div
        className={s.list__item_color}
        style={{ backgroundColor: colorTitle }}
      />
      <span className={s.list__item_descr} onClick={isSelectedCategory}>
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
