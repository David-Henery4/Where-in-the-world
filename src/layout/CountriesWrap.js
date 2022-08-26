import React, { useEffect } from 'react'
import { CountryBox } from '../components'
import { tempCountryData } from '../dummyData/tempCountryData'
import {Link} from "react-router-dom"
import { getAllCountries } from '../toolkit/features/overall/overallSlice'
import { useDispatch, useSelector } from 'react-redux'

const CountriesWrap = () => {
  const dispatch = useDispatch()
  const { allCountriesData } = useSelector((store) => store.overall);
  const handleCountryClick = () => {
    // Have to use "useLocation" to check path to render the back btn & filter conditionally.
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
        allCountriesData.map((temp, i) => {
          // console.log(temp)
          return (
            <Link className="countries-link-style"  to={`/country/${temp.id}`} key={temp.id}>
              <CountryBox {...temp}/>;
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default CountriesWrap