import React from 'react'
import LoginPage from './components/loginpage'
import Home from './components/homePage'
import EmployeesList from './components/employesList'
import style from './style.css'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/employeeList" element={<EmployeesList/>} />
      </Routes>   
    </div>
  )
}

export default App