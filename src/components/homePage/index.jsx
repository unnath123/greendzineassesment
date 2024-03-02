import React, { useState } from 'react'
import user from '../../images/Group 46@2x.png'
import moptro from '../../images/moptro logo@2x.png'
import './style.css'

let infoArr = [
    {"day":"Monday", "prodpercent": "4"},
    {"day":"Tuesday", "prodpercent": "92"},
    {"day":"Wednesday", "prodpercent": "122"},
    {"day":"Thursday", "prodpercent": "93"},
    {"day":"Friday", "prodpercent": "89"},
    {"day":"Saturday", "prodpercent": "98"}]

const HomePage = () => {
    const [arr, setArr] = useState([...infoArr])

  return (
    <div className='main-container-homepg'>
        <div className="container-homepg">
            <div className="user-logo">
                <img src={user} alt="user-logo" />
            </div>
            <div className="home-page-logo">
                <img src={moptro} alt="some-logo" />
            </div>
            <div className="employee-prod-desc">
                <div className='emp-prod-desc'><h2>Employee Productivity Dashboard</h2></div>
                <div className='prod-desc-main'>
                    {
                        arr.map((ele, index)=>(
                            <div key={index} className='emp-prod-desc-day-progress' style={index!==0? {marginTop:"2rem"}:{marginTop:"1rem"}}>
                                <div className="productivity-desc">
                                    <p>Productivity on {ele.day}</p>
                                    <p>{ele.prodpercent}%</p>
                                </div>
                                <div className='progress-wrap'>
                                    <div style={{ width: `${parseFloat(ele.prodpercent) / 2}%` }} className="progress"></div>
                                </div>
                            </div>
                        ))
                    }
                    
                 
                </div>   
            </div>
        </div>
    </div>
  )
}

export default HomePage