import React from 'react';
import InputForm from './InputForm';
import TodoItem from './TodoItem';

class TodoSection extends React.Component {
    constructor() {
        super();
        this.state = { 
            todos: [
                {
                    text: 'Example todo. Create your own',
                    isCompleted: false,
                    isDeleted: false
                }
            ]
        };
        this.createTodo = this.createTodo.bind(this);
        this.markTodo = this.markTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    createTodo(todoText) {
        // check if input is not empty
        // clean input window after submiting
        const newTodo = {
            text: todoText,
            isCompleted: false,
            isDeleted: false
        };
        
        this.setState(prevState => {
            return {todos: [...prevState.todos, newTodo] }
        });
    }

    markTodo(index) {
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

    deleteTodo(index) {
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
            <div>
                <InputForm createTodo={this.createTodo} />
                <div className="todo-list">
                        {todoItems}
                </div>
            </div>
        );
    }
}

export default TodoSection;