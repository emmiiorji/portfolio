import React from 'react';
import PropTypes from 'prop-types';
import Languages from './Languages';

const Project = ({ project, projectId, handlePeek }) => (
  <div className="card card-with-bgimage active" style={{ position: 'relative' }}>
    <div
      style={{
        width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', overflow: 'hidden',
      }}
    >
      <img src={project.imageURL} className="card-img" alt={project.name} style={{ width: '100%' }} />
    </div>
    <div className="overlay">
      <div className="shown">
        <h2>{project.name}</h2>
        <p>
          {project.description}
        </p>
        <Languages languages={project.languages} />
      </div>
      <button type="button" className="hidden" id={`project_${projectId}`} onClick={() => handlePeek(projectId)}>
        Have a Peek
      </button>
    </div>
  </div>
);

Project.propTypes = {
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

export default Project;
