import './App.css';
import Todo from './components/Todo/Todo';
import TodoContextProvider from './context/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <Todo />
      </div>
    </TodoContextProvider>
  );
}

export default App;
