import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.scss';

const TextInput = ({ name, value, placeholder, handleChange }) => (
    <input className="text-input" type="text" 
        name={name} 
        value={value} 
        placeholder={placeholder}
        onChange={handleChange}>
    </input>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default TextInput;