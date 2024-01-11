import { Categories, Header, Tasks } from 'components';
import { useState } from 'react';
import { SelectedCategory } from './utils';

export const App = () => {
  const [selectedCategory, setSelectedCategory] = useState<SelectedCategory>({
    id: '',
    title: '',
    color: '',
  });

  return (
    <>
      <Header />
      <main className="main">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Tasks selectedCategory={selectedCategory} />
      </main>
    </>
  );
};
