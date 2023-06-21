import "./App.css";

//components
import Header from "./component/Header";
import TodoItem from "./component/TodoItem";
import AddButton from "./component/Button";

//styling
import "./style.css";

function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem item="Grapes" />
      <TodoItem item="Apple" />
      <TodoItem item="Bannana" />
      <TodoItem item="Orange" />
      <TodoItem item="Lemon" />
      <AddButton />
    </div>
  );
}

export default App;
