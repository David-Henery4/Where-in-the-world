import React from 'react'
import { Link } from "react-router-dom";

const BorderCountries = ({borders}) => {
    //
    return (
      <div className="border-countries">
        <h3 className="border-countries__title">Border Countries:</h3>

        <div className="border-countries-btns">
            {borders && borders.map((border, i) => {
              const {borders} = border
            return (
              <Link key={i} to={`/country/${border.name.common}`} state={{borders}}>
                <button className="border-countries__btn" key={i}>
                  {border.name.common}
                </button>
              </Link>
            );
            })}
        </div>
      </div>
    );
}

export default BorderCountries