import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class InputForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const newTodoText = this.state.todoText;
        this.props.createTodo(newTodoText);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Add</Form.Label>
                    <Form.Control 
                        type="text"
                        value={this.state.todoText} 
                        name="todoText" 
                        placeholder="Create new Todo" 
                        onChange={this.handleChange} 
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant="primary mb-3" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default InputForm;