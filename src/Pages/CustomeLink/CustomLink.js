import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";


const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
        style={{ borderBottom: match ? "2px solid orange" : "none", boxShadow:match?"inset 0px 2px 5px 0px":"" }
      }
        to={to}
        {...props}
      >
        {children}
      </Link>
        </div>
    );
};

export default CustomLink;