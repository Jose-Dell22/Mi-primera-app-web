import React from 'react';
import './TodoList.css';

function TodoList({ children }) {
  return (
    <ul className="TodoList" aria-label="Lista de tareas">
      {React.Children.count(children) > 0 ? (
        children
      ) : (
        <li className="TodoList-empty">No hay tareas pendientes</li>
      )}
    </ul>
  );
}

export { TodoList };
