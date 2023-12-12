import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      const newTodo: Todo = {
        id: Math.random(),
        text: inputText,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const handleToggleCompletion = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="my-24 p-4 max-w-[479px] mx-auto border border-solid border-[#E2E8F0]">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a to-do"
          className="border border-gray-300 rounded-l py-2 px-3 focus:outline-none focus:border-blue-500 flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompletion(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="ml-auto bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
