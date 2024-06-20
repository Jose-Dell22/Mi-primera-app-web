import React from 'react';
import './EmptyTodos.css'; 
function EmptyTodos({ children }) {
  return (
    <div className="EmptyTodosContainer">
      <p>{children}</p>
    </div>
  );
}

export { EmptyTodos };
