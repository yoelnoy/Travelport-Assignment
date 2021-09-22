import { render, screen } from '@testing-library/react';
import TodoContextProvider from '../../context/TodoContext';
import RemoveItem from '../RemoveItem/RemoveItem';

test('componentes are rendered correctly', () => {
  render(<RemoveItem />, { wrapper: TodoContextProvider });

  const showButton = screen.getByTestId('show-button');

  //Checking that the delete modal icon is rendered correctly
  expect(showButton).toBeInTheDocument();
});
