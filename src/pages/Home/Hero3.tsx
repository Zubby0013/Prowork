import React from 'react';
import pix from '../../assets/phone.png'

const Hero3 = () => {
  return (
    <div className=' h-screen w-full bg-red-500 flex justify-center items-center overflow-hidden'>
        <div className=' w-[95%] h-[90%] grid grid-rows-2 md:grid-cols-2'>
            <div className=' bg-green-500'>
            <div className=''>
                <div className=' text-[20px] text-[#5a0adf]'>Clear your mind</div>
                <div className=' py-4 text-[23px] font-[500] w-[60%]'>The fastest way to get tasks out of your head.</div>
                <div className=' text-[20px] '>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</div>
                </div>
            </div>
            <div className=' bg-lime-500'>
                <img src={pix} alt="" className=' h-[100%] w-[100%] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default Hero3