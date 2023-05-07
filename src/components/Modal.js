import React from 'react';
import PropTypes from 'prop-types';
import Languages from './Languages';
import projectData from '../helpers/projectsData';

const Modal = ({ projectId }) => {
  const {
    name, imageURL, description, languages, hostedURL, githubURL,
  } = projectData[projectId];
  return (
    <div className="project-margin">
      <div className="project-modal-container">
        <div className="modal-header">
          <h2>{name}</h2>
          <img src="./assets/img/close-icon.png" className="close" alt="Close Modal" />
        </div>
        <Languages languages={languages} />
        <div className="project-modal-body">
          <img src={imageURL} className="project-img" alt="Project" />
          <div className="project-describe">
            <p className="description">
              {description}
            </p>
            <div className="points-of-action">
              <a href={hostedURL || '#'} rel="noreferrer" target="_blank">
                <button type="button">
                  See Live
                  <i className="fa-solid fa-power-off" />
                </button>
              </a>
              <a href={githubURL || '#'} rel="noreferrer" target="_blank">
                <button type="button">
                  See Source
                  <i className="fa-brands fa-github" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  projectId: PropTypes.number.isRequired,
};

export default Modal;
