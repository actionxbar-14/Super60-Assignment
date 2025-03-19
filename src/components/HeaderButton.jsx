import React from 'react'
// import * as FaIcons from "react-icons/fa";
// import { FaPlus } from "react-icons/fa";
import buttonsData from '../api/buttonsData'


const HeaderButton = () => {
    // const icon = [FaPlus,FaFileExport,FaThLarge]
  return (
    <div>
        <ul className='flex justify-end items-end gap-4'>
            {buttonsData.map((button) => (
                <li key={button.id} >
                <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>

                  {/* {button.icon} */}
                  {button.label}
                </button>
                </li>
            ))}
        </ul>
      {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        Click me
      </button> */}
    </div>
  )
}

export default HeaderButton
