import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toast from 'vanillatoasts';

class Question extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Question';
        this.state = {
            winner: '',
            isSelected: false,
            userAnswer: ''
        }

        this.onSelectQuestion = this.onSelectQuestion.bind(this);
        this.onAnswerInput = this.onAnswerInput.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
    }

    submitAnswer(evt) {
        evt.preventDefault();
        const { userAnswer } = this.state;
        const { isPlayer1Turn, data: { answer, value }} = this.props;
        const isAnswerCorrect = userAnswer.toLowerCase() === answer.toLowerCase();
        let winner = 0;

        if(isAnswerCorrect) {
            Toast.create({
                title: 'Correct!',
                text: 'You did it!'
            });

            this.props.onAnswerSubmit(true, value);
            winner = isPlayer1Turn ? 'player1' : 'player2';
        } else {
            Toast.create({
                title: 'Incorrect',
                text: 'The answer was ' + answer
            });
            this.props.onAnswerSubmit(true, value);
            winner = isPlayer1Turn ? 'player2' : 'player1';
        }


        this.setState({
            isSelected: false,
            winner
        });
    }

    onAnswerInput(evt) {
        const { target: { value }} = evt;
        this.setState({ userAnswer: value });
    }

    onSelectQuestion() {
        this.props.onSelectQuestion(this);

    }

    render() {

        const { value, display } = this.props.data;
        if(this.state.winner) {
            return (
                <div className="question">
                    <p className="question-value">{value}</p>
                    <p className="question-winner">Won by {this.state.winner}</p>
                </div>
            );
        }
        if(this.state.isSelected) {
            return (
                <div className="question selected">
                    <p className="question-display">
                        {display}
                    </p>
                    <form onSubmit={this.submitAnswer}>
                        <input
                            type="text"
                            onChange={this.onAnswerInput}
                            value={this.state.userAnswer}
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )
        }
        return (
            <div className="question" onClick={this.onSelectQuestion}>
                <p className="question-value">{value}</p>
            </div>
        )
    }
}

Question.propTypes = {
    data: PropTypes.shape({
        value: PropTypes.number.isRequired,
        display: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    }),
    onSelectQuestion: PropTypes.func.isRequired,
    onAnswerSubmit: PropTypes.func.isRequired,
    isPlayer1Turn: PropTypes.bool.isRequired
};

export default Question;
