import React from 'react';
import './CreateReport.css'

const CreateReport = () => {
    return (
        <form  className="report-form">
        <h2 className="report-form-title">Create Report</h2>
        <div className="report-form-group">
            <label htmlFor="title" className="report-form-label">Report Title</label>
            <input
            type="text"
            name='title'
            placeholder="Enter Report Title"
            required
            className="report-form-input"
            />
        </div>
        <div className="report-form-group">
            <label htmlFor="description" className="report-form-label">Description</label>
            <textarea
            name="description"
            placeholder="Enter Progress Report"
            required
            className="report-form-textarea"
            />
        </div>
        <div className="report-form-group">
            <label htmlFor="user_name" className="report-form-label">Created by</label>
            <input
            type="text"
            name='username'
            placeholder="Enter User Name"
            required
            className="report-form-input"
            />
            <br/>
            <input
            type="email"
            name='useremail'
            placeholder="Enter User Email"
            required
            className="report-form-input"
            />
        </div>
        <div className="report-form-group">
            <label htmlFor="document" className="report-form-label">Upload Document</label>
            <input
            type="file"
            name="files"
            multiple
            />
        </div>
        <button type="submit" className="report-submit-button">Create</button>
        </form>
    );
};

export default CreateReport;