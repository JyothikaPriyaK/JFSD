import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      name: 'Project Management System',
      instructor: 'Prof. John Doe',
      about: 'A web-based platform for managing student group projects.'
    },
    {
      name: 'AI Chatbot',
      instructor: 'Dr. Jane Smith',
      about: 'An AI-based chatbot system that helps automate customer support.'
    },
    {
      name: 'E-commerce Website',
      instructor: 'Prof. Alice Brown',
      about: 'A full-stack e-commerce application for buying and selling products.'
    }
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p><strong>Instructor:</strong> {project.instructor}</p>
            <p><strong>About:</strong> {project.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
