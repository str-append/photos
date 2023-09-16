import React, { useEffect, useState } from 'react'
import './modal.css'
import icon from './assets/images/download-svgrepo-com.svg'
const Modal = ({link,show,setshow,downloadlink}) => {
  return (
    <>
    {show ?<>
    <div onClick={()=>{setshow(false)}} className='mid active'>
        <div className='glass'>
            <img className='imagepreview' src={link} loading="lazy" ></img>
                <a href={downloadlink} target="_blank" rel="noopener noreferrer" className='downloadlogo' > 
                    <img src={icon} ></img>
                </a>
        </div>
    </div>
    </>:<></>}
    </>
  )
}

export default Modal