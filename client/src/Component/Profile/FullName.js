import React from 'react'

const FullName = () => {

   let  firstName="mohamed";
  let   lastName='ALI';
  return (
    <div className='name'>
    <span> 
    <b>{firstName} {lastName} </b>
  </span> 
    </div>
  )
}

export default FullName
