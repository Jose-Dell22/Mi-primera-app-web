import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      {total === 0 && (
        <h1 className="title">No hay tareas propuestas </h1>
      )}
      {total > 0 && total === completed && (
        <h1 className="title">¡Todas las tareas están completadas!</h1>
      )}
      {total > 0 && total !== completed && (
        <h1 className="title">
          Llevas 
          <span> {completed} </span>
          de
          <span> {total} </span>
          tareas ¡vamos por más!
        </h1>
      )}
    </>
  );
}

export { TodoCounter };

