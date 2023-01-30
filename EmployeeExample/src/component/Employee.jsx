import React from 'react'
import './Employee.css'
import Employee1 from './Employee1';
import logo from '../logo.svg'
function Employee(props) {
    const emps = props.data;
  return (
    <div className='employeediv'>
        <img src={logo} style ={{width:'200px',height:'200px'}}/>
    <h1>All Employee Data</h1>
    <hr/>
    <table>
        <tr><th>ID</th><th>Name</th><th>Dept</th><th>Desg</th><th>Sal</th></tr>
      
        {/* {emps.map(emp=><tr><td>{emp.id}</td><td>{emp.name}</td><td>{emp.dept}</td><td>{emp.desg}</td><td>{emp.sal}</td></tr>)} */}
        {emps.map(emp=><Employee1 srcData={emp}/>)}
  </table>
    </div>
  )
}

export default Employee