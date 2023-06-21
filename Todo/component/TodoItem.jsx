import React from "react";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <span>
        <input type="checkbox" />
        <span className="todo-item-text"> {props.item}</span>
      </span>

      <p> ... </p>
    </li>
  );
}

export default TodoItem;
