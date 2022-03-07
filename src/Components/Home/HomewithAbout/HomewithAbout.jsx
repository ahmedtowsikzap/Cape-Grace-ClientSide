import React from "react";

const HomewithAbout = () => {
  return (
    <>
      <section
        className="slice slice-lg mt-5 pt-5"
        data-delimiter="1"
        style={{ fontFamily: "var(--montserrat-font)" }}
      >
        <div className="container">
          <div className="row cols-xs-space cols-sm-space align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="logo"
                className="img-center img-fluid rounded z-depth-3"
              />
            </div>
            <div className="col-md-6 col-lg-5 ml-lg-auto">
              <div className="pr-md-4">
                <h3 className="heading h3">
                  Tours with Low Single Supplements
                </h3>
                <p className="lead text-gray mt-4">
                  Travelers enjoy the intimacy of our small groups of never
                  more than 16 guests. Our Journeys Without a Crowd offer a
                  lighter footprint with a more authentic, caring and
                  sustainable experience enhanced by our native-born guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomewithAbout;