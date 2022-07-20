import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>

    <div className='flex flex-row p-1 w-full shadow-lg justify-end pr-20 bg-white sticky top-0' id='navbar'>
        <div>
            <img src='images/Adlibitium.svg' className='absolute m-4 h-10 w-10 left-20'/>
        </div>
        <Link href="#">
            <a>
                Home
            </a>
        </Link>
        <Link href="#">
            <a>
                Our Business
            </a>
        </Link>
        <Link href="#">
            <a>
                Our Clients
            </a>
        </Link>
        <Link href="#">
            <a>
                Management
            </a>
        </Link>
        <Link href="#">
            <a>
                Contact Us
            </a>
        </Link>
        <Link href="#">
            <a>
                About Us
            </a>
        </Link>
        

    </div>
    </div>
  )
}
