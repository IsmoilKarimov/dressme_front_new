import React from 'react'
import { img1, img2, img3, img4, img5, img6, img7, img8 } from '../../AssetsMain'
import { Link } from 'react-router-dom'

const NavCategoryModal = ({isVisible, onClose}) => {
    
    if(!isVisible) return null;

    const categoryModalArray = [
        { id: 1111, img: img1 , type: 'Мужчинам' },
        { id: 2222, img: img2 , type: 'Женщинам' },
        { id: 3333, img: img3 , type: 'Детям' },
        { id: 4444, img: img4 , type: 'Головные уборы' },
        { id: 5555, img: img5, type: 'Верхняя одежда' },
        { id: 6666, img: img6, type: 'Нижняя одежда' },
        { id: 7777, img: img7, type: 'Обувь' },
        { id: 8888, img: img8 , type: 'Аксессуары' },
      ]


  return (
      <div className='fixed top-[270px] left-[114px] inset-0 backdrop-blur-sm flex justify-center items-center'>
        <div className='w-[675px] flex flex-col shadow-modalCategoryShadow bg-white rounded-lg p-2'>
            <button className='text-xl place-self-end pr-2' onClick = {()=>{onClose()}} >x</button>
            <section className="ss:w-fit md:w-[650px] h-fit m-0 p-4 ">
                <action className=" w-full flex items-center flex-wrap gap-y-6">
                    { categoryModalArray.map(data => {
                    return(
                        <Link to='/' key={data?.id} className="w-1/4 flex items-center justify-center">
                        <figure className="group">
                            <div className="group-hover:border-black transition duration-300 w-[120px] h-[120px] border border-categoryModalBorderColor bg-categoryModalBgColor flex items-center justify-center rounded-xl">
                                <img src={data.img} alt="" />
                            </div>
                            <figcaption className="group-hover:text-black transition duration-300 text-center mt-2 text-setTexOpacity text-sm">{data?.type}</figcaption>
                        </figure>
                        </Link>
                    )
                    })}
                </action>
            </section>
        </div>
      </div>
  )
}

export default NavCategoryModal
