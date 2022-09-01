import React from 'react'

const CountryBox = ({name,flags,population,region,capital}) => {
  
  return (
    <div className="country-box">
      <div className="country-box-image">
        <img src={flags.png} alt="country-flag" />
      </div>
      <article className="country-box-info">
        <h2>{name.common}</h2>
        <p>
          <span>Population:</span> {population.toLocaleString()}
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