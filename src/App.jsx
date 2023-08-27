import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import List from "./components/List";

import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));

function App() {
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
    <div className="app">
      <div className="todo">
        <div className="todo__title"></div>
        <Input todo={input} setTodo={setInput} addTodo={addTodo}></Input>
        <List list={todos}></List>
      </div>
    </div>
  );
}

export default App;
