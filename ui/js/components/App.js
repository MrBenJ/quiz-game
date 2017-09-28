import React, { Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';

    }

    render() {
        return (
            <div>
                Get to work! Right now! JUST DO IT
            </div>
        )
    }
}

App.propTypes = {
    gameData: PropTypes.object.isRequired
};

export default App;
