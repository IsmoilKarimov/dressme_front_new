import { Link, useLocation,  } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import "./Breadcrumbs.css";

const routes = [
  { path: "/categories/:id", breadcrumb: "Categories" },
  { path: "/sections/:id", breadcrumb: "Section" },
  { path: "/shops", breadcrumb: "Shops" },
  { path: "/shops/:id", breadcrumb: "ShopName" },
  { path: "/product/:id", breadcrumb: "Shop-name-data" },
];

function BreadcrumbRoad() {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  console.log(location.pathname, "pathname");

  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-[1280px] w-full min-h-[44px] mt-[26px]">
        <ul className="w-fit breadcrumbs flex justify-start text-sm">
          {breadcrumbs.map(({match, breadcrumb }) => {
            console.log(match,'match');
            console.log(breadcrumb, "breadcrumb");
            return (
              <li>
                <Link
                  key={match?.params?.id}
                  to={match.pathname}
                  className={` ${
                    match.pathname !== location.pathname
                      ? "text-black"
                      : "text-setTexOpacity"
                  } font-AeonikProRegular`}
                >
                  {breadcrumb}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BreadcrumbRoad;
