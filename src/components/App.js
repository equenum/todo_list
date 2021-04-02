import React from 'react';
import WelcomeSection from './WelcomeSection';
import TodoSection from './TodoSection';

// TODO
// Structure the project properly
class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <WelcomeSection />
                <TodoSection />
            </div>
        )    
    }
}

export default App