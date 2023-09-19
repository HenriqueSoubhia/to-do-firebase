import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.completed ? "todo completed" : "todo"}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
          onChange={() => {
            toggleComplete(todo);
          }}
        />
        <p>{todo.text}</p>
      </div>
      <button
        onClick={() => {
          deleteTodo(todo);
        }}
      >
        <BsFillTrashFill />
      </button>
    </li>
  );
};

export default Todo;
