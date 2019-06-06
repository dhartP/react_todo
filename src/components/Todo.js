import React from "react";

function Todo(props) {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>{todo.title} &nbsp;</li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
