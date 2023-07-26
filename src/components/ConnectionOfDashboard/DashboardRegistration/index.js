import React, { useState } from 'react'
import { DashboardList, DashboardUser } from '../../../AssetsMain/icons'
import { Select } from 'antd';


const DashboardRegistration = () => {

  const [naturalPerson, setNaturalPerson] = useState(true)

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };

  return (
    <div className='max-w-[1280px] w-full flex justify-center items-center m-auto'>
        <div className='w-full h-fit'>
          <div className='text-4xl font-medium mb-[50px] text-center'>Регистрация продавца</div>
          <div className='w-[484px] flex justify-between items-center bg-dashboardBtnBg rounded-lg mx-auto mb-[30px]'>
              <button 
                onClick={() => setNaturalPerson(true)}
                className={`group w-1/2 flex items-center font-medium  px-[25px] py-3 
                 ${ naturalPerson ? "border border-fullBlue text-fullBlue rounded-lg" : "" }`
                }
              >
                {/* <img src={dashboardUser} alt="" /> */}
                <DashboardUser className={`${naturalPerson ? "text-fullBlue" : "" }`}/>
                <span className='ml-2'>ФИЗИЧЕСКОЕ ЛИЦО</span>
              </button>
              <button 
                onClick={() => setNaturalPerson(false)}
                className={`w-1/2 flex items-center font-medium px-[25px] py-3 
                  ${ !naturalPerson ? "border border-fullBlue text-fullBlue rounded-lg" : "" }`
                }
              >
                {/* <img src={dashboardList} alt="" /> */}
                <DashboardList className={`${naturalPerson ? "text-fullBlue" : "" }`}/>
                <span className='ml-2'>ФИЗИЧЕСКОЕ ЛИЦО</span>
              </button>
          </div>
          <form action='#'>   
            
            {naturalPerson 
              ? (
                <div className='md:ml-[396px]'>
                  <div className='mb-4'>
                    <div className='flex items-center'>
                      <input type="radio" id="workOne" name="type_work" value="1" className='w-[18px] h-[18px] cursor-pointer' />
                      <label for="workOne" className='ml-[10px] font-medium text-lg cursor-pointer'>
                        Индивидуальный предприниматель
                      </label>
                    </div>
                    <p className='text-base text-dashboardLightTextColor font-normal ml-7'>поставьте галочку, если вы являетесь индивидуальным предпринимателем </p>  
                  </div>
                  <div className='mb-4'>
                    <div className='flex items-center'>
                      <input type="radio" id="workTwo" name="type_work" value="2" className='w-[18px] h-[18px] cursor-pointer'/>
                      <label for="workTwo" className='ml-[10px] font-medium text-lg cursor-pointer'>
                        Самозаняты
                      </label>
                    </div>
                    <p className='text-base text-dashboardLightTextColor font-normal ml-7'>поставьте галочк, если вы cамозаняты </p>  
                  </div>
                </div>            
              ):(
                <div className='w-[484px] rounded-lg mx-auto'>
                    <Select
                      className='w-full text-base'
                      showSearch
                      placeholder="Тип предприятия"
                      optionFilterProp="children"
                      size='large'
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                      }
                      options={[
                        {
                          value: 'Индивидуальный предприниматель',
                          label: 'Индивидуальный предприниматель',
                        },
                        {
                          value: 'Самозанятый',
                          label: 'Самозанятый',
                        },
                        {
                          value: 'Общество с ограниченной ответственностью (ООО)',
                          label: 'Общество с ограниченной ответственностью (ООО)',
                        },
                        {
                          value: 'Частное предприятие (ЧП)',
                          label: 'Частное предприятие (ЧП)',
                        },
                        {
                          value: 'Совместное предприятие (СП)',
                          label: 'Совместное предприятие (СП)',
                        },
                        {
                          value: 'Семейное предприятие (СП)',
                          label: 'Семейное предприятие (СП)',
                        },
                        {
                          value: 'Совместное предприятие ООО (СП ООО)',
                          label: 'Совместное предприятие ООО (СП ООО)',
                        },
                        {
                          value: 'Акционерное общество (АО)',
                          label: 'Акционерное общество (АО)',
                        },
                      ]}
                    />
                </div>
              )
            }
           
            <div className='w-full border my-[100px]'></div>
           
            <div className='w-full'>
              <div className='w-full flex items-center justify-between gap-x-[50px] mb-[25px]'>
                <div className='w-1/2 flex flex-col border-b border-black group'>
                  <label htmlFor="#" className='group-active:text-blue-500 mb-3 opacity-0 group-active:opacity-100'>Имя</label>
                  <input type="text" placeholder='Имя'/>
                </div>
                <div className='w-1/2 flex flex-col border-b border-black group'>
                  <label htmlFor="#" className='mb-3'>Фамилия</label>
                  <input type="text" placeholder='Фамилия' className=''/>
                </div>
              </div>
              <div className='w-full flex items-center justify-between gap-x-[50px] mb-[25px]'>
                <div className='w-1/2 flex flex-col border-b border-black group'>
                  <label htmlFor="#" className='group-active:text-blue-500 mb-3'>Email</label>
                  <input type="email" placeholder='Email'/>
                </div>
                <div className='w-1/2 flex flex-col border-b border-black group'>
                  <label htmlFor="#" className='mb-3'>Номер телефона</label>
                  <input type="number" placeholder='Фамилия' className=''/>
                </div>
              </div>
              <div className='w-full flex items-center justify-between gap-x-[50px]'>
                <div className='w-1/2 flex flex-col border-b border-black group'>
                  <label htmlFor="#" className='group-active:text-blue-500 mb-3'>Пароль</label>
                  <input type="password" placeholder='Пароль'/>
                </div>
                <div className='w-1/2 flex flex-col border-b border-black group'>
                  <label htmlFor="#" className='mb-3'>Повторите пароль</label>
                  <input type="password" placeholder='Повторите пароль' className=''/>
                </div>
              </div>
            </div>
          
          </form>
          <button className='flex items-center mx-auto font-medium bg-fullBlue text-lg text-white px-[100px] py-[15px] my-[90px] rounded-xl'>Зарегистрироваться</button>
        </div>
      
    </div>
  )
}

export default DashboardRegistration
