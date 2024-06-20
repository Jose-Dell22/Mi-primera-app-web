import React from 'react';
import { useLocalStorage } from './LocalStorage/useLocalStorage';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Ver mi twicht: JostOscrafter', completed: false, link: 'https://twitch.tv/JostOscrafter' },
  { text: 'ver un vídeo en mi canal: jostO', completed: false, link: 'https://www.youtube.com/@josto5705' },
  { text: 'visitar mi tiktok: jostO', completed: false, link: 'https://www.tiktok.com/@josto85?_t=8nKnmpkppqv&_r=1' },
  { text: 'pasar el semestre¿maybe?', completed: false },
];

function App() {
  const {
    saveItem: setTodos,
    item: todos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', defaultTodos);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (text) => {
    const newTodos = todos.map(todo =>
      todo.text === text ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  };

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      loading={loading}
      error={error}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      addTodo={addTodo}
    />
  );
}

export default App;
