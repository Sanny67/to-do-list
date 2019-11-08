import React from 'react';
import './InputForm.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';

class InputForm extends React.Component {
    render() {
        return(
        <div>
            <h2>To Do List</h2>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Col sm="10">
                        <Form.Control />
                    </Col>
                    <ButtonToolbar>
                        <Button variant="primary">Add Task</Button>
                    </ButtonToolbar>
                </Form.Group>
            </Form>
            </div>
        );
    }
}
export default InputForm;
