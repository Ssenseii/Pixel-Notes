import { useState, useEffect } from "react";
import Input from "../components/todo/Input";
import List from "../components/todo/List";

import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  /// database

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault();

    if (input !== "") {
      addDoc(collection(db, "todos"), {
        todo: input,
        timestamp: serverTimestamp(),
      });
      setInput("");
    }
  };

  return (
    <div className="todo">
      <div className="todo__title"></div>
      <Input todo={input} setTodo={setInput} addTodo={addTodo}></Input>
      <List list={todos}></List>
    </div>
  );
};

export default Main;
