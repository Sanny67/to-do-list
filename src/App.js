import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import InputForm from './Components/InputForm/InputForm';
import TodoList from './Components/TodoList/TodoList';



class App extends React.Component  {

  state = {
    todos: [
    ]
}

addTask = (taskName) => {
  console.log("Entered");
  let oldTodos = this.state.todos;
  var newTask = {
      id: oldTodos.length + 1,
      title: taskName,
      completed: false
  }


  oldTodos.push(newTask);
  oldTodos = oldTodos.reverse();

  this.setState({todos: oldTodos})
}

checkboxToggle = (todo) => {
  // console.log('Hey I am running!', todo);

  let todos = this.state.todos;

  let newTodos = todos.map(t => {

      return {
          id: t.id,
          title: t.title,
          completed: t.id === todo.id ? !t.completed : t.completed
      }
  });

  console.log(newTodos);

  this.setState({ todos: newTodos });

}
  
  render() {
    return (
      <div className="App">
        <Container>
          <InputForm onAddTask={this.addTask} />
          <TodoList todos={this.state.todos} onToggleCheck={this.checkboxToggle} />
        </Container>
      </div>
    );
  }
}

export default App;
