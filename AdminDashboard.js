import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform any sign-out logic here (e.g., clearing session, tokens, etc.)
    console.log("Signed out");

    // Redirect to the landing page (home)
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <header>
        {/* Left corner - Teammates */}
        <div className="left-corner">Teammates</div>
        {/* Right corner - Navigation */}
        <nav className="right-corner">
          <ul>
            <li onClick={() => navigate('/admindashboard/instructormanagement')}>INSTRUCTOR</li>
            <li onClick={() => navigate('/admindashboard/studentmanagement')}>STUDENT</li>
            <li onClick={() => navigate('/admindashboard/projectmanagement')}>PROJECTS</li>
            <li onClick={handleSignOut}>SIGN OUT</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className="admin-title">ADMIN HOME</h1>
        {/* Add other dashboard content here */}
       
          
      </main>
    </div>
  );
};

export default AdminDashboard;
