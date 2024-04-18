import React from 'react'
import logo from '../assets/logo3.png'

const Navbar = () => {
  return (
    <>
    <nav className='flex w-full justify-between absolute'>
      <img className='w-44 h-40 ml-3' src={logo} alt="" />
      <ul className='flex mt-12'>
        <li className='mx-8 text-lg poppins-bold text-white'><link rel="stylesheet" href="" />PRODUCTS</li>
        <li className='mx-8 text-lg poppins-bold text-white'><link rel="stylesheet" href="" />STOCKLIST</li>
        <li className='mx-8 text-lg poppins-bold text-white'><link rel="stylesheet" href="" />BUY IN BULK</li>
        <li className='mx-8 text-lg poppins-bold text-white'><link rel="stylesheet" href="" />ABOUT US</li>
        <li className='ml-8 text-lg poppins-bold text-white mr-16'><link rel="stylesheet" href="" />CONTACT US</li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
