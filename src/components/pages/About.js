import React from "react";
import Typed from 'react-typed';
import resume from "../../img/resume.pdf";
import video from "../../img/space.mp4";

function About() {
  return (
    <>
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
    <div className="d-flex justify-content-center">
      <section className="about px-4 my-5">
        <div className="me py-5">
          <h5 className="font-ram font-size-34 py-2">Please Stalk Me!</h5>
          <h1 className="font-ram font-size-34 py-2">Now this is the story...</h1>
        </div>
        <div className="row m-0">
          <div className="col-sm-11">
            <h5 className="font-ram font-size-34 py-2"> Call me Pauli & <span><Typed strings={["Full Stack Developer", "Biologist","Energy Low Class Engineer"]} typeSpeed={60} backSpeed={40} loop/></span></h5>
            <p className="font-ram text-white-50 py-2">
            My academic and professional career has been diverse
          and a wee bit strange. I studied Conservation Biology as my
          undergraduate degree with the hope of FINISHING all future
          extinctions in Mexico. Once I realized that was a very <strong>unrealistic</strong>
          expectation, I noticed that the energy sector was one of the biggest
          contributors to climate change. Therefore, I switch my academic
          focus and decided to get a Master Sustainable Energy. 
            </p>
            <p className="font-ram text-white-50 py-2">
            I discovered that programmimg is as a field that can be used
          in pretty much any area. With this in mind, I think I will be able
          to merge all my current knowledge and apply it into a common field.
              </p>
              <p className="font-ram text-white-50 py-2">
                I'm still learning but acquired skills in the following subjects during the Coding Bootcamp at Tecnológico 
                de Monterrey: HTML, CSS, Bootstrap, Javascript, Jquery, Node.js, Express, Sequelize, Passport, Mysql, MongoDB, 
                React.
              </p>
            <div className="d-flex flex-row flex-wrap justify-content-start py-4">
              <div className="d-flex flex-column">
                <p className="font-ram"><b>Mail: </b><span className="text-white-50">paulina.lopez1994@gmail.com</span></p>
                <p className="font-ram"><b>Phone: </b><span className="text-white-50">55 3565 2078</span></p>
              </div>
              <div className="d-flex flex-column ml-4">
                <p className="font-ram"><b>Github : </b><a className="text-white-50"
                  href="https://github.com/paulinalo22" target="_blank" rel="noopener noreferrer">Let's Go there</a></p>
                <p className="font-ram"><b>Linkedin : </b><a className="text-white-50"
                  href="https://www.linkedin.com/in/paulina-l%C3%B3pez-salinas-00b420126/" target="_blank" rel="noopener noreferrer">You know you want to go...</a></p>
              </div>
            </div>
            <a className="btn btn-dark text-uppercase mr-3" href={resume} download>View Resume<span> </span> <i
              className="fa fa-download" aria-hidden="true"></i></a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default About;
