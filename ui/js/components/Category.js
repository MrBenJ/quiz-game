import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CategoryTitle } from './CategoryElements';
import Question from './Question';

class Category extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'Category';
    }

    render() {
        return (
            <div className="category">
                <CategoryTitle>{this.props.topic}</CategoryTitle>
                {this.props.questions.map( (quest, idx) => {
                    return (
                        <Question key={idx} data={quest} />
                    );
                })}
            </div>
        )
    }
}

Category.propTypes = {
    topic: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired
};

export default Category;
