import React from 'react'

const CountryInfo = () => {
    return (
      <>
        <div className="country-info country-info-details-1">
          {/* Details 1 */}
          <p>
            <span>Native Name: </span>
            Belgie
          </p>
          <p>
            <span>Population: </span>
            11,000,000
          </p>
          <p>
            <span>Region: </span>
            Europe
          </p>
          <p>
            <span>Sub Region: </span>
            Western Europe
          </p>
          <p>
            <span>Capital: </span>
            Brussels
          </p>
        </div>

        {/*Details 2*/}
        <div className="country-info country-info-details-2">
          <p>
            <span>Top Level Domain: </span>
            be
          </p>
          <p>
            <span>Currencies: </span>
            Euro
          </p>
          <p>
            <span>Languages: </span>
            Dutch, French, German
          </p>
        </div>
      </>
    );
}

export default CountryInfo