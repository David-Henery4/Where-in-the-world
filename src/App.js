import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  SearchAndFilter,
  CountriesWrap,
  CountryDetails,
} from "./layout";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "./toolkit/features/overall/overallSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.overall);
  //
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  //
  useEffect(() => {
    dispatch(getAllCountries());
    // eslint-disable-next-line
  }, []);
  //
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <SearchAndFilter />
        <Routes>
          <Route path="/" element={<CountriesWrap />} />
          <Route path="country/:code" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
