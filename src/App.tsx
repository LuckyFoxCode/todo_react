import { Categories, Header, Tasks } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Categories />
        <Tasks />
      </main>
    </>
  );
};
