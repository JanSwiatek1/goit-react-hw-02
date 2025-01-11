import PropTypes from 'prop-types';
import React from 'react';

export const Section = ({title, children}) => {
    return (
    <div>
        <h1>{title}</h1>
        {children}
    </div>
    )
}

Section.PropTypes = {
    title: PropTypes.string,
}