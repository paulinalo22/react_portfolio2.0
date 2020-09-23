import React from "react";
import project1 from "../../img/doggo.png";
import project2 from "../../img/burger.png";
import project3 from "../../img/Music.png";
import project4 from "../../img/school.png";
import project5 from "../../img/workout.png";
import video from "../../img/space.mp4";

function Portfolio() {
  return (
    <div>
      <video autoPlay loop muted 
      style= {{
        objectFit: "cover",
        width: "100vw",
        height: "120vh",
        position: "fixed",
        top: "0",
        left: "0",
      }}
      >
        <source src={video} type="video/mp4"/>
      </video>
      <section className="portfolio bg-light" id="portfolio">
        <div className="container text-center">
          <h1>I probably shouldn't brag, but dang, I amaze and astonish</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://serene-ocean-57048.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={project1} className="img-fluid p-2" alt="Galleristic"/></a>
                <div className="card-body">
                  <h2 className="card-title">Dog eShop</h2>
                  <p className="card-text">Super Fun App where peeps can get goodies for their best bud!</p>
                  <a href="https://serene-ocean-57048.herokuapp.com/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Let's go Shop!</a>
                  <a href="https://github.com/villanew96/project-2/tree/master" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github Repo</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://floating-falls-01477.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={project2} className="img-fluid p-2" alt="Drink Up" /></a>
                <div className="card-body">
                  <h2 className="card-title">Bob's Burger Logger</h2>
                  <p className="card-text">Tell Bob the Burger you want!</p>
                  <a href="https://floating-falls-01477.herokuapp.com/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Let's get one!</a>
                  <a href="https://github.com/paulinalo22/homework_burger_yum" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github Repo</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://brockbatblue.github.io/Project_One/" target="_blank" rel="noopener noreferrer">
                  <img src={project3} className="img-fluid p-2" alt="EatDaBurger" /></a>
                <div className="card-body">
                  <h2 className="card-title">Music Man</h2>
                  <p className="card-text">The Best Lyrics and Karaoke App</p>
                  <a href="https://brockbatblue.github.io/Project_One/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Let's Sing!</a>
                  <a href="https://github.com/BrockBatBlue/Project_One" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github Repo</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://cfb.edu.mx/" target="_blank" rel="noopener noreferrer">
                  <img src={project4} className="img-fluid p-2" alt="Code Quiz" /></a>
                <div className="card-body">
                  <h2 className="card-title">School Website</h2>
                  <p className="card-text">I made this website for school in Mexico</p>
                  <a href="https://cfb.edu.mx/" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Let's Learn!</a>
                  <a href="https://github.com/paulinalo22/cfb-willie" className="btn btn-primary ml-3 mb-1" rel="noopener noreferrer" target="_blank">Github Repo</a>
                </div>
              </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card">
                <a href="https://arcane-badlands-49617.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  <img src={project5} className="img-fluid p-2" alt="Weather Dashboard" /></a>
                <div className="card-body">
                  <h2 className="card-title">Gamer Dash</h2>
                  <p className="card-text">Super fun full stack application allows users to have fun with the games available in our database. Unlike other similar apps, users have the option to create an account and upload their own videogames for others to discover.</p>
                  <a href="http://gamer-dash.herokuapp.com/signup" className="btn btn-primary ml-3" rel="noopener noreferrer" target="_blank">Let's get Play!</a>
                  <a href="https://github.com/hoffman1200/Project3" className="btn btn-primary ml-3" rel="noopener noreferrer" target="_blank">Github Repo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
