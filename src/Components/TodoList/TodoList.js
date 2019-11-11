import React from 'react';
import './TodoList.css';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

class TodoList extends React.Component {


    render() {
        let tasks = null;
        if (this.props.todos.length) {
            tasks = this.props.todos.map(todo => {

                return (
                    <div onClick={() => this.props.onToggleCheck(todo)} block>
                        <Form.Check
                            checked={todo.completed}
                            label={todo.title}
                            type="checkbox"
                        />
                    </div>
                );

            })
        } else {
            return <h3>Hey, Add some task</h3>
        }
        return (
            <div className="list">
                {tasks}
            </div>

        );
    }
}
export default TodoList;
