import React from 'react'
import { BorderCountries, CountryInfo } from '../components';
import dummyFlag from "../image/canada-flag.jpg";

const CountryDetails = () => {
    return (
        <div className="current-country">
            <div className="current-country__flag">
                <img src={dummyFlag} alt="selected-country-flag"/>
            </div>
            <div className="current-country-info">
                <h2>Belgium</h2>
                <CountryInfo/>
                <BorderCountries/>
            </div>
        </div>
    )
}

export default CountryDetails