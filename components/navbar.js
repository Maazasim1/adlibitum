import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='sticky top-0 bg-white'>

    <div className='flex flex-row sm:w-full shadow-lg justify-end pl-[10vw] pr-[10vw] bg-white sticky top-0' id='navbar'>
        <div>
            <img src='images/adlibitumLogo.png' className='absolute m-4 h-12 w-12 pb-3 sm:left-[20vw]'/>
        </div>
        <Link href="#home">
            <a>
                Home
            </a>
        </Link>
        <Link href="#business">
            <a>
                Our Business
            </a>
        </Link>
        <Link href="#clients">
            <a>
                Our Clients
            </a>
        </Link>
        <Link href="#manage">
            <a>
                Management
            </a>
        </Link>
        <Link href="#contact">
            <a>
                Contact Us
            </a>
        </Link>
        <Link href="#about">
            <a>
                About Us
            </a>
        </Link>
        

    </div>
    </div>
  )
}
