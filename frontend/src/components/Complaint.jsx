import React from 'react'

const Complaint = ({id, name, description, status, course, roll}) => {

  return (
    <div className='complaint'>
      <h3>{roll}</h3>
      <h3>{course}</h3>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{status? "Open":"Close"}</p>
    </div>
  )
}

export default Complaint
