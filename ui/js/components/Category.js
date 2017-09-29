import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CategoryTitle } from './CategoryElements';
import Question from './Question';

class Category extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Category';

        this.onSelectQuestion = this.onSelectQuestion.bind(this);
    }

    onSelectQuestion(question) {
        if(!this.props.questionSelected) {
            question.setState({
                isSelected: true
            });

            this.props.onSelectQuestion();
        }
    }

    render() {
        return (
            <div className="category">
                <CategoryTitle>{this.props.topic}</CategoryTitle>
                {this.props.questions.map( (quest, idx) => {
                    return (
                        <Question
                            key={idx}
                            data={quest}
                            onSelectQuestion={this.onSelectQuestion}
                            onAnswerSubmit={this.props.onAnswerSubmit}
                            isPlayer1Turn={this.props.isPlayer1Turn}
                        />
                    );
                })}
            </div>
        )
    }
}

Category.propTypes = {
    topic: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
    onSelectQuestion: PropTypes.func.isRequired,
    questionSelected: PropTypes.bool.isRequired,
    onAnswerSubmit: PropTypes.func.isRequired,
    isPlayer1Turn: PropTypes.bool.isRequired
};

export default Category;
