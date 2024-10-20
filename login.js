

import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
    const [formType, setFormType] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const renderForm = () => {
        switch (formType) {
            case 'userSignup':
                return (
                    <form onSubmit={(e) => { e.preventDefault(); handleUserSignup(); }}>
                        <h3>User Sign Up</h3>
                        <label htmlFor="new-user-email">Email:</label>
                        <input 
                            type="email" 
                            id="new-user-email" 
                            placeholder="Enter User Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <label htmlFor="new-user-password">Password:</label>
                        <input 
                            type="password" 
                            id="new-user-password" 
                            placeholder="Choose User Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="btn">Sign Up</button>
                        {message && <p>{message}</p>}
                    </form>
                );
            case 'userLogin':
                return (
                    <form onSubmit={(e) => { e.preventDefault(); handleUserLogin(); }}>
                        <h3>User Login</h3>
                        <label htmlFor="user-email">Email:</label>
                        <input 
                            type="email" 
                            id="user-email" 
                            placeholder="Enter User Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <label htmlFor="user-password">Password:</label>
                        <input 
                            type="password" 
                            id="user-password" 
                            placeholder="Enter User Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="btn">Login</button>
                        {message && <p>{message}</p>}
                    </form>
                );
            case 'adminLogin':
                return (
                    <form onSubmit={(e) => { e.preventDefault(); handleAdminLogin(); }}>
                        <h3>Admin Login</h3>
                        <label htmlFor="admin-username">Username:</label>
                        <input 
                            type="text" 
                            id="admin-username" 
                            placeholder="Enter Admin Username" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <label htmlFor="admin-password">Password:</label>
                        <input 
                            type="password" 
                            id="admin-password" 
                            placeholder="Enter Admin Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit" className="btn">Login</button>
                        {message && <p>{message}</p>}
                    </form>
                );
            default:
                return null;
        }
    };

    const handleUserSignup = () => {
        if (password.length < 6) {
            setMessage('Password must be at least 6 characters long!');
            return;
        }

        const userData = { email, password };
        console.log('Signing up:', userData);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setMessage('Sign Up Successful!');
            console.log('User created:', data);
            // Clear form fields
            setEmail('');
            setPassword('');
        })
        .catch((error) => {
            console.error('Error:', error);
            setMessage('Sign Up Failed!');
        });
    };

    const handleUserLogin = () => {
        console.log('Logging in:', { email, password });

        fetch('http://localhost:5000/users')
            .then(response => response.json())
            .then(users => {
                const userExists = users.find(user => user.email === email && user.password === password);
                if (userExists) {
                    setMessage('Login Successful!');
                    window.location.href = '/userdashboard'; 
                    // Perform additional actions like redirecting or storing user state
                } else {
                    setMessage('Login Failed! Invalid email or password.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                setMessage('Login Failed!');
            });
    };

    const handleAdminLogin = () => {
        if (email === 'Admin' && password === 'password') {
            setMessage('Admin Login Successful!');
            // Perform admin-related actions here, like redirecting to an admin dashboard
            window.location.href = '/admindashboard'; 
        } else {
            setMessage('Admin Login Failed! Invalid username or password.');
        }
    };

    return (
        <div className="container">
            <h2>Login Credentials</h2>
            <div className="login-option-container">
                <div className="login-option">
                    <h3>Admin</h3>
                    <button className="btn" onClick={() => setFormType('adminLogin')}>Login as Admin</button>
                </div>
                <div className="login-option">
                    <h3>User</h3>
                    <button className="btn" onClick={() => setFormType('userSignup')}>Sign Up as User</button>
                    <button className="btn" onClick={() => setFormType('userLogin')}>Login as User</button>
                </div>
            </div>
            {renderForm()}
        </div>
    );
};

export default LoginPage;