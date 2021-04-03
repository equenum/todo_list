import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/WelcomeSection.css";

class WelcomeItem extends React.Component {
    state = {};

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="welcome">
                        <h1>TODO LIST</h1>
                        <p>
                            With <b>TODO LIST</b>, you can manage your goals without wasting time and 
                            struggling to figure out priorities. Your productivity will get better, 
                            you won’t forget things, your time management will improve and you will be 
                            able to get your todos under control.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeItem;