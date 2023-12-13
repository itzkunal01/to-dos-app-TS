import React, { useState } from "react";
import trashImg from "../images/svg/heroicons_trash-solid.svg";
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
    <div className="my-24 p-4 max-w-[479px] mx-auto border border-solid border-[#E2E8F0] rounded-[8px]">
      <h1 className="text-3xl font-bold">To-Do List</h1>
      <p className="text-[12px] text-[#64748B] font-medium text-start mt-7 mb-2">
        Enter Todo
      </p>
      <div className="flex mb-4 border border-[#E2E8F0] rounded-[8px] py-1 ps-6 pe-1 focus:outline-none focus:border-blue-500 flex-1">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a to-do"
          className="flex-1 focus:outline-none"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-600 hover:bg-blue-500 transition duration-200 ease-in-out text-white font-semibold p-3 rounded-[8px] focus:outline-none text-[14px]"
        >
          <span className="inline-block w-[56px]">Add</span>
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <span
              className={todo.completed ? "line-through text-[#CBD5E1]" : ""}
            >
              {todo.text}
            </span>

            <div className="ml-auto flex items-center">
              <img
                className="cursor-pointer"
                onClick={() => handleDeleteTodo(todo.id)}
                src={trashImg}
                alt="trash-image"
              />
              <svg
                onClick={() => handleToggleCompletion(todo.id)}
                className="cursor-pointer ml-3"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.75 12.5C2.75 7.115 7.115 2.75 12.5 2.75C17.885 2.75 22.25 7.115 22.25 12.5C22.25 17.885 17.885 22.25 12.5 22.25C7.115 22.25 2.75 17.885 2.75 12.5ZM16.11 10.686C16.17 10.6061 16.2134 10.5149 16.2377 10.4179C16.262 10.321 16.2666 10.2201 16.2514 10.1214C16.2361 10.0226 16.2012 9.92782 16.1489 9.8427C16.0965 9.75757 16.0276 9.68378 15.9463 9.62565C15.8649 9.56753 15.7728 9.52624 15.6753 9.50423C15.5778 9.48221 15.4769 9.47991 15.3785 9.49746C15.2801 9.51501 15.1862 9.55205 15.1023 9.60641C15.0184 9.66077 14.9462 9.73135 14.89 9.814L11.654 14.344L10.03 12.72C9.88783 12.5875 9.69978 12.5154 9.50548 12.5188C9.31118 12.5223 9.12579 12.601 8.98838 12.7384C8.85097 12.8758 8.77225 13.0612 8.76882 13.2555C8.7654 13.4498 8.83752 13.6378 8.97 13.78L11.22 16.03C11.297 16.1069 11.3898 16.1662 11.492 16.2036C11.5942 16.2411 11.7033 16.2559 11.8118 16.2469C11.9202 16.238 12.0255 16.2055 12.1201 16.1519C12.2148 16.0982 12.2967 16.0245 12.36 15.936L16.11 10.686Z"
                  fill={todo.completed ? "#76C745" : "#64748B"}
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
