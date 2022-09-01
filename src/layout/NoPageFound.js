import React from "react";
import { Link } from "react-router-dom";

const NoPageFound = () => {
  return (
    <section className="error-page">
      <div className="error-page-main">
        <h3 className="error-page-main__title">
          Sorry page has not been found
          <span>
            <p>:(</p>
          </span>
        </h3>
        <Link to="/">
          <button className="error-page-main__btn">Back to main menu</button>
        </Link>
      </div>
    </section>
  );
};

export default NoPageFound;
