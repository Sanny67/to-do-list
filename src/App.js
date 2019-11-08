import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import InputForm from './Components/InputForm/InputForm';
import TodoList from './Components/TodoList/TodoList';



function App() {
  return (
    <div className="App">
      <Container>
        <InputForm />
        <TodoList />
      </Container>
    </div>
  );
}

export default App;
