import React, { useState } from 'react';
import api from '../api';
import './CreateUser.css'; 

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/create', { name, email, password, role });
      alert('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Create User</h2>
      <table className="form-table">
        <tbody>
          <tr className='box_for'>
            <td ><label htmlFor="name">Name:</label></td>
            <td><input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required /></td>
          </tr>
          <tr className='box_for'>
            <td><label htmlFor="email">Email:</label></td>
            <td><input type='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required /></td>
          </tr>
          <tr className='box_for'>
            <td><label htmlFor="password">Password:</label></td>
            <td><input type='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required /></td>
          </tr>
          <tr className='box_for'>
            <td><label htmlFor="role">Role:</label></td>
            <td>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </td>
          </tr>          
        </tbody>
      </table>
              <button type="submit" className="submit-button">Create</button>
        
    </form>
  );
};

export default CreateUser;
