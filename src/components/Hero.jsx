import React from "react";

const Hero = () => {
  return (
    <>
      <header id="home" className="header">
        <div className="overlay" />
        <div className="header-content container">
          <h1 className="header-title">
            <span className="up">HI!</span>
            <span className="down">I am Mbali Puso</span>
          </h1>
          <p className="header-subtitle">FULL STACK DEVELOPER</p>
          <button className="btn btn-primary">Visit My Works</button>
        </div>
      </header>
    </>
  );
};

export default Hero;
