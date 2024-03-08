import React, { useContext } from 'react';
import './bread.css'; // Import CSS file for styling
import { NavLink } from 'react-router-dom';
import { LanguageDetectorDress } from '../../language/LanguageItems';

const NewBreadCrump = ({ items }) => {
  const [languageDetector, setLanguageDetector] = useContext(LanguageDetectorDress)
  console.log(languageDetector, 'languageDetector-bread');
  return (
    <nav
      className="w-full  overflow-x-scroll md:overflow-auto pb-[10px] md:pb-0 px-3 md:px-0"
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb  ">
        {items.map((item, index) => (
          <li className="breadcrumb-item" key={index}>
            {index === items.length - 1 ? (
              <span className="breadcrumb-item--active inline truncate text-setTexOpacity font-AeonikProMedium text-center text-[14px] md:text-[15px] capitalize items-center">
                {languageDetector?.typeLang === "uz" && item.label_uz}
                {languageDetector?.typeLang === "ru" && item.label_ru}
              </span>
            ) : (
              <>
                <NavLink
                  className="font-AeonikProMedium capitalize truncate text-[14px] md:text-[15px] items-center no-underline hover:text-fullBlue tracking-[1px]"
                  to={item?.url}
                >
                  {languageDetector?.typeLang === "uz" && item.label_uz}
                  {languageDetector?.typeLang === "ru" && item.label_ru}
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