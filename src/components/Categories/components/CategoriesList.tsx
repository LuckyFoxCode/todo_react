import { CategoriesProps } from 'utils/types';
import s from '../Categories.module.scss';
import { CategoriesListItem } from './';

interface CategoriesListProps {
  data: CategoriesProps[];
  setData: React.Dispatch<React.SetStateAction<CategoriesProps[]>>;
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  data,
  setData,
}) => {
  const handleSetActiveCategory = (id: string) => {
    const isActive = data.map((category) => ({
      ...category,
      isActive: category.id === id ? true : false,
    }));

    setData(isActive);
  };

  const handleDeleteCategory = (id: string) => {
    const filteredCategories = data.filter((category) => category.id !== id);

    setData(filteredCategories);
  };

  return (
    <ul className={s.list}>
      {data.map((category) => (
        <CategoriesListItem
          key={category.id}
          category={category}
          handleSetActiveCategory={handleSetActiveCategory}
          handleDeleteCategory={handleDeleteCategory}
        />
      ))}
    </ul>
  );
};
