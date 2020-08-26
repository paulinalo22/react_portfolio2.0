import React from "react";
import Typed from 'react-typed';

function Home() {
  return (
    <div>
      <section className="site-banner">
          <div className="banner-area">
            <div className="author text-center">
              <div className="author-img"></div>
              <h1 className="text-white font-staat font-size-50 text-uppercase py-3">Paulina López Salinas</h1>
              <h2 className="text-white font-ram font-size-40"><Typed strings={["Full Stack Developer", "Biologist", "Energy Low Class Engineer"]} typeSpeed={60} backSpeed={40} loop/></h2>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Home;
