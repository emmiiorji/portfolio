import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Project from './Project';
import projects from '../helpers/projectsData';
import Modal from './Modal';
import LeadingProject from './LeadingProject';

const Projects = () => {
  const [modalProjectId, setModalProjectId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handlePeek = (projectId) => {
    setModalProjectId(projectId);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <section className="works-section" id="works">
      <div id="works-header">
        <h2>Latest Masterpieces</h2>
        <hr />
      </div>
      <div className="cards-container">
        {projects.map((project, index) => {
          if (index === projects.length - 1) {
            return (
              <LeadingProject
                project={project}
                projectId={index}
                handlePeek={handlePeek}
                key={nanoid()}
              />
            );
          }
          return (
            <Project
              project={project}
              projectId={index}
              handlePeek={handlePeek}
              key={nanoid()}
            />
          );
        }).reverse()}
        (
        {modalProjectId !== null
          ? (
            <Modal
              projectId={modalProjectId}
              show={showModal}
              closeModal={closeModal}
            />
          )
          : <></>}
        )
      </div>
    </section>
  );
};

export default Projects;
