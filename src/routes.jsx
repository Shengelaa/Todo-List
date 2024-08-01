import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/LayOut/Layout";
import Login from "./views/Login/Login";

import Todo from "./views/ToDoList/ToDoList";
import UserHome from "./views/UserHome/UserHome";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />

        <Route path='ToDoList' element={<Todo />} />
        <Route path='UserHome' element={<UserHome />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
