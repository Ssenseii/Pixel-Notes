import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";

const Todo = ({ arr }) => {
  return (
    <li>
      <label htmlFor="">{arr.item.todo}</label>
      <button
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};
export default Todo;
