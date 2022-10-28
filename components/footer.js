import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <footer className="p-4 bg-gray-800 shadow md:px-6 md:py-">
    <div className="sm:flex sm:items-center sm:justify-between">
      
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li className='p-5'>
            <Link href="#home">
            <a>
                Home
            </a>
        </Link>
            </li>
            <li className='p-5'>

        <Link href="#business">
            <a>
                Our Business
            </a>
        </Link>
            </li>
            <li className='p-5'>

        <Link href="#clients">
            <a>
                Our Clients
            </a>
        </Link>
            </li>
            <li className='p-5'>

        <Link href="#manage">
            <a>
                Management
            </a>
        </Link>
            </li>
            <li className='p-5'>

        <Link href="#contact">
            <a>
                Contact Us
            </a>
        </Link>
            </li>
            <li className='p-5'>

        <Link href="#about">
            <a>
                About Us
            </a>
        </Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Developed by Hyperflex Core
    </span>
</footer>
    </>
  )
}
