import React from 'react'
import {FiEye , FiEdit3, FiMoreVertical} from 'react-icons/fi'
// import EmployeeData from '../api/EmployeeData.json'

const UserCard = (props) => {
  return (
    <div className='bg-white flex justify-between p-2 m-2 rounded-lg shadow-md'>
      <div className="employee-name-image flex items-center gap-4 p-4">
        <img src={props.image} alt="" className='w-10 h-10 rounded-full' />
        <p>{props.name}</p>
      </div>
      <div className="employee-other-details flex justify-center items-center gap-48">
         <div className="last-invoice">
              <p className='p-2'>{props.invoice}</p>
         </div>
         <div className="actions flex gap-6">
              <FiEye/>
              <FiEdit3/>
              <FiMoreVertical/>
         </div>
      </div>
    </div>
  )
}

export default UserCard
