import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class TodoList extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Hello',
                completed: true
            },
            {
                id: 2,
                title: 'Helloooo',
                completed: false
            },
            {
                id: 3,
                title: 'Hello world',
                completed: false
            },
            {
                id: 4,
                title: 'Hello world!',
                completed: false
            },
        ]
    }

    checkboxToggle = (todo) => {
    
        let todos = this.state.todos;

        let newTodos = todos.map(t => {

            return {
                id: t.id,
                title: t.title,
                completed: t.id == todo.id ? !t.completed : t.completed
            }

        });

        console.log(newTodos);

        this.setState({todos: newTodos})

    }

    render() {
        let tasks = this.state.todos.map(todo => {
            return (
                <Form.Check
                    block
                    checked={todo.completed}
                    label={todo.title}
                    type="checkbox"
                    onChange={() => this.checkboxToggle(todo)}
                />
            );
        })
        return (
            <div>
                {tasks}
            </div>

        );
    }
}
export default TodoList;
