import React from "react";

import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";
import ToDoList2 from "../../views/ToDoList/ToDoList";
const UserHome = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();

  const GoBack = () => {
    navigate("/ToDoList");
  };

  const SignOut = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;

    signIn(username, () => {
      <Link to={ToDoList2}></Link>;
    });
  };
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome back, {user}!</p>
      <button onClick={GoBack}>Go Back To List</button>
      <br />
      <br />
      <button onClick={SignOut}>Log Out</button>
    </div>
  );
};

export default UserHome;
