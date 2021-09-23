import { render, screen } from '@testing-library/react';
import TodoContextProvider from '../../context/TodoContext';
import Todo from './Todo';
import AddModal from '../AddModal/AddModal';
import EditModal from '../EditModal/EditModal';
import RemoveItem from '../RemoveItem/RemoveItem';

test("todo's componentes are rendered correctly", () => {
  render(<Todo />, { wrapper: TodoContextProvider });
  render(<AddModal />, { wrapper: TodoContextProvider });
  render(<EditModal />, { wrapper: TodoContextProvider });
  render(<RemoveItem />, { wrapper: TodoContextProvider });

  const title = screen.getByText('Travelport Assignment');
  const subTitle = screen.getByText('Yoel Noy');
  const list = document.querySelector('.todo__list');

  expect(title).toHaveTextContent('Travelport Assignment');
  expect(subTitle).toHaveTextContent('Yoel Noy');
  expect(list).toBeInTheDocument();
});
