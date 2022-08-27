import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBordersFullName, getSingleCountryData } from '../toolkit/features/overall/overallSlice'

const BorderCountries = ({borders}) => {
    const { singleCountryBorders } = useSelector((store) => store.overall);
    const dispatch = useDispatch()
    //
    useEffect(() => {
        dispatch(getBordersFullName(borders))
    }, [borders])
    //
    return (
      <div className="border-countries">
        <h3 className="border-countries__title">Border Countries:</h3>

        <div className="border-countries-btns">
            {singleCountryBorders.map((name, i) => {
            return (
              <button className="border-countries__btn" key={i} onClick={() => dispatch(getSingleCountryData(name.name.common))}>
                {name.name.common}
              </button>
            );
            })}
        </div>
      </div>
    );
}

export default BorderCountries