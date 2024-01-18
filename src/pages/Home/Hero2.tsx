import React from 'react';
import vid from "../../assets/hero.png";
import fone from "../../assets/phone.png";
import micro from '../../assets/Microsoft_x9xttd.png';
import dis from '../../assets/Disney_qdwyib.png';
import ama from '../../assets/Amazon_veb0zq.png';
import net from '../../assets/Neftlix_ux1ubc.png';
import ado from '../../assets/Adobe_mlfsq0.png';
import sofa from '../../assets/Salesforce_j3rouw.png';


const Hero2 = () => {
  return (
    <>
       <div className='w-full min-h-[75vh]' style={{backgroundImage: `url(${vid}) `, backgroundSize: "cover",backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        <img src={fone} className=' w-[300px] h-[100px]'/>
    </div>
    <div className=' w-full h-[45vh] flex justify-center items-center'>
       <div className=' w-[95%] h-[70%] flex flex-col items-center'>
          <div className=' text-center text-[20px] h-[70px]'>30 million+ people and teams trust their sanity and productivity to Todoist</div>
          <div className=' flex justify-between h-[30px] w-[85%] flex-wrap'>
             <img src={micro} alt="" className=' w-[150px] h-[40px]'/>
             <img src={dis} alt="" className=' w-[150px] h-[40px]'/>
             <img src={ama} alt="" className=' w-[150px] h-[40px]'/>
             <img src={net} alt="" className=' w-[150px] h-[40px]'/>
             <img src={ado} alt="" className=' w-[100px] h-[40px]'/>
             <img src={sofa} alt="" className=' w-[100px] h-[40px]'/>
          </div>
       </div>
    </div>
    </>
  )
}

export default Hero2