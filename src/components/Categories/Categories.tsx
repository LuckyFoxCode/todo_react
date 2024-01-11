import { AddCategory, Button } from 'components/common';
import { categories } from 'data';
import { useState } from 'react';
import { Category, SelectedCategory } from 'utils/types';
import { CategoriesList } from './components';
import s from './Categories.module.scss';

interface CategoryProps {
  selectedCategory: SelectedCategory;
  setSelectedCategory: React.Dispatch<React.SetStateAction<SelectedCategory>>;
}

export const Categories: React.FC<CategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [data, setData] = useState<Category[]>(categories);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddCategory = () => {
    setShowModal(true);
  };

  return (
    <aside className={s.categories}>
      {!!data.length && (
        <Button
          title="All task"
          withIcon
          iconName="All"
          iconSize={18}
          iconFill="#344054"
          iconStyle={{ marginRight: '5px' }}
          className={s.categories__btn}
        />
      )}
      <CategoriesList
        data={data}
        setData={setData}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Button
        title="Add categories"
        withIcon
        iconName="Plus"
        iconSize={16}
        iconFill="#344054"
        iconStyle={{ marginRight: '5px' }}
        onClick={handleAddCategory}
        className={s.categories__btn}
      />
      {showModal && (
        <AddCategory
          setData={setData}
          setShowModal={setShowModal}
          selectedCategory={selectedCategory}
        />
      )}
    </aside>
  );
};
