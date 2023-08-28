import React from "react";
import { deleteDoc, doc } from "firebase/firestore"
import {db} from '../firebase'


const List = ({ list, checked }) => {
  
  return (
    <div className="todo__list">
      <ul>
        {list.map((item) => (
          <li className="todo-item" key={item.id}>
            <label htmlFor="checkbox">{item.item.todo}</label>
            
            
            <div className="todo-actions">
              {/* input checkbox won't work with background image */}
              <button id="checkbox" className="checkbox"></button>
              <button
                className="delete"
                onClick={() => {
                  deleteDoc(doc(db, "todos", item.id));
                }}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
