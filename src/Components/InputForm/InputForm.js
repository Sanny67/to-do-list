import React from 'react';
import './InputForm.css';
// import TodoList from './Components/TodoList/TodoList';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class InputForm extends React.Component {
    render() {
        return(
        <div className="wrap">
            <h2><u>To Do List</u></h2>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Col sm="9" xs="8">
                        <Form.Control />
                    </Col>
                    <Col sm="3" xs="4">
                        <ButtonToolbar>
                            <Button variant="outline-warning" onClick="addtask()">Add Task</Button>
                        </ButtonToolbar>
                    </Col>
                </Form.Group>
            </Form>
            </div>
        );
    }
}
export default InputForm;
