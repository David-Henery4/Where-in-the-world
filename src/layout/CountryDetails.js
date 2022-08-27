import React, { useEffect } from 'react'
import { BorderCountries, CountryInfo } from '../components';
import dummyFlag from "../image/canada-flag.jpg";
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from "react-router-dom";
import { getSingleCountryData } from '../toolkit/features/overall/overallSlice';

const CountryDetails = () => {
    const dispatch = useDispatch()
    const {name} = useParams()
    const { singleCountryData } = useSelector((store) => store.overall);
    //
    //
    useEffect(() => {
        dispatch(getSingleCountryData(name))
        // getSingleCountry()
    },[name])
    //
    return (
      <div className="current-country">
        <div className="current-country__flag">
          <img
            src={
              Object.entries(singleCountryData).length &&
              singleCountryData.flags.svg
            }
            alt="selected-country-flag"
          />
        </div>
        <div className="current-country-info">
          <h2>{singleCountryData.name && singleCountryData.name.official}</h2>
          <CountryInfo {...singleCountryData} />
          <BorderCountries borders={singleCountryData.borders} />
        </div>
      </div>
    );
}

export default CountryDetails