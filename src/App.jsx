// eslint-disable-next-line react/prop-types
const TodoItem = ({ children }) => {
  return <li>{children}</li>;
};

const Todos = () => {
  return (
    <ul>
      <TodoItem>Bread</TodoItem>
      <TodoItem>Milk</TodoItem>
      <TodoItem>Beer</TodoItem>
    </ul>
  );
};

function App() {
  return <Todos />;
}

export default App;
