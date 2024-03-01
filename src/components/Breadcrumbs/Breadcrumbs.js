import { NavLink, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

export default function Breadcrumbs() {
  const location = useLocation();

  // console.log(location, 'location');

  let currentLink = [];
  console.log(location?.pathname);
  const crumbs = location?.pathname?.split("/").filter((crumb) => crumb !== "").map((url) => {
    let crumb = url.replace(':', '')
    currentLink.push(`/${crumb}`);

    return (
      <div
        key={crumb}
        className="w-fit crumb flex breadcrumb-item not-italic font-AeonikProMedium text-[14px] text-black tracking-[1%]"
      >
        <NavLink className="font-AeonikProMedium lowercase text-[14px] items-center" to={currentLink.join('').toLocaleLowerCase()}>
          <span className="mx-[5px]">/</span>
          {crumb?.toLocaleLowerCase()}
        </NavLink>
      </div>
    );
  });
  // console.log(crumbs, 'crumbs');
  // console.log(currentLink, "currentLink");

  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1280px] w-full min-h-[44px] mt-[26px] flex  items-center">
        <div className="w-full breadcrumbs flex items-center justify-start breadcrumb">
          <NavLink to="/" className="font-AeonikProMedium flex  text-[14px] items-center">
            Главная
          </NavLink>
          {crumbs}
        </div>
      </div>
    </div>
  );
}
