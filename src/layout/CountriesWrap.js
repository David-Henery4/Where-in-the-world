import React, { useEffect, useState } from "react";
import { CountryBox, LoadingPage } from "../components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCountriesIndex,
} from "../toolkit/features/overall/overallSlice";

const CountriesWrap = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const {
    allCountriesData,
    isFilterActive,
    filteredCountriesData,
    isLoading,
    countriesIndex,
  } = useSelector((store) => store.overall);
  const dispatch = useDispatch();
  //
  const checkForFilter = () => {
    if (isFilterActive) return filteredCountriesData;
    if (!isFilterActive) return allCountriesData;
  };
  //
  const itemsPerScroll = () => {
    const countriesShownAtOnce = 8;
    const pages = Math.ceil(checkForFilter().length / countriesShownAtOnce);
    const newScroll = Array.from({ length: pages }, (_, i) => {
      const start = i * countriesShownAtOnce;
      return checkForFilter().slice(start, start + countriesShownAtOnce);
    });
    const initialCountries = newScroll[0];
    setCountries(initialCountries);
    setAllCountries(newScroll);
  };
  //
  const addNewCountries = () => {
    if (allCountriesData) {
      if (countriesIndex > countries.length) return;
      dispatch(changeCountriesIndex("inc"));
      setCountries((country) => {
        return [country, ...allCountries[countriesIndex + 1]].flat();
      });
    }
  };
  //
  useEffect(() => {
    itemsPerScroll();
    // eslint-disable-next-line
  }, [allCountriesData, filteredCountriesData]);
  //
  // useEffect(() => {
  //   dispatch(getAllCountries());
  //   // eslint-disable-next-line
  // }, []);
  //
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="countries">
          <div className="countries-wrap">
            {allCountries.length > 0 &&
              countries.map((temp, i) => {
                const { borders, ccn3 } = temp;
                return (
                  <Link
                    className="countries-link-style"
                    to={`/country/${ccn3}`}
                    state={{ borders }}
                    key={i}>
                    <CountryBox {...temp} />
                  </Link>
                )
              })}
          </div>
          {allCountries && countriesIndex === allCountries.length - 1 ? (
            <p className="countries__no-more-btn">No more Countries</p>
          ) : (
            <button className="countries__more-btn" onClick={addNewCountries}>
              More Countries...
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CountriesWrap;
