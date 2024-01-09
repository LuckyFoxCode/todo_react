import { Button } from 'components/common';
import { categories } from 'data/categories';
import { useState } from 'react';
import { CategoriesProps } from 'utils/types';
import { CategoriesList } from './components';
import s from './Categories.module.scss';

export const Categories: React.FC = () => {
  const [data, setData] = useState<CategoriesProps[]>(categories);

  const handleAddCategory = () => {
    console.log('Add Category');
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
          onClick={handleAddCategory}
          className={s.categories__allTaskBtn}
        />
      )}
      <CategoriesList data={data} setData={setData} />
      <Button
        title="Add categories"
        withIcon
        iconName="Plus"
        iconSize={16}
        iconFill="#344054"
        iconStyle={{ marginRight: '5px' }}
        onClick={handleAddCategory}
      />
    </aside>
  );
};
