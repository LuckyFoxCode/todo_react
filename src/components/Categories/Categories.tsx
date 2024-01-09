import { Button } from 'components/common';
import s from './Categories.module.scss';

export const Categories: React.FC = () => {
  const handleAddCategory = () => {
    console.log('Add Category');
  };

  return (
    <aside className={s.categories}>
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
