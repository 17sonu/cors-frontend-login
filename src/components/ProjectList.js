// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import './ProjectList.css'; // Import CSS for styling

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
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Description</th>
            <th>Assigned Users</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                {project.assignedUsers.length > 0 ? (
                  <ul>
                    {project.assignedUsers.map((user) => (
                      <li key={user._id}>{user.name}</li>
                    ))}
                  </ul>
                ) : (
                  'No users assigned'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
