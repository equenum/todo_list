import React from 'react';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

class TodoSection extends React.Component {
    state = { 
        todos: [
            {
                text: 'Example todo (feel free to create your own)',
                isCompleted: false,
                isDeleted: false
            }
        ]
    };

    createTodo = (todoText) => {
        if (!todoText) {
            alert('You forgot to enter the todo text =) Please try again');
        } else {
            const newTodo = {
                text: todoText,
                isCompleted: false,
                isDeleted: false
            };

            this.setState(prevState => {
                return {todos: [...prevState.todos, newTodo] }
            });
        }
    }

    markTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        const targetTodo = updatedTodos[index];
        if (targetTodo.isCompleted) {
            targetTodo.isCompleted = false;
        } else {
            targetTodo.isCompleted = true;
        }

        this.setState({
            todos: updatedTodos
        });
    } 

    deleteTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos[index].isDeleted = true;

        this.setState({
            todos: updatedTodos
        });
    }

    render() {
        const todoItems = this.state.todos.map((item, index) => 
            <TodoItem 
                key={index} 
                index={index} 
                item={item} 
                markTodo={this.markTodo} 
                deleteTodo={this.deleteTodo}
            />)

        return (
            <div className="row">
                <div className="col-md-12">
                    <InputForm createTodo={this.createTodo} />
                    <div className="todo-list">
                            {todoItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoSection;