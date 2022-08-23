import React from 'react'

const CountryBox = () => {
  return (
    <div className='country-box'>
        <div className="country-box-image">
            <img src="" alt="country-flag" />
        </div>
        <article className="country-box-info">
            <h2>Name</h2>
            <p>Population: 81,000,000</p>
            <p>Region: Europe</p>
            <p>Capital: Berlin</p>
        </article>
    </div>
  )
}

export default CountryBox