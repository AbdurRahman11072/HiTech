import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar'

const DashboardLayout = () => {
    return (
        <div className='flex gap-4'>
            <div className=''><Sidebar></Sidebar></div>
            <div className='w-[80%] ml-60  justify-center'>
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout