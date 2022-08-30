import React, { useEffect } from 'react'
import { BorderCountries, CountryInfo, LoadingPage } from '../components';
import dummyFlag from "../image/canada-flag.jpg";
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useLocation} from "react-router-dom";
import { getSingleCountryData } from '../toolkit/features/overall/overallSlice';

const CountryDetails = () => {
  const location = useLocation()
  const {borders} = location.state
    const dispatch = useDispatch()
    const {code} = useParams()
    const { singleCountryData, isLoading } = useSelector(
      (store) => store.overall
    );
    //
    useEffect(() => {
      // console.log(code)
      dispatch(getSingleCountryData({code, borders}))
    },[code])
    //
    return (
      <div>
        {isLoading ? (
          <LoadingPage />
        ) : (
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
              <h2>
                {singleCountryData.name && singleCountryData.name.official}
              </h2>
              <CountryInfo {...singleCountryData} />
              <BorderCountries
                borders={
                  (singleCountryData.bordersInfo)
                }
              />
            </div>
          </div>
        )}
      </div>
    );
}

export default CountryDetails