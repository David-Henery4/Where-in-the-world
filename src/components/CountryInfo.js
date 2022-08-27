import React from 'react'

const CountryInfo = ({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
}) => {
  console.log();
  return (
    <>
      <div className="country-info country-info-details-1">
        {/* Details 1 */}
        <p>
          <span>Native Name: </span>
          {name && Object.values(name.nativeName)[0].official}
        </p>
        <p>
          <span>Population: </span>
          {name && population.toLocaleString()}
        </p>
        <p>
          <span>Region: </span>
          {region && region}
        </p>
        <p>
          <span>Sub Region: </span>
          {subregion && subregion}
        </p>
        <p>
          <span>Capital: </span>
          {capital || ""}
        </p>
      </div>

      {/*Details 2*/}
      <div className="country-info country-info-details-2">
        <p>
          <span>Top Level Domain: </span>
          {tld || ""}
        </p>
        <p>
          <span>Currencies: </span>
          {currencies && Object.values(currencies)[0].name}
        </p>
        <p>
          <span>Languages: </span>
          {languages && Object.values(languages).map((lang,i,arr) => {
            if (i === arr.length - 1){
              return `${arr[i]}`
            }
            return `${arr[i]}, `
          })}
        </p>
      </div>
    </>
  );
};

export default CountryInfo