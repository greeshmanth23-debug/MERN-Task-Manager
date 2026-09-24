import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !email.trim() || !password.trim()) {
            alert('fill all the fields');
            return;
        }

        axios
            .post('http://localhost:3001/register', { name, email, password })
            .then((result) => {
                if (result.data.message === 'fake') {
                    alert('user already exists');
                    return;
                }

                alert('user registered successfully');
                navigate('/login');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="auth-page">
            <h1 className="auth-title">Sign up</h1>
            <form className="auth-form" onSubmit={handlesubmit}>
                <div className="auth-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='username' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="auth-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="auth-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className="auth-button">Submit</button>
                <p className="auth-text">Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default Signup;