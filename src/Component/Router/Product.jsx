import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <React.Fragment>
      <div>
        <input type="search" placeholder="Search Product"></input>
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </React.Fragment>
  );
};
