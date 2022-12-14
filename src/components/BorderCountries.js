import React from 'react'
import { Link } from "react-router-dom";

const BorderCountries = ({borders}) => {
    //
    return (
      <div className="border-countries">
        <h3 className="border-countries__title">Border Countries:</h3>

        <div className="border-countries-btns">
            {borders && borders.map((border, i) => {
              const { borders, ccn3 } = border;
            return (
              <Link className='border-countries__link' key={i} to={`/country/${ccn3}`} state={{ borders }}>
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