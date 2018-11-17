import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = ({ title }) => (
    <header className="app-header">
        <h1 className="app-title">{title}</h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;