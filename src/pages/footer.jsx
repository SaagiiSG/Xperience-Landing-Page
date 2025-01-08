import React from 'react'
import IgIcon from '../assets/instagram logo.svg'
const Footer = () => {
  return (
    <footer className='w-full h-[40dvh] flex flex-col items-end justify-center px-2 md:px-24 py-8 gap-8 z-50'>
        <a href='https://www.instagram.com/_xperience___/' className='text-xl md:text-3xl flex flex-col items-center gap-1 px-2'>
           <div className='flex gap-2'>
                <h2>Follow us on</h2>
                <img src={IgIcon} alt="" className='w-12' />
            </div>
            <a href="https://www.instagram.com/_xperience___/" className='font-bold'>@_xperience___</a>
        </a>
        <p className='text-lg'>by : <a href="https://www.instagram.com/saagii_21/">@Saagii_21</a></p>
    </footer>
  )
}

export default Footer