import React from "react";

function Contact(props) {

  return (
    <div class="contact">
      <section className="site-banner">
        <div className="banner-area">
            <div className="container text-center">
              <br/><br/><br/><br/>
              <h1>Send Me a DM</h1>
              <form name="contact_form"
                action="#" target="_blank"
                method="POST">
                <div className="form-group">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group hidden">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <input
                        type="email"
                        name="_replyto"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group hiddenRight">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 mx-auto">
                      <textarea
                        name="message"
                        className="form-control form-control-lg"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Write your wildest dreams here..."
                      />
                    </div>
                  </div>
                </div>
                <div className="row text-md-right text-sm-center">
                  <div className="col-12 col-sm-12 col-md-6 mx-auto">
                    <button
                      type="submit"
                      className="btn btn-primary mb-2 hidden" onClick="clean">
                      Submit
							      </button>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
