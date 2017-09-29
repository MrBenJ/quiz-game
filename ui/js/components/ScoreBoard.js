import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScoreBoard extends Component {
    render() {
        return (
            <div className="scoreboard">
                <p>Current Turn: {this.props.isPlayer1Turn ? 'Player 1' : 'Player 2'}</p>
                <p>Player 1: {this.props.player1Score}</p>
                <p>Player 2: {this.props.player2Score}</p>
            </div>
        );
    }

}

ScoreBoard.propTypes = {
    isPlayer1Turn: PropTypes.bool.isRequired,
    player1Score: PropTypes.number.isRequired,
    player2Score: PropTypes.number.isRequired
}
export default ScoreBoard;
