import React from 'react';
import WelcomeSection from './WelcomeSection';
import TodoSection from './TodoSection';
import "./styles/App.css";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="container"> 
                    <WelcomeSection />
                    <TodoSection />
                </div>
            </div>
        )    
    }
}

export default App