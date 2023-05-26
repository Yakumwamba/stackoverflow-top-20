import React from 'react'

export default function NavBar() {
  return (
    <div className='flex flex-row bg-white justify-between w-full py-5 px-36'>
              <h1 className="font-semibold text-2xl pl-24   text-primary">{`StackOverflow | Top 20`}</h1>

         {/* <div className=" flex flex-row  justify-between mx-20 items-center">
{/* 
        <div className="sm:px-5  sm:scale-75 lg:pt-20  items-start w-full justify-center">
            <h1 className="font-bold text-4xl   text-secondary">Top 20</h1>
            <h1 className="font-bold text-4xl text-white ">StackOverflow</h1>
            <h1 className="font-bold text-4xl text-white ">Users</h1>
        </div> */}

        {/* <div className="self-center mr-36">
        <FaGithub size={50} color="white" className="hover:cursor-pointer" />
        </div> */}


      {/* </div> */} 

    </div>
  )
}
