import { render, screen } from '@testing-library/react';
import TodoContextProvider from '../../context/TodoContext';
import AddModal from '../AddModal/AddModal';

test("addModal's componentes are rendered correctly", () => {
  render(<AddModal />, { wrapper: TodoContextProvider });

  const button = screen.getByRole('button');
  const input = screen.getByRole('textbox');

  //Checking that input and button render correctly
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  //Checking initail state of input and button
  expect(input).toHaveTextContent('');
  expect(button).toHaveTextContent('Add');
});
