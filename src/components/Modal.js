import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Languages from './Languages';
import projects from '../helpers/projectsData';

const Modal = ({ projectId, show, closeModal }) => {
  const {
    name, imageURL, description, languages, hostedURL, githubURL,
  } = projects[projectId];

  return (
    <div className="project-modal" style={{ display: `${show ? 'block' : 'none'}` }}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div className="project-margin" onClick={() => closeModal()}>
        <div className="project-modal-container">
          <div className="modal-header">
            <h2>{name}</h2>
            <AiOutlineClose className="close" onClick={() => closeModal()} />
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
    </div>
  );
};

Modal.propTypes = {
  projectId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
