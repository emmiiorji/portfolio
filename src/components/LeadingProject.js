import React from 'react';
import PropTypes from 'prop-types';
import Languages from './Languages';

const LeadingProject = () => {};

LeadingProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgMobile: PropTypes.string,
    imageURL: PropTypes.string,
  }).isRequired,
  projectId: PropTypes.number.isRequired,
  handlePeek: PropTypes.func.isRequired,
};

export default LeadingProject;
