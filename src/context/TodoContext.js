import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [elements, setElements] = useState([]);
  const [newElement, setNewElement] = useState('');

  const value = { elements, setElements, newElement, setNewElement };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
