import React from 'react'
import { FaGithub} from "react-icons/fa";
export default function Footer() {
  return (
    <div className=" h-24 self-end py-10  bg-black w-full items-center flex justify-center  bottom-1  left-0 right-0">
    <p className="text-white font-medium  text-center">Created by </p>
    <a href="https://github.com/yakumwamba" className=" text-center font-semibold text-[#33CFB7] mx-2">Brian Lemba</a>
   
    <FaGithub color='white' className='hover:cursor-pointer'  size={20}/>
  </div>
  )
}
