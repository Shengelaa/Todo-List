import React from "react";
import { Outlet, Link } from "react-router-dom";
import ToDoList from "../../views/ToDoList/ToDoList";

const Layout = () => {
  return (
    <>
      <Outlet />
  
    </>
  );
};

export default Layout;
