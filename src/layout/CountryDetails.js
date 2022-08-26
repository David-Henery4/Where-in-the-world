import React, { useEffect } from 'react'
import { BorderCountries, CountryInfo } from '../components';
import dummyFlag from "../image/canada-flag.jpg";
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom";

const CountryDetails = () => {
    const {id} = useParams()
    const { allCountriesData } = useSelector((store) => store.overall);
    
    const getSingleCountry = () => {
        const currentCountry = allCountriesData.find(c => c.id === id)
        console.log(currentCountry)
        // console.log(allCountriesData)
    }

    useEffect(() => {
        getSingleCountry()
    },[id])

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