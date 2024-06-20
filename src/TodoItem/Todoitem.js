import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  const hasLink = props.link && props.link.trim() !== '';

  const openLink = (event) => {
    event.preventDefault();
    window.open(props.link, '_blank');
  };

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      {hasLink ? (
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
          onClick={openLink}
        >
          {props.text}
        </a>
      ) : (
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
      )}

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
