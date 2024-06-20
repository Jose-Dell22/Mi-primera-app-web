import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false); // Marca la carga como completada después de 3 segundos

      } catch (error) {
        setLoading(false); // En caso de error, también marca la carga como completada
        setError(true);
        console.error('Error loading from localStorage:', error);
      }
    }, 3000); // Demora de 3 segundos

    // No olvides añadir itemName e initialValue como dependencias del useEffect
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(true);
      console.error('Error saving to localStorage:', error);
    }
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
