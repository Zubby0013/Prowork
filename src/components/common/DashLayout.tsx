import React from 'react'
import DashHeader from '../static/DashHeader'
import SiderBar from '../static/SiderBar'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <div>
        <div className=' w-full h-[70px] fixed z-20 mb-80 flex items-center justify-center border-b'>
            <DashHeader/>
        </div>
        <div className=' flex'>
            <div >
            <SiderBar/>
            </div>
            <div className=' w-full lg:w-[calc(100%-250px)] ml-0 lg:ml-[250px] h-[calc(100%-70px)] mt-[70px] flex-1'>
            <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashLayout