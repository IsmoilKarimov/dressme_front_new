import React from 'react'
import { DashboardList, DashboardUser } from '../../../AssetsMain/index'

const DashboardRegistration = () => {
  return (
    <div className='max-w-[1280px] w-full flex justify-center items-center m-auto'>
        <div className='w-full h-fit'>
          <div className='text-4xl font-medium mb-[50px] text-center'>Регистрация продавца</div>
          <div className='w-[484px] flex justify-between items-center bg-dashboardBtnBg rounded-lg mx-auto'>
              <button className='w-1/2 flex items-center font-medium border px-[25px] py-3 rounded-lg'>
                <img src={DashboardUser} alt="" />
                <span className='ml-2'>ФИЗИЧЕСКОЕ ЛИЦО</span>
              </button>
              <button className='w-1/2 flex items-center font-medium border px-[25px] py-3 rounded-lg'>
                <img src={DashboardList} alt="" />
                <span className='ml-2'>ФИЗИЧЕСКОЕ ЛИЦО</span>
              </button>
          </div>
        </div>
    </div>
  )
}

export default DashboardRegistration
