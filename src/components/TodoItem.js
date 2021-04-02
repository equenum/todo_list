import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TodoItem extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleDelete = this.handleDelete.bind(this);
        this.handleMark = this.handleMark.bind(this);
    }

    handleMark() {
        this.props.markTodo(this.props.index);
    }

    handleDelete(event) {
        this.props.deleteTodo(this.props.index);
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        
        const deletedStyle = {
            display: "none"
        }

        return (
            <Card style={this.props.item.isDeleted ? deletedStyle : null}>
            <Card.Body>
                <div  >
                    <span style={this.props.item.isCompleted ? completedStyle : null}>{this.props.item.text}</span>
                    <div>
                        <Button variant="outline-success" onClick={this.handleMark}>&#x2713;</Button>
                        <Button variant="outline-danger" onClick={this.handleDelete}>&#x1f5d1;</Button>
                    </div>
                </div>
            </Card.Body>
            </Card>
        );
    }
}

export default TodoItem