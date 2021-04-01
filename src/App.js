import React from "react"
import TodoItem from "./TodoItem"

// TODO
// Structure the project properly

class App extends React.Component {
    constructor() {
        super()
        
        this.state = {
            todos: [
                {
                    text: 'Test1'
                }, 
                {
                    text: 'Test2'
                }
            ]
        }
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />)
        
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App