import React from "react";
import device from "../../../images/hotel.png";

const HomeWithMore = () => {
  return (
    <>
      <section
        className="slice-lg mt-5"
        style={{ fontFamily: "var(--montserrat-font)" }}
      >
        <div className="container">
          <div className="row align-items-center cols-xs-space cols-sm-space cols-md-space">
            <div className="col-lg-6 order-lg-2 ml-lg-auto">
              <div className="block block-image">
                <img
                  src={device}
                  alt="device"
                  className="img-fluid img-center"
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-1">
              <div className="row-wrapper">
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="icon-text">
                        <h3 className="heading h4">Resturant</h3>
                        <p>
                          We welcome you to taste Holland! Enjoy a new authentic
                          Hollands Trattoria menu, created by our Partner Chef
                          Oliver Glowig from Rome and our culinary team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i></i>
                      </div>
                      <div className="icon-text">
                        <h3 className="heading h4">Spa - beauty & Health</h3>
                        <p>
                          Cheers to your new spa! Whether you want more
                          relaxation, less stress, or a place to entertain, were
                          sure youre going to love it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex align-items-start">
                      <div className="icon icon-lg">
                        <i></i>
                      </div>
                      <div className="icon-text">
                        <h3 className="heading h4">Conference Room</h3>
                        <p>
                          Like a boardroom, most conferencing spaces are
                          designed with a long table and plenty of chairs.
                          Usually, a conference room will also have a projector
                          or large TV on one side, with the chairs arranged so
                          that no one has their back to the screen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeWithMore;