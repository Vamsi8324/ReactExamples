import React from 'react'

function Employee1({srcData}) {
  return (
    <tr><td>{srcData.id}</td><td>{srcData.name}</td><td>{srcData.dept}</td><td>{srcData.desg}</td><td>{srcData.sal}</td></tr>
  )
}

export default Employee1