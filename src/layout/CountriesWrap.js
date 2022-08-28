import React, { useEffect } from 'react'
import { CountryBox } from '../components'
import { tempCountryData } from '../dummyData/tempCountryData'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { getAllCountries } from "../toolkit/features/overall/overallSlice";

const CountriesWrap = () => {
  const { allCountriesData, isFilterActive, filteredCountriesData } =
  useSelector((store) => store.overall);
  const dispatch = useDispatch()
  //
  const checkForFilter = () => {
    if (isFilterActive) return filteredCountriesData
    if (!isFilterActive) return allCountriesData
  }
  //
  useEffect(() => {
    dispatch(getAllCountries())
  }, [])
  //
  return (
    <div className="countries">
      <div className='countries-wrap'>

        { allCountriesData.length > 0 &&
        checkForFilter().map((temp, i) => {
          // console.log(temp)
          return (
            <Link
              className="countries-link-style"
              to={`/country/${temp.name.official}`}
              key={temp.id}
            >
              <CountryBox {...temp} />;
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default CountriesWrap