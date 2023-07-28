import React, { useState } from 'react'
import { DashboardList, DashboardUser } from '../../../AssetsMain/icons'
import { Select } from 'antd';
import { Box, TextField } from '@material-ui/core';



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
          <div className='text-3xl font-medium mt-[20px] mb-[30px] text-center'>Регистрация продавца</div>
          <div className='w-[484px] flex justify-between items-center bg-dashboardBtnBg rounded-lg mx-auto mb-[30px]'>
              <button 
                onClick={() => setNaturalPerson(true)}
                className={`group w-1/2 flex items-center font-medium text-sm px-[25px] py-3 
                 ${ naturalPerson ? "border border-fullBlue text-fullBlue rounded-lg" : "" }`
                }
              >
                {/* <img src={dashboardUser} alt="" /> */}
                <DashboardUser className={`${naturalPerson ? "text-fullBlue" : "" }`}/>
                <span className='ml-2'>ФИЗИЧЕСКОЕ ЛИЦО</span>
              </button>
              <button 
                onClick={() => setNaturalPerson(false)}
                className={`w-1/2 flex items-center font-medium text-sm px-[25px] py-3 
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
                <div className='flex items-center'>
                  <div className='mx-auto'>
                    <div className='mb-4'>
                      <div className='flex items-center'>
                        <input type="radio" id="workOne" name="type_work" value="1" className='w-[18px] h-[18px] cursor-pointer' />
                        <label for="workOne" className='ml-[10px] font-medium text-base cursor-pointer'>
                          Индивидуальный предприниматель
                        </label>
                      </div>
                      <p className='text-sm text-dashboardLightTextColor font-normal ml-7'>поставьте галочку, если вы являетесь индивидуальным предпринимателем </p>  
                    </div>
                    <div className='mb-4'>
                      <div className='flex items-center'>
                        <input type="radio" id="workTwo" name="type_work" value="2" className='w-[18px] h-[18px] cursor-pointer'/>
                        <label for="workTwo" className='ml-[10px] font-medium text-base cursor-pointer'>
                          Самозаняты
                        </label>
                      </div>
                      <p className='text-sm text-dashboardLightTextColor font-normal ml-7'>поставьте галочк, если вы cамозаняты </p>  
                    </div>
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
            
            <div className='w-full border my-[80px]'></div>
            
            <div className='w-full'>
              <div className='w-full flex items-center gap-x-[50px] mb-[25px]'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '71ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    type='text'
                    id="standard-basic"
                    label="Имя" 
                    fullWidth
                    fontSize={'12px'}
                    variant="standard" />
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '71ch' },
                  }}
                  noValidate
                  autoComplete="off"
                  size='small'
                >
                  <TextField 
                    type='text'
                    id="standard-basic"
                    fullWidth
                    size='small'
                    label="Фамилия" 
                    variant="standard" 
                  />
                </Box>
              </div>
              <div className='w-full flex items-center gap-x-[50px] mb-[25px]'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '71ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    type='email'
                    id="standard-basic"
                    label="Email" 
                    variant="standard" />
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '71ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    type='number'
                    id="standard-basic" 
                    className='w-full' 
                    label="Номер телефона" 
                    variant="standard" 
                    fullWidth
                  />
                </Box>
              </div>
              <div className='w-full flex items-center gap-x-[50px]'>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '71ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    type='password'
                    id="standard-basic"
                    label="Пароль" 
                    variant="standard" />
                </Box>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '71ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField 
                    type='password'
                    id="standard-basic" 
                    className='w-full' 
                    label="Повторите пароль" 
                    variant="standard" 
                    fullWidth
                  />
                </Box>
              </div>
            </div>    
          </form>
          <button className='flex items-center mx-auto font-medium bg-fullBlue text-base text-white px-[100px] py-[15px] mt-[90px] rounded-xl'>Зарегистрироваться</button>
        </div>
      
    </div>
  )
}

export default DashboardRegistration
