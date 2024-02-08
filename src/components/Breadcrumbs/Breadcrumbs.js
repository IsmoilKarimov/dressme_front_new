import { NavLink, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  console.log(location, 'location');

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <div
          key={crumb}
          className="crumb not-italic font-AeonikProMedium flex items-center  text-[15px] text-black tracking-[1%] mr-[10px]"
        >
          <div className="h-5 w-5 rounded bg-textOpacity -mt-1 mr-[10px]"></div>
          <NavLink to="/">
            {" "}
            Главная <span className="mx-[10px]">/</span>{" "}
          </NavLink>
          <NavLink to={currentLink}>{crumb}</NavLink>
          <NavLink to="/">
            {" "}
            Главная <span className="mx-[10px]">/</span>{" "}
          </NavLink>
          <NavLink to={currentLink}>{crumb}</NavLink>
          <NavLink to="/">
            {" "}
            Главная <span className="mx-[10px]">/</span>{" "}
          </NavLink>
          <NavLink to={currentLink}>{crumb}</NavLink>
          <NavLink to="/">
            {" "}
            Главная <span className="mx-[10px]">/</span>{" "}
          </NavLink>
          <NavLink to={currentLink}>{crumb}</NavLink>
          <NavLink to="/">
            {" "}
            Главная <span className="mx-[10px]">/</span>{" "}
          </NavLink>
          <NavLink to={currentLink}>{crumb}</NavLink>
        </div>
      );
    });
    
  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1280px] w-[100%] min-h-[44px] mt-[26px]">
        <div className="breadcrumbs">{crumbs}</div>
      </div>
    </div>
  );
}
