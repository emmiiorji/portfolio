import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Languages = ({ languages }) => (
  <ul>
    { languages.map((language) => <li key={nanoid()}>{language}</li>) }
  </ul>
);

Languages.defaultProps = {
  languages: [],
};

Languages.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string),
};

export default Languages;
