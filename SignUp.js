import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';


const SignUp = () => {
 
    
  
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/'); // Redirect to the home page
};

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Handle account creation logic here

    // Show message and navigate based on role
    setMessage('Account created successfully!');
    setTimeout(() => {
      if (role === 'student') {
        navigate('/studentdashboard'); // Adjust the path as needed
      } else {
        navigate('/instructordashboard'); // Adjust the path as needed
      }
    }, 2000);
  };

  return (
    
    <div>
            <button className="back-button" onClick={handleBack}>
                &#8592; Back
            </button>
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="role-selection">
        <label>
          <input
            type="radio"
            value="student"
            checked={role === 'student'}
            onChange={() => setRole('student')}
          />
          Student
        </label>
        <label>
          <input
            type="radio"
            value="instructor"
            checked={role === 'instructor'}
            onChange={() => setRole('instructor')}
          />
          Instructor
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
      {message && <div className="message-box">{message}</div>}
    </div>
    </div>
  );
};

export default SignUp;
