import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Question.css"

const QuestiononHome = () => {
  return (
    <>
      <section className="slice background-color">
        <div className="mt-5">
        <div className="container">
          <div className="row align-items-center cols-xs-space cols-sm-space cols-md-space text-center text-lg-left">
            <div className="col-lg-7">
              <h1 className="heading h2 text-white strong-500">
                Want to Connect?
              </h1>
              <p className="lead text-white">
                Take your time & just call right away to or email us for any
                queries
              </p>
            </div>
            <div className="col-lg-3 ml-lg-auto">
              <div className="text-center text-md-right">
                <Link to="/contactus">
                  <Button className="btn btn-danger btn-rounded my-3 px-5">
                    Contact us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default QuestiononHome;