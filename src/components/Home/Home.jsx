import React from "react";
import "./home.css";
import SignInForm from "../SignInForm/SignInForm";

function Home() {
  return (
    <div className="main">
      <div className="main--container">
        <h1>Mi cochera App</h1>
        <SignInForm />
      </div>
    </div>
  );
}

export default Home;
