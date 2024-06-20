import React, { useState } from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ addTodo }) {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo({
        text: inputValue.trim(),
        completed: false,
      });
      setInputValue('');
      setShowForm(false);
    }
  };

  return (
    <div className="CreateTodoButtonContainer">
      <button className="CreateTodoButton" onClick={toggleForm}>+</button>
      {showForm && (
        <div className="CreateTodoForm">
          <input
            type="text"
            placeholder="Escribe una nueva tarea"
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
          />
          <div>
            <button className='Add' onClick={handleAddTodo}>Agregar</button>
            <button className='Cancel' onClick={toggleForm}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export {CreateTodoButton};
