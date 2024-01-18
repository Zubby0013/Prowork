import { useState } from 'react';
import { HiInboxArrowDown } from "react-icons/hi2";
import { BiSolidHomeCircle } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiDotsThreeCircle } from "react-icons/pi";
import { GoProject } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { LuFolderInput } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import {SiderNav} from "./SiderNav"
import { NavLink } from 'react-router-dom';

const SiderBar = () => {
    const [state, setState]= useState(false);

    const toggle = ()=>{
        setState(!state)
    };
    
  return (
    <div className=' w-[250px] h-[calc(100%-70px)] hidden mt-[70px] fixed lg:flex justify-center'>
        <div className=' w-[90%] '>
            <div className=' w-full border-b flex py-2 gap-2'>
                <div className=' w-[30px] h-[30px] rounded-md bg-orange-600 flex justify-center items-center text-white'>Z</div>
                <div>Name</div>
            </div>
            <div className=' w-full border-b py-2'>
                <NavLink to='/dashboard' style={{}}>
                <SiderNav icon={<BiSolidHomeCircle size={25} />} name='Home' />
                </NavLink>
                <NavLink to='/inbox'>
                <SiderNav icon={<HiInboxArrowDown size={25} />} name='Inbox'/>
                </NavLink>
                <NavLink to='/document'>
                <SiderNav icon={<IoDocumentTextOutline size={25} />} name='Document'/>
                </NavLink>
                <NavLink to='/dash'>
                <SiderNav icon={<MdDashboard size={25} />} name='Dashboard'/>
                </NavLink>
                <SiderNav icon={<PiDotsThreeCircle size={25} />} name='More'/>
            </div>
            <div className=' w-full border-b py-2'>
                <NavLink to='/addproject'>
                <SiderNav icon={<GoProject size={23}/>} name='Add project' icon2={<FiPlus />}/>
                </NavLink>
                <NavLink to='/addtask'>
                <SiderNav icon={<GoProject size={23}/>} name='Add task' icon2={<FiPlus />}/>
                </NavLink>
                <NavLink to='/project'>
                <SiderNav icon={<LuFolderInput size={23}/>} name='My project' icon2={<FaAngleDown size={20}/>}/>
                </NavLink>
            </div>
        </div>
    </div>
  )
};

export default SiderBar;