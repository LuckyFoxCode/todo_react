import { Category, SelectedCategory } from 'utils/types';
import s from '../Categories.module.scss';
import { CategoriesListItem } from './';

interface CategoriesListProps {
  data: Category[];
  setData: React.Dispatch<React.SetStateAction<Category[]>>;
  selectedCategory: SelectedCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<SelectedCategory>>;
}

export const CategoriesList: React.FC<CategoriesListProps> = ({
  data,
  setData,
  selectedCategory,
  setSelectedCategory,
}) => {
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
          handleDeleteCategory={handleDeleteCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </ul>
  );
};
