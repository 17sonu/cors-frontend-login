import React, { useState } from 'react';
import api from '../api';
import './CreateProject.css'; // Import the CSS file

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/projects/create', { name, description });
      alert('Project created successfully');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h2 className="project-form-title">Create Project</h2>
      <div className="project-form-group">
        <label htmlFor="name" className="project-form-label">Project Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter project name"
          required
          className="project-form-input"
        />
      </div>
      <div className="project-form-group">
        <label htmlFor="description" className="project-form-label">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter project description"
          required
          className="project-form-textarea"
        />
      </div>
      <button type="submit" className="project-submit-button">Create</button>
    </form>
  );
};

export default CreateProject;
