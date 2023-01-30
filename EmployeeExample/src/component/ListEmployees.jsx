import React from 'react'

function ListEmployees({srcArr}) {
    
  return (
      <React.Fragment>
    <div>ListEmployees</div>
    {srcArr.map(emp=><h1>{emp.name}</h1>)}

    </React.Fragment>
  )
}

export default ListEmployees