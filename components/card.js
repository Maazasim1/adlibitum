import React from 'react'
import Image from 'next/image'

export default function Card(props) {
  return (
    <div className="max-w-sm bg-black rounded-lg border border-[#d4a537] shadow-md hover:bg-gray-900 p-10 m-10 ">
    <a href="#" className='flex justify-center'>
        <img className="rounded-t-lg h-40 w-40" src={props.src} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">{props.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 "></p>
       
    </div>
</div>
  )
}
