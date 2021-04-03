import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/TodoItem.css";

class TodoItem extends React.Component {
    state = { cardOnHoverStyle: null };

    handleMark = () => {
        this.props.markTodo(this.props.index);
    }

    handleDelete = (event) => {
        this.props.deleteTodo(this.props.index);
    }

    handleCardOnMouseEnter = () => {
        const cardOnHoverStyle = {
            backgroundColor: "#ffc107" 
        }

        this.setState({
            cardOnHoverStyle: cardOnHoverStyle
        });
    }

    handleCardOnMouseLeave = () => {
        const cardOnHoverStyle = {
            backgroundColor: "white" 
        }

        this.setState({
            cardOnHoverStyle: cardOnHoverStyle
        });
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
            <Card style={this.props.item.isDeleted ? deletedStyle : null} className="todoCard">
                <Card.Body 
                    style={this.state.cardOnHoverStyle} 
                    onMouseEnter={this.handleCardOnMouseEnter} 
                    onMouseLeave={this.handleCardOnMouseLeave}
                >
                    <div className="todo">
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