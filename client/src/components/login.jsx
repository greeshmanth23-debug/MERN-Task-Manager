import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Usercontext from '../context.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserName } = useContext(Usercontext);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert('fill all the fields');
            return;
        }

        axios
            .post('http://localhost:3001/login', { email, password })
            .then((result) => {
                if (result.data.message === 'fake') {
                    alert('invalid user or wrong password');
                    return;
                }

                alert('user logged in successfully');
                localStorage.setItem('userName', result.data.message);
                setUserName(result.data.message);
                navigate('/home');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="auth-page">
            <h1 className="auth-title">Login</h1>
            <form className="auth-form" onSubmit={handlesubmit}>
                <div className="auth-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="auth-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className="auth-button">Submit</button>
                <p className="auth-text">Don't have an account? <Link to="/signup">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;