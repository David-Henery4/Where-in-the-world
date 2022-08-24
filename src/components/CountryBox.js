import React from 'react'
import dummyFlag from "../image/canada-flag.jpg"

const CountryBox = () => {
  return (
    <div className="country-box">
      <div className="country-box-image">
        <img src={dummyFlag} alt="country-flag" />
      </div>
      <article className="country-box-info">
        <h2>Name</h2>
        <p>
          <span>Population:</span> 81,000,000
        </p>
        <p>
          <span>Region:</span> Europe
        </p>
        <p>
          <span>Capital:</span> Berlin
        </p>
      </article>
    </div>
  );
}

export default CountryBox