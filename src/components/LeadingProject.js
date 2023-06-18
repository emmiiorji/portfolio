import React from 'react';
import PropTypes from 'prop-types';
import Languages from './Languages';

const LeadingProject = ({ project, projectId, handlePeek }) => (
  <div className="card">
    <img src={project.imageURL} className="card-img" alt={project.name} />
    <div id="leading-card">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <Languages languages={project.languages} />
      <button type="button" className="see-leading-project" id={`project_${projectId}`} onClick={() => handlePeek(projectId)}>
        Have a Peek
      </button>
    </div>
  </div>
);

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
