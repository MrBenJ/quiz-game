import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Question';
        this.state = {
            winner: 0
        }

        this.onSelectQuestion = this.onSelectQuestion.bind(this);
    }

    onSelectQuestion() {

    }

    render() {

        const { value, display, answer } = this.props.data;
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
    })
};

export default Question;
