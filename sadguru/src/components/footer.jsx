import React from 'react'
import logo from '../assets/logo3.png'
import payment1 from '../assets/payment1.png'

function footer() {
  return (
    <div className='bg-[#a89898] flex flex-col items-center justify-center'>
      <img className='w-44 h-40 ' src={logo} alt="" />
        <img className='my-8' src={payment1} alt="" />
        <div className="flex text-white ">
            <div className="mx-3">FAQ</div>
            <div className="mx-3">TERMS & CONDITIONS</div>
            <div className="mx-3">INSTAGRAM</div>
            <div className="mx-3">FACEBOOK</div>
            <div className="mx-3">TWITTER</div>
            <div className="mx-3">PRIVACY POLICY</div>
            <div className="mx-3">DELIVERY & RETURNS</div>
            <div className="mx-3">BUY IN BULK</div>
        </div>
     <p className="text-center poppins-bold w-[400px] my-10 text-white">COPYRIGHT © 2023 THE COCONUT COMPANY. ALL RIGHTS RESERVED.</p>   
    </div>
  )
}

export default footer
