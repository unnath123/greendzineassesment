import React from 'react'
import logo from '../../images/Group 3@2x.png'
import './style.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();

    function handleSubmit(){
        //logic for authentication
        navigate("/home")
    }

  return (
    <div className='main'>
        <div className="container">
            <div className="first-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className='logo-text'>
                    <h1>#We are Electric</h1>
                </div>
            </div>
            <div className="second-container">
                <form>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Password'/>
                    <button onClick={handleSubmit} type="submit">Login</button>
                </form>
                <a href="/employeeList" className="forgot-password">Forgot Password?</a>
            </div>
        </div>
    </div>
  )
}

export default LoginPage