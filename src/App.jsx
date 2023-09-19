import "./App.css";
import { useEffect, useState } from "react";

import { db } from "./firebase";

import Todo from "./Todo";

import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

import { FiPlus } from "react-icons/fi";

function MeuComponente() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      return;
    }

    const todo = {
      text: text,
      completed: false,
    };

    setText("");

    await addDoc(collection(db, "todos"), todo);
  };

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  const deleteTodo = async (todo) => {
    await deleteDoc(doc(db, "todos", todo.id));
  };

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Adicionar nova tarefa"
        />
        <button type="submit">
          <FiPlus />
        </button>
      </form>
      <ul className="todo-container">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default MeuComponente;
