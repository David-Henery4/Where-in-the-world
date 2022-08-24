import React from 'react'
import { CountryBox } from '../components'

const CountriesWrap = () => {
  return (
    <div className="countries">
      <div className='countries-wrap'>
        <CountryBox/>
        <CountryBox/>
        <CountryBox/>
        <CountryBox/>
        <CountryBox/>
        <CountryBox/>
        <CountryBox/>
        <CountryBox/>
      </div>
    </div>
  )
}

export default CountriesWrap