import React from 'react'
import HeaderButtonsection from './components/HeaderButtonsection'
import Cardheader from './components/Cardheader'
import UserCardSection from './components/UserCardSection'

const App = () => {
  return (
    <div
    className='bg-gray-200 h-[100%] p-4'>
      {/* <h2>Header button section</h2> */}
      <HeaderButtonsection/>
      <Cardheader/>
      <UserCardSection/>
    </div>
  )
}

export default App
