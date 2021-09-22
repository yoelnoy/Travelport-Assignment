import React, { useContext } from 'react';
import './AddModal.css';
import { Button, FormControl } from 'react-bootstrap';
import { TodoContext } from '../../context/TodoContext';

export default function AddModal() {
  const { elements, setElements, newElement, setNewElement } =
    useContext(TodoContext);

  //Will not respond if input is empty
  //If the input is not empty, this function will add the new text to the array of elements
  const addElement = () => {
    if (newElement !== '') {
      setElements([...elements, newElement]);
      setNewElement('');
    }
  };

  return (
    <div className="addModal">
      <FormControl
        className="addModal__input"
        value={newElement}
        placeholder="Add new element"
        aria-describedby="basic-addon2"
        onChange={(e) => setNewElement(e.target.value)}
      />
      <Button
        data-testid="addModal-button"
        className="addModal__button"
        onClick={addElement}
      >
        Add
      </Button>
    </div>
  );
}
