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
import { BsListTask } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegEye ,FaRegEyeSlash } from "react-icons/fa";

const SiderBar = () => {
    const [state, setState]= useState(false);

    const toggle = ()=>{
        setState(!state)
    };
    
  return (
    <>
      {state? 
      <div className=' w-[100px] h-[calc(100%-70px)] hidden mt-[70px] fixed lg:flex justify-center border-r'>
      <div className=' w-[50px] flex flex-col items-center mt-4'>
      <div className=' w-full border-b flex justify-between items-center'>
          
          <div className=' w-[30px] h-[30px] cursor-pointer'
          onClick={()=>{toggle()}}
          >
              <FaRegEye  size={25}/>
          </div>
      </div>
      <div className=' w-full border-b py-2'>
          <NavLink to='/dashboard' style={{}}>
          <SiderNav icon={<BiSolidHomeCircle size={25} />} />
          </NavLink>
          <NavLink to='/dashboard/inbox'>
          <SiderNav icon={<HiInboxArrowDown size={25} />}/>
          </NavLink>
          <NavLink to='/dashboard/document'>
          <SiderNav icon={<IoDocumentTextOutline size={25} />}/>
          </NavLink>
          <NavLink to='/dashboard/viewdash'>
          <SiderNav icon={<MdDashboard size={25} />} />
          </NavLink>
          <SiderNav icon={<PiDotsThreeCircle size={25} />}/>
      </div>
      <div className=' w-full border-b py-2'>
          <NavLink to='/dashboard/addproject'>
          <SiderNav icon={<GoProject size={23}/>}/>
          </NavLink>
          <NavLink to='/dashboard/addtask'>
          <SiderNav icon={<BsListTask size={23}/>}/>
          </NavLink>
          <NavLink to='/dashboard/project'>
          <SiderNav icon={<LuFolderInput size={23}/>} />
          </NavLink>
      </div>
      <div className=' h-[100px]'/>
      <div>
            <SiderNav icon2={<IoExitOutline size={20}/>}/>
      </div>
  </div>
    </div>
      :
    <div className=' w-[250px] h-[calc(100%-70px)] hidden mt-[70px] fixed lg:flex justify-center border-r bg-[#ebd8f0f6]'>
        <div className=' w-[90%] '>
        <div className=' w-full border-b flex justify-between items-center'>
            <div className=' flex py-2 gap-2'>
            <div className=' w-[30px] h-[30px] rounded-md bg-orange-600 flex justify-center items-center text-white'>Z</div>
            <div>Name</div>
            </div>
            <div className=' w-[30px] h-[30px] cursor-pointer'
            onClick={()=>{toggle()}}
            >
                <FaRegEyeSlash  size={25}/>
            </div>
        </div>
        <div className=' w-full border-b py-2'>
            <NavLink to='/dashboard' style={{}}>
            <SiderNav icon={<BiSolidHomeCircle size={25} />} name='Home'/>
            </NavLink>
            <NavLink to='/dashboard/inbox'>
            <SiderNav icon={<HiInboxArrowDown size={25} />} name='Inbox'/>
            </NavLink>
            <NavLink to='/dashboard/document'>
            <SiderNav icon={<IoDocumentTextOutline size={25} />} name='Document'/>
            </NavLink>
            <NavLink to='/dashboard/viewdash'>
            <SiderNav icon={<MdDashboard size={25} />} name='Dashboard'/>
            </NavLink>
            <SiderNav icon={<PiDotsThreeCircle size={25} />} name='More'/>
        </div>
        <div className=' w-full border-b py-2'>
            <NavLink to='/dashboard/addproject'>
            <SiderNav icon={<GoProject size={23}/>} name='Create project' icon2={<FiPlus />}/>
            </NavLink>
            <NavLink to='/dashboard/addtask'>
            <SiderNav icon={<BsListTask size={23}/>} name='Add task' icon2={<FiPlus />}/>
            </NavLink>
            <NavLink to='/dashboard/project'>
            <SiderNav icon={<LuFolderInput size={23}/>} name='My project' icon2={<FaAngleDown size={15}/>}/>
            </NavLink>
        </div>
        <div className=' h-[80px]'/>
        <div>
            <SiderNav name='Logout' icon2={<IoExitOutline size={20}/>}/>
        </div>
    </div>
      </div>
    }
    </>
  )
};

export default SiderBar;