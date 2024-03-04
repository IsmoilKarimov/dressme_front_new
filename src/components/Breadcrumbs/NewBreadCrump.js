import React from 'react';
import './bread.css'; // Import CSS file for styling
import { NavLink } from 'react-router-dom';

const NewBreadCrump = ({ items }) => {
    return (
      <nav
        className="w-full overflow-x-scroll md:overflow-auto mx-3 md:mx-0"
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li className="breadcrumb-item" key={index}>
              {index === items.length - 1 ? (
                <span className="breadcrumb-item--active inline truncate text-setTexOpacity font-AeonikProMedium text-center text-[14px] md:text-[15px] capitalize items-center">
                  {item.label_ru}
                </span>
              ) : (
                <>
                  <NavLink
                    className="font-AeonikProMedium capitalize truncate text-[14px] md:text-[15px] items-center no-underline hover:text-fullBlue tracking-[1px]"
                    to={item?.url}
                  >
                    {item.label_ru}
                  </NavLink>
                  <span className="px-3 text-setTexOpacity">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
};

export default NewBreadCrump;