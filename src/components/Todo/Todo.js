import React, { useContext } from 'react';
import './Todo.css';
import { TodoContext } from '../../context/TodoContext';
import AddModal from '../AddModal/AddModal';
import EditModal from '../EditModal/EditModal';
import RemoveItem from '../RemoveItem/RemoveItem';

export default function Todo() {
  const { elements } = useContext(TodoContext);

  return (
    <div className="todo">
      <h1>Travelport Assignment</h1>
      <h3>Yoel Noy</h3>

      <AddModal />

      <div className="todo__list">
        {elements.map((element, index) => (
          <div key={index} className="todo__element">
            <p>{element}</p>
            <div className="todo__list-options">
              <EditModal index={index} />
              <RemoveItem index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
