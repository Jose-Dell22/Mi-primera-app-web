import React from 'react';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';
import { TodoItem } from './TodoItem/Todoitem';
import { TodosLoading } from './Todos-Loading-error/TodosLoading';
import { TodosError } from './Todos-Loading-error/TodosError';
import { EmptyTodos } from './Todos-Loading-error/EmptyTodos';
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';

function AppUI({
  completedTodos,
  totalTodos,
  loading,
  error,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  addTodo,
}) {
  const handleAddTodo = (newTodo) => {
    addTodo(newTodo);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}

        {error && <TodosError />}
        
        {/* Mostrar "Propone tareas" si no hay tareas encontradas */}
        {!loading && searchedTodos.length === 0 && <EmptyTodos>Propone tareas</EmptyTodos>}
        
        {!loading &&
          searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              link={todo.link}
            />
          ))}
      </TodoList>
      <CreateTodoButton addTodo={handleAddTodo} />
    </>
  );
}

export { AppUI };