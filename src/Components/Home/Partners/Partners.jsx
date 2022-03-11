import React from "react";
import client1 from "../../../images/client-1.png";
import client2 from "../../../images/client-2.png";
import client3 from "../../../images/client-3.png";
import client4 from "../../../images/client-4.png";
import client5 from "../../../images/client-5.png";
import client6 from "../../../images/client-6.png";

const Partner = () => {
  return (
    <>
      <section className="slice mt-5 pt-3">
        <div className="container">
          <div className="mb-md text-center">
            <h3 style={{ marginTop: "50px" }} className="heading h2">
              Trusted by over <span className="text-warning">20k</span> clients
            </h3>
            <div className="fluid-paragraph mt-3">
              <p className="lead">Partenered Global Brands</p>
            </div>
          </div>
          <div className="row cols-xs-space cols-sm-space cols-md-space">
            <div className="col-md-2 col-6">
              <div className="px-4 py-4 rounded">
                <img src={client1} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="px-4 py-4 rounded">
                <img src={client2} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="px-4 py-4 rounded">
                <img src={client3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="px-4 py-4 rounded">
                <img src={client4} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="px-4 py-4 rounded">
                <img src={client5} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-2 col-6">
              <div className="px-4 py-4 rounded">
                <img src={client6} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partner;
