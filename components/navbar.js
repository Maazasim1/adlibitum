import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='flex flex-row p-1 w-full shadow-lg justify-center bg-white sticky top-0' id='navbar'>
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
  )
}
