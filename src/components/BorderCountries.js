import React from 'react'

const BorderCountries = () => {
    return (
      <div className="border-countries">
        <h3 className="border-countries__title">
            Border Countries:
        </h3>

        <div className="border-countries-btns">
            <button className="border-countries__btn">
                France
            </button>
            <button className="border-countries__btn">
                Germany
            </button>
            <button className="border-countries__btn">
                Netherlands
            </button>
        </div>
      </div>
    )
}

export default BorderCountries