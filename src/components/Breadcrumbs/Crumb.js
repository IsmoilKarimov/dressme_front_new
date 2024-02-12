import React from "react";
import { Link } from "react-router-dom";

const Crumb = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumbs flex items-center ">
        {paths.map((path, index) => (
          <li className="font-AeonikProMedium" key={index}>
            {path.url ? (
              <Link to={path.url}>{path.label}</Link>
            ) : (
              <span>{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Crumb;
