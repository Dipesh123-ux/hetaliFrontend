import React from 'react'
import des from '../assets/path834.png'

const design = ({w}) => {
  return (
    <div className="h-4 w-full flex justify-center items-center space-x-3">
        <div style={{width:`${w}%`}} className="line"></div>
        <img style={{height:"30px"}} src={des} alt="" />
        <div style={{width:`${w}%`}} className="line"></div>
    </div>
  )
}

export default design