import React from 'react';
import PropTypes from 'prop-types';
import Languages from './Languages';

const Project = () => {};

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgMobile: PropTypes.string,
    imageURL: PropTypes.string,
  }).isRequired,
};

export default Project;
