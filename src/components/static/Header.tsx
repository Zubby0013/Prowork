import { useState } from 'react';
import pix from "../../assets/prowork.png";
import {MdMenu,MdCancel} from "react-icons/md"
import { Link } from 'react-router-dom';

const Header = () => {

  const [state, setState] = useState(false);
  const [icon, setIcon] = useState(false);

  const toggle = (()=>{
    setState(!state)
    setIcon(!icon)
  });

  return (
    <div className=' w-full h-[70px] flex justify-center border-b static bg-white'>
        <div className=' w-[95%] h-[90%] flex justify-between relative items-center '>
            <div className=' w-[150px]'>
               <img src={pix} alt="" className=' object-cover'/>
            </div>
            <div className=' h-full font-[500] md:text-[15px] lg:text-lg  min-lg:w-[50%] flex justify-between items-center cursor-pointer '>
              <div className=' lg:gap-6 hidden lg:flex'>
              <div className=''>Features</div>
              <div className=''>For Teams</div>
              <div className=''>Resource</div>
              <div className=''>Pricing</div>
              </div>
              <div className=' items-center gap-5 hidden lg:flex ml-4'>
              <div className=' w-[2px] h-[30px] bg-gray-700'/>
              <div>Log in</div>
              <Link to='/register'>
              <button className=' bg-[#bb66d2] h-[40px] px-3 rounded-xl'>Start for free</button>
              </Link>
              </div>
              <div className=' sm:block  lg:hidden cursor-pointer transition-all duration-300'
              onClick={toggle}
              >
                 {icon? <MdCancel size={30}/>: <MdMenu size={30}/>}
              </div>
            </div>
        </div>
        {state? <div className=' w-full bg-[rgba(0,0,0,0.5)] h-[89vh] absolute top-[65px] flex justify-center border-t'>
           <div className=' w-full h-[60%] py-6 px-8 bg-white'>
              <div className=' text-[20px]'>
              <div className=' w-full h-[40px]'>Features</div>
              <div className=' w-full h-[40px]'>For Teams</div>
              <div className=' w-full h-[40px]'>Resources</div>
              <div className=' w-full h-[40px]'>Pricing</div>
              </div>
              <div className=' w-full h-[1px] bg-gray-600 my-5'/>
              <div className=' flex justify-between'>
                 <button className=' w-[48%] h-[40px] bg-neutral-300 rounded-lg'>Log in</button>
                 <div>
                 <Link to='/register'>
                 <button className=' w-[] h-[40px] text-white px-10 bg-[#bb66d2] rounded-lg'>Start for free</button>
                 </Link>
                 </div>
              </div>
           </div>
        </div>: null}
    </div>
  )
}

export default Header