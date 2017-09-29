import React, { Component} from 'react';
import PropTypes from 'prop-types';

import ScoreBoard from './ScoreBoard';
import Category from './Category';

class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';

        this.state = {
            questionSelected: false,
            player1Score: 0,
            player2Score: 0,
            isPlayer1Turn: true
        };

        this.onSelectQuestion = this.onSelectQuestion.bind(this);
        this.onAnswerSubmit = this.onAnswerSubmit.bind(this);
    }

    onAnswerSubmit(isCorrect, questionValue) {

        // TODO: REFACTOR!!!!!!!!
        if(this.state.isPlayer1Turn) {
            if(isCorrect) {
                this.setState({
                    player1Score: this.state.player1Score + questionValue,
                    questionSelected: false,
                    isPlayer1Turn: !this.state.isPlayer1Turn
                });
            } else {
                this.setState({
                    player2Score: this.state.player2Score + questionValue,
                    questionSelected: false,
                    isPlayer1Turn: !this.state.isPlayer1Turn
                })
            }
        } else {
            if(isCorrect) {
                this.setState({
                    player2Score: this.state.player2Score + questionValue,
                    questionSelected: false,
                    isPlayer1Turn: !this.state.isPlayer1Turn
                });
            } else {
                this.setState({
                    player1Score: this.state.player1Score + questionValue,
                    questionSelected: false,
                    isPlayer1Turn: !this.state.isPlayer1Turn
                })
            }
        }


    }

    onSelectQuestion() {
        this.setState({
            questionSelected: true
        });
    }

    render() {
        const { gameData } = this.props;
        return (
            <div>
                <ScoreBoard
                    player1Score={this.state.player1Score}
                    player2Score={this.state.player2Score}
                    isPlayer1Turn={this.state.isPlayer1Turn}
                />
                {gameData.categories.map( (cat, idx) => (
                    <Category
                        key={idx}
                        topic={cat.topic}
                        questions={cat.questions}
                        onSelectQuestion={this.onSelectQuestion}
                        questionSelected={this.state.questionSelected}
                        onAnswerSubmit={this.onAnswerSubmit}
                        isPlayer1Turn={this.state.isPlayer1Turn}
                    />
                ))}
            </div>
        )
    }
}

App.propTypes = {
    gameData: PropTypes.object.isRequired
};

export default App;
