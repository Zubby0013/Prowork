import React from 'react';
import logo from '../../assets/prowork.png';
import pix from '../../assets/second.png';
import { Link } from 'react-router-dom'

const Verify = () => {
  return (
    <div className='h-screen w-full pl-9'>
        <div className=' w-full h-[70px] mb-10 overflow-hidden'>
        <Link to="/">
          <img src={logo} alt="" className=' object-contain w-[40%] lg:w-[20%] h-[90%]' />
        </Link>
       </div>
       <div className=' lg:grid lg:grid-cols-2 w-[90%] h-[400px]'>
       <div className=' w-[93%] h-[400px] mt-[100px]'>
        <div className=' text-[30px] font-[500] mb-6'>Verify</div>
          <div className=' my-6'>
            <div className=' w-full h-[50px] mb-4 gap-3 flex justify-center items-center'>
               <input type='text' className=' w-[40px] h-[40px] border rounded-md outline-none px-3'/>
               <input type='text' className=' w-[40px] h-[40px] border rounded-md outline-none px-3'/>
               <input type='text' className=' w-[40px] h-[40px] border rounded-md outline-none px-3'/>
               <input type='text' className=' w-[40px] h-[40px] border rounded-md outline-none px-3'/>
               <input type='text' className=' w-[40px] h-[40px] border rounded-md outline-none px-3'/>
               <input type='text' className=' w-[40px] h-[40px] border rounded-md outline-none px-3'/>
            </div>
            <Link to='/login'>
            <button className=' w-full h-[40px] border rounded-lg bg-[#bb66d2] text-white'>Verify</button>
            </Link>
          </div>
          <div className=' h-[30px]'/>
       </div>
         <div className=' hidden lg:block'>
           <img src={pix} alt="" className=' animate-bounce transition-all duration-500'/>
         </div>
       </div>
    </div>
  )
}

export default Verify