import React, { useEffect, useState } from 'react'
import { CountryBox, LoadingPage } from '../components'
import { tempCountryData } from '../dummyData/tempCountryData'
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../toolkit/features/overall/overallSlice";

const CountriesWrap = () => {
  const [countriesIndex,setCountriesIndex] = useState(0)
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const { allCountriesData, isFilterActive, filteredCountriesData, isLoading } =
    useSelector((store) => store.overall);
  const dispatch = useDispatch()
  //
  const checkForFilter = () => {
    if (isFilterActive) return filteredCountriesData
    if (!isFilterActive) return allCountriesData
  }
  //
  const itemsPerScroll = () => {
    const countriesShownAtOnce = 8
    const pages = Math.ceil(checkForFilter().length / countriesShownAtOnce)
    const newScroll = Array.from({length: pages}, (_,i) => {
      const start = i * countriesShownAtOnce
      return checkForFilter().slice(start, start+ countriesShownAtOnce)
    })
    const initialCountries = newScroll[0]
    setCountries(initialCountries)
    setAllCountries(newScroll)
    }
  //
  const addNewCountries = () => {
    if (allCountriesData){
      if (countriesIndex > countries.length) return
      setCountries(country => {
        setCountriesIndex(countriesIndex + 1)
        return [country, ...allCountries[countriesIndex + 1]].flat()
      })
    }
  }
  //
  useEffect(() => {
    itemsPerScroll();
    // [allCountriesData,filteredCountriesData]
  }, [])
  //
  useEffect(() => {
    dispatch(getAllCountries())
  }, [])
  //
  return (
    <>
    {isLoading ? (
        <LoadingPage />
      ) : (
    <div className="countries">
        <div className="countries-wrap">
          {allCountriesData.length > 0 &&
            checkForFilter().map((temp, i) => {
              const { borders, ccn3 } = temp;
              return (
                <Link
                  className="countries-link-style"
                  to={`/country/${ccn3}`}
                  state={{borders}}
                  key={i}
                >
                  <CountryBox {...temp} />;
                </Link>
              );
            })}
        </div>
      <button onClick={addNewCountries}>More Countries...</button>
    </div>)
    }
    </>
  );
}

export default CountriesWrap