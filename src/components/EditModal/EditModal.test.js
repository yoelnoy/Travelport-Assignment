import { render, screen } from '@testing-library/react';
import TodoContextProvider from '../../context/TodoContext';
import EditModal from '../EditModal/EditModal';

test('componentes are rendered correctly', () => {
  render(<EditModal />, { wrapper: TodoContextProvider });

  const showButton = screen.getByRole('button');

  //Checking that the edit modal icon is rendered correctly
  expect(showButton).toBeInTheDocument();
});
