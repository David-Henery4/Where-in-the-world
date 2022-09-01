import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Navbar,
  SearchAndFilter,
  CountriesWrap,
  CountryDetails,
  NoPageFound,
} from "./layout";
import { getAllCountries } from "./toolkit/features/overall/overallSlice";

function App() {
  const dispatch = useDispatch();
  const { theme} = useSelector((store) => store.overall);
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
          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          autoClose={3000}
          theme= "colored"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
