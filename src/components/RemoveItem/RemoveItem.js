import React, { useContext } from 'react';
import './RemoveItem.css';
import { MdDelete } from 'react-icons/md';
import { TodoContext } from '../../context/TodoContext';

export default function RemoveItem({ index }) {
  const { elements, setElements } = useContext(TodoContext);

  //Removing the selected element from the array of elements by its index
  const removeElement = (index) => {
    elements.splice(index, 1);
    setElements([...elements]);
  };

  return (
    <MdDelete
      className="removeItem"
      data-testid="show-button"
      onClick={() => removeElement(index)}
    />
  );
}
