import { NavLink, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  console.log(location, 'location');

  let currentLink = [];

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "").map((url) => { 
    let crumb = url.replace(':','')
    currentLink.push(`/${crumb}`);
    return (
      <div
        key={crumb}
        className="w-full crumb not-italic font-AeonikProMedium text-[14px] text-black tracking-[1%] mr-[10px]"
      >
        <NavLink to={currentLink.join('').toLocaleUpperCase()}>{crumb}</NavLink>
      </div>
    );
  });

  console.log(currentLink, "currentLink");

  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1280px] w-full min-h-[44px] mt-[26px]">
        <div className="w-fit breadcrumbs flex justify-start">
          <NavLink to="/" className="font-AeonikProMedium flex md:hidden text-[14px] items-center">
            Главная <span className="mx-[10px]">/</span>
          </NavLink>
          {crumbs}
        </div>
      </div>
    </div>
  );
}
