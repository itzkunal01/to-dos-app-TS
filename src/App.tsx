import "./App.css";
import MyButton from "./components/MyButton";
import TodoList from "./components/TodoList";
import TodoTaskApp from "./components/TodoTaskApp";

function App() {
  return (
    <div className="text-center bg-white min-h-screen">
      {/* Onclick optional for 1st button but text is compulsory. */}
      {/* <MyButton text="Click Me" /> */}
      {/* <MyButton onClick={() => alert("Okay")} text="Click Me Again" /> */}
      {/* MYButton can be number or boolean also. */}
      {/* <MyButton text={1} /> */}
      {/* <MyButton text={true} /> */}
      {/* <TodoList /> */}
      <TodoTaskApp />
    </div>
  );
}

export default App;
