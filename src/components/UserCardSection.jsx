import React from 'react'
import UserCard from './UserCard'
import EmployeeData from '../api/EmployeeData.json'

const UserCardSection = () => {
  return (
    <div className='pl-10'>
        <ul>
            {
                EmployeeData.map((employee) => {
                    return (
                        <UserCard key={employee.id} name={employee.name} image={employee.image} invoice = {employee.last_invoice}  />
                    )
                   
                })

            }
        </ul>
        
    
    </div>
  )
}

export default UserCardSection
