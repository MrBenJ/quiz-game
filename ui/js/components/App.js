import React, { Component} from 'react';
import PropTypes from 'prop-types';

import Category from './Category';

class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';

    }

    render() {
        const { gameData } = this.props;
        return (
            <div>
                {gameData.categories.map( (cat, idx) => (
                    <Category key={idx} topic={cat.topic} questions={cat.questions}/>
                ))}
            </div>
        )
    }
}

App.propTypes = {
    gameData: PropTypes.object.isRequired
};

export default App;
