import React, { useEffect } from 'react'
import { CountryBox, LoadingPage } from '../components'
import { tempCountryData } from '../dummyData/tempCountryData'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../toolkit/features/overall/overallSlice";

const CountriesWrap = () => {
  const { allCountriesData, isFilterActive, filteredCountriesData, isLoading } =
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
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="countries-wrap">
          {allCountriesData.length > 0 &&
            checkForFilter().map((temp, i) => {
              const { borders, ccn3 } = temp;
              console.log(ccn3);
              return (
                <Link
                  className="countries-link-style"
                  to={`/country/${ccn3}`}
                  state={{borders}}
                  key={temp.id}
                >
                  <CountryBox {...temp} />;
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default CountriesWrap