import React, { useContext, useState } from 'react';
import './EditModal.css';
import { Button, Modal, FormControl } from 'react-bootstrap';
import { MdModeEdit } from 'react-icons/md';
import { TodoContext } from '../../context/TodoContext';

export default function EditModal({ index }) {
  const { elements, setElements, newElement, setNewElement } =
    useContext(TodoContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Will not respond if input is empty
  //If the input is not empty, this function will find the selected element by it's index
  //And will replace it's text with the new text inserted
  const editElement = (index) => {
    if (newElement !== '') {
      elements[index] = newElement;
      setElements([...elements]);
      handleClose();
      setNewElement('');
    }
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        className="editModal__open-button"
      >
        <MdModeEdit />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormControl
            placeholder={elements[index]}
            onChange={(e) => setNewElement(e.target.value)}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editElement(index)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
