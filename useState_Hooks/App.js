import "./App.css";

//components
import Header from "./component/Header";
//Hooks
import Hooks from "./component/Hooks";

//styling
import "./style.css";

function App() {
  return (
    <div className="todo-container">
      <Header />
      <Hooks />
    </div>
  );
}

export default App;
