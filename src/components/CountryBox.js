import React from 'react'
import dummyFlag from "../image/canada-flag.jpg"

const CountryBox = ({id,name,flag,population,region,capital}) => {
  return (
    <div className="country-box">
      <div className="country-box-image">
        <img src={flag} alt="country-flag" />
      </div>
      <article className="country-box-info">
        <h2>{name}</h2>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </article>
    </div>
  );
}

export default CountryBox