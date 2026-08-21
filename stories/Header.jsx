import React from 'react';

import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

export const Header = ({ onOpenTemplates }) => (
  <header>
    <div className="storybook-header">
      <div className="storybook-header__brand">
        <span className="storybook-header__mark" aria-hidden="true">V</span>
        <h1>Volt Design</h1>
      </div>
      <Button primary size="small" onClick={onOpenTemplates} label="Anpassbare Vorlagen" />
    </div>
  </header>
);

Header.propTypes = {
  onOpenTemplates: PropTypes.func.isRequired,
};
