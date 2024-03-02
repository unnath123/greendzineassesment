import React,{useState} from 'react'
import user from '../../images/Group 46@2x.png'
import moptro from '../../images/moptro logo@2x.png'
import SearchIcon from '@mui/icons-material/Search';
import './style.css'

let empdata = [{
    emp_id:"1",
    name:"test1",
    dob:"22-02-1999",
    role:"software dev"
},
{
    emp_id:"2",
    name:"test2",
    dob:"22-02-1799",
    role:"Quality analyst"
},
{
    emp_id:"3",
    name:"test3",
    dob:"22-02-1999",
    role:"teacher"
},
{
    emp_id:"4",
    name:"test4",
    dob:"28-02-1909",
    role:"electrician"
},
{
    emp_id:"5",
    name:"test5",
    dob:"22-02-1949",
    role:"farmer"
}]

const EmployeesList = () => {
    const [emps, setEmps] = useState([...empdata])
    const [searchVal, setSearchVal] = useState("");

    function handleChange(e){
        setSearchVal(prev=>e.target.value)
        const newArr = empdata.filter((ele)=>(ele.name).includes(e.target.value))
        setEmps(prev=>[...newArr])
    }

  return (
    <div className='container-main-emp-list'>
        <div className="container-emp-list">
            <div className="user-logo-empl">
                <img src={user} alt="user-logo" />
            </div>
            <div className="moptro-logo-empl">
                <img src={moptro} alt="moptro" />
            </div>
            <div className="search-box-empl">
                <div className='input-wrapper'>
                    <input type="text" placeholder='Search with name' value={searchVal} onChange={(e)=>handleChange(e)}/>
                    <div className="search-icon">
                        <SearchIcon style={{ color: 'grey' }}/>   
                    </div>
                </div>
                
            </div>
            <div className="employees-list">
                {
                    emps.map((ele)=>(
                        <div className="employee-data">
                    <div>
                        <p className='emp-head'>EMP ID</p>
                    </div>
                    <div  ><p>:</p></div>
                    <div>
                        <p className='emp-id'>{ele.emp_id}</p>
                    </div>
                    <div  >
                        <p className='emp-head'>Name </p>
                    </div>
                    <div  ><p>:</p></div>
                    <div  >
                        <p className='emp-id'>{ele.name}</p>
                    </div>
                    <div  >
                        <p className='emp-head'>DOB </p>
                    </div>
                    <div ><p>:</p></div>
                    <div >
                        <p className='emp-dob'>{ele.dob}</p>
                    </div>
                    <div  >
                        <p className='emp-head'>Role </p>
                    </div>
                    <div  ><p>:</p></div>
                    <div  >
                        <p className='emp-role'>{ele.role}</p>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default EmployeesList