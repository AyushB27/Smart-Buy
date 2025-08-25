import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

const Login = () => {
    const navigate = useNavigate();
    const toDashboard = () => {
        navigate("/dash");
    };
    return (
        <div className='login-container'>
            <div className='img-container'>
                <div>
                    <img
                        src="https://cdn.prod.website-files.com/682d1c6b3c16bb956eafd6aa/682d1c6b3c16bb956eafda6c_6309fc4305a883fc64b964cc_DrawKit0041_E-commerce_and_Online_Shopping_Banner.png"
                    />
                </div>
            </div>
            <div className='form-container'>
                <h2>Login</h2>
                <form>
                    <input
                        type='text'
                        id="username"
                        placeholder="Username"
                    />
                    <input
                        type='password'
                        id="password"
                        placeholder="Password"
                    />
                    <button type="submit" className="login-btn" onClick={toDashboard}>Login</button>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;