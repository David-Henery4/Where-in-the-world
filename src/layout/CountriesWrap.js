import React from 'react'
import { CountryBox } from '../components'
import { tempCountryData } from '../dummyData/tempCountryData'
import {Link} from "react-router-dom"

const CountriesWrap = () => {
  const handleCountryClick = () => {
    // Have to use "useLocation" to check path to render the back btn & filter conditionally.
  }
  return (
    <div className="countries">
      <div className='countries-wrap'>
        {tempCountryData.map((temp) => {
          return (
            <Link className="countries-link-style" to="/country-details" key={temp.id}>
              <CountryBox {...temp} />;
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default CountriesWrap