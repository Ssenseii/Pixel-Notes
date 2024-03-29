import React from "react";

const Input = ({ todo, setTodo, addTodo }) => {
  return (
    <form className="todo__input">
      <input
        className="todo__input-text"
        type="text"
        name="todo"
        value={todo}
        placeholder={"ADD NOTE..."}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button name="add-button" className="todo__input-button" onClick={addTodo}></button>
    </form>
  );
};

export default Input;
