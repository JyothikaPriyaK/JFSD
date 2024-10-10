import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate, Link } from 'react-router-dom';
import leftImage from './leftImage.png';

const SignIn = () => {
    const [accountType, setAccountType] = useState('student'); // Default to student
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/'); // Redirect to the home page
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        // Logic for authentication goes here

        // Redirect based on account type
        if (accountType === 'student') {
            navigate('/studentdashboard'); // Change to your actual route
        } else if (accountType === 'instructor') {
            navigate('/instructordashboard'); // Change to your actual route
        } else {
            navigate('/admindashboard'); // Change to your actual route
        }
    };

    return (
        <div>
            <button className="back-button" onClick={handleBack}>
                &#8592; Back
            </button><br></br>
            <img src={leftImage} alt="Description" className="leftImage" />
            <div className="signin-container">
                <h2>Sign In</h2>
                
                <form onSubmit={handleSignIn}>
                    <div className="account-type">
                        <label>
                            <input 
                                type="radio" 
                                name="accountType" 
                                value="student" 
                                checked={accountType === 'student'} 
                                onChange={(e) => setAccountType(e.target.value)} 
                                required 
                            />
                            Student
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="accountType" 
                                value="instructor" 
                                checked={accountType === 'instructor'} 
                                onChange={(e) => setAccountType(e.target.value)} 
                                required 
                            />
                            Instructor
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="accountType" 
                                value="admin" 
                                checked={accountType === 'admin'} 
                                onChange={(e) => setAccountType(e.target.value)} 
                                required 
                            />
                            Admin
                        </label>
                    </div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Enter your username" 
                        required 
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Enter your password" 
                        required 
                    />

                    {/* Forgot Password link */}
                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot Password?</Link> {/* Use Link for navigation */}
                    </div>

                    <button type="submit">Sign In</button>

                    <p className="signup-text">
                        Not having an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
