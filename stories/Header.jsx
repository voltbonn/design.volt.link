import React from 'react';

import PropTypes from 'prop-types';

import { useT } from '../src/design/i18n';
import { Button } from './Button';
import './header.css';

export const Header = ({ onOpenTemplates }) => {
  const t = useT();

  return (
    <header>
      <div className="storybook-header">
        <div className="storybook-header__brand">
          <span className="storybook-header__mark" aria-hidden="true">V</span>
          <h1>{t('header.title')}</h1>
        </div>
        <Button primary size="small" onClick={onOpenTemplates} label={t('common.templates')} />
      </div>
    </header>
  );
};

Header.propTypes = {
  onOpenTemplates: PropTypes.func.isRequired,
};
