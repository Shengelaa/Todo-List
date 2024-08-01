import React from "react";
import Styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

const Home = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;

    signIn(username, () => navigate("/ToDoList"));
  };

  return (
    <div className={Styles.homeContainer}>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>
          UserName:
          <input type='text' id='username' name='username' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Home;
