import React, { useState } from 'react';
import './Submissions.css';

const Submissions = () => {
  // Sample data for submissions
  const [submissions, setSubmissions] = useState([
    { id: 1, studentName: 'John Doe', projectTitle: 'AI for Healthcare', grade: '' },
    { id: 2, studentName: 'Jane Smith', projectTitle: 'Blockchain in Finance', grade: '' },
    { id: 3, studentName: 'Robert Brown', projectTitle: 'IoT in Agriculture', grade: '' }
  ]);

  // Function to handle grade submission
  const handleGradeChange = (id, newGrade) => {
    const updatedSubmissions = submissions.map(submission =>
      submission.id === id ? { ...submission, grade: newGrade } : submission
    );
    setSubmissions(updatedSubmissions);
  };

  return (
    <div className="submissions-container">
      <h2>Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Project Title</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map(submission => (
            <tr key={submission.id}>
              <td>{submission.studentName}</td>
              <td>{submission.projectTitle}</td>
              <td>
                <input
                  type="text"
                  value={submission.grade}
                  onChange={(e) => handleGradeChange(submission.id, e.target.value)}
                  placeholder="Enter grade"
                />
              </td>
              <td>
                <button onClick={() => alert(`Graded: ${submission.studentName}, Grade: ${submission.grade}`)}>
                  Submit Grade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;
