import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Languages = ({ languages, className }) => (
  <ul className={className}>
    { languages.map((language) => <li key={nanoid()}>{language}</li>) }
  </ul>
);

Languages.defaultProps = {
  languages: [],
  className: '',
};

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Languages;
