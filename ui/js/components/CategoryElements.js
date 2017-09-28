import React from 'react';
import PropTypes from 'prop-types';

export function CategoryTitle({ children }) {
    return (
        <div className="category-title">
            {children}
        </div>
    )
}
CategoryTitle.propTypes = {
    children: PropTypes.string.isRequired
}
