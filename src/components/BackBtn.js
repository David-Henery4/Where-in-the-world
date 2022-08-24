import React from 'react'
import {BsArrowLeftShort} from "react-icons/bs"

const BackBtn = () => {
  return (
    <div className='back'>
        <button className='back__btn'>
            <BsArrowLeftShort className='back__icon'/>
            Back
        </button>
    </div>
  )
}

export default BackBtn