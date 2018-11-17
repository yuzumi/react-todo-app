import React from 'react';
import PropTypes from 'prop-types';
import classnames from '../../utils/classnames';
import './Button.scss';

const Button = ({ name, classNames = [], type = 'button', handleClick = f => f }) => (
    <button className={classnames('button', ...classNames)} type={type} onClick={handleClick}>{name}</button>
);

Button.propTypes = {
    name: PropTypes.string.isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    handleClick: PropTypes.func
};

export default Button;