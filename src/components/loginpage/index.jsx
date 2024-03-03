import React, { useState } from 'react'
import logo from '../../images/Group 3@2x.png'
import './style.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        //logic for authentication
        if(email === "test@gmail.com" && password==="12345"){
            navigate("/home")
        }
        else{
            alert("Email or Password is incorrect")
        }
        
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
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={handleSubmit} type="submit">Login</button>
                </form>
                <a href="/employeeList" className="forgot-password">Forgot Password?</a>
            </div>
        </div>
    </div>
  )
}

export default LoginPage