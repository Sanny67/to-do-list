import React from 'react';
import './InputForm.css';
// import TodoList from './Components/TodoList/TodoList';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class InputForm extends React.Component {

    state = {
        taskName: ''
    }

    addTask = () => {
        // get the value
        this.props.onAddTask(this.state.taskName);
        //
    }

    onInputChange = (e) => {
        console.log(e.target.value);
        this.setState({taskName: e.target.value});
    }

    render() {
        return(
        <div className="wrap">
            <h2><u>To Do List</u></h2>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Col sm="9" xs="8">
                        <Form.Control name="taskName" value={this.state.taskName} onChange={this.onInputChange} />
                    </Col>
                    <Col sm="3" xs="4">
                        <ButtonToolbar>
                            <Button variant="outline-warning" onClick={this.addTask}>Add Task</Button>
                        </ButtonToolbar>
                    </Col>
                </Form.Group>
            </Form>
            </div>
        );
    }
}
export default InputForm;
