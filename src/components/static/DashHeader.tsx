import React from 'react';
import pix from "../../assets/prowork.png";
import {MdSettings, MdSearch, MdMenu} from "react-icons/md"

const DashHeader = () => {
  return (
    <div className=' w-[97%] h-[90%] flex justify-between items-center'>
        <div className=' w-[160px] h-[100%]'>
            <img src={pix} alt="" />
        </div>
        <div className=' w-[400px] h-[40px] hidden border rounded-2xl lg:flex items-center px-2'>
            <div className=' flex items-center justify-center cursor-pointer'><MdSearch size={25}/></div>
            <input type="text" placeholder='search project' className=' flex-1 outline-none'/>
        </div>
        <div className=' w-[50px] lg:w-[100px] h-[100%] flex justify-center items-center gap-4'>
            <div className=' w-[40px] h-[40px] hidden rounded-full border lg:flex justify-center items-center'>AN</div>
            <div className=' w-[40px] h-[40px] hidden rounded-full lg:flex justify-center items-center'>
                <MdSettings size={25}/>
            </div>
            <div className='w-[40px] h-[40px] block lg:hidden mt-2 cursor-pointer'>
                <MdMenu size={25}/>
            </div>
        </div>
    </div>
  )
}

export default DashHeader