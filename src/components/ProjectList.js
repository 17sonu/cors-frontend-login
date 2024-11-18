import React, { useState, useEffect } from 'react';
import api from '../api';
import './ProjectList.css'; // Import the updated CSS file

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await api.get('/projects');
        setProjects(res.data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  if (projects.length === 0) return <p>No projects found</p>;

  return (
    <div>
      <h2>Project List</h2>
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project._id}>
            <h3 className="card-title">{project.name}</h3>
            <p className="card-description">{project.description}</p>
            <div className="card-users">
              <strong>Assigned Users:</strong>
              {project.assignedUsers.length > 0 ? (
                <ul>
                  {project.assignedUsers.map((user) => (
                    <li key={user._id}>{user.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No users assigned</p>
              )}
            </div>
            <button className="card-button">Delete Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;