import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Project from './Project';
import projects from '../helpers/projectsData';
import Modal from './Modal';
import LeadingProject from './LeadingProject';

const Projects = () => {
  const [modalProjectId, setModalProjectId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return <></>;
};

export default Projects;
