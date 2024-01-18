import React from 'react'

const Hero = () => {
  return (
    <div className=' h-[75vh] w-full flex justify-center items-center'>
        <div className=' w-[90%] h-[90%] flex items-center flex-col gap-6'>
           <div className=' text-[40px] md:text-[55px] font-[700] text-center h-[150px] w-[100%] md:w-[70%] max-lg:w-[60%]'>Organize your work and life, finally.</div>
           <div className=' text-[18px] text-center font-[400] h-[100px] md:w-[70%] lg:w-[53%] md:text-xl '>Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app.</div>
        <div className=' flex justify-center items-center'>
           <button className=' bg-[#bb66d2] text-white rounded-lg px-8 h-[40px]'>Start for free</button>
        </div>
        </div>
    </div>
  )
}

export default Hero