import React from 'react';

import PropTypes from 'prop-types';

import { useT } from '../src/design/i18n';
import { Button } from './Button';
import './header.css';

export const Header = ({ onStartGuide }) => {
  const t = useT();

  return (
    <header>
      <div className="volt-story-header">
        <div className="volt-story-header__brand">
          <span className="volt-story-header__mark" aria-hidden="true">V</span>
          <h1>{t('header.title')}</h1>
        </div>
        <Button primary size="small" onClick={onStartGuide} label={t('buttonStories.startGuide')} />
      </div>
    </header>
  );
};

Header.propTypes = {
  onStartGuide: PropTypes.func.isRequired,
};
