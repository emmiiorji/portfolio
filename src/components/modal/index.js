import React, { useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { ImSwitch } from 'react-icons/im';
import PropTypes from 'prop-types';
import Languages from '../languages';
import { projects } from '../../helpers';

const Modal = ({ projectId, show, closeModal }) => {
  const {
    name, imageURL, description, languages, hostedURL, githubURL,
  } = projects[projectId];

  const containerRef = useRef();

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (containerRef.current && event.target === containerRef.current) {
        closeModal();
      }
    };
    document.addEventListener('click', handleClickOutsideModal);

    return () => {
      document.removeEventListener('click', handleClickOutsideModal);
    };
  });

  return (
    <div className="project-modal" style={{ display: `${show ? 'block' : 'none'}` }}>
      <div className="project-margin" ref={containerRef}>
        <div className="project-modal-container">
          <div className="modal-header">
            <h2>{name}</h2>
            <AiOutlineClose className="close" onClick={() => closeModal()} />
          </div>
          <Languages languages={languages} className="font-poppins" />
          <div className="project-modal-body">
            <img src={imageURL} className="project-img" alt="Project" />
            <div className="project-describe">
              <p className="description">
                {description}
              </p>
              <div className="points-of-action">
                <a href={hostedURL || '#'} rel="noreferrer" target="_blank">
                  <button type="button" className="button">
                    See Live
                    <ImSwitch className="rotate-12 text-red ml-1" />
                  </button>
                </a>
                <a href={githubURL || '#'} rel="noreferrer" target="_blank">
                  <button type="button" className="button">
                    See Source
                    <FaGithub className="ml-1" />
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
