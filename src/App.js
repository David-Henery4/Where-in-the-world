import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import {Navbar, SearchAndFilter, CountriesWrap, CountryDetails} from "./layout";
import {useDispatch} from "react-redux";
// import { getAllCountries } from '../toolkit/features/overall/overallSlice';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <SearchAndFilter/>
        <Routes>
          <Route path="/" element={<CountriesWrap/>}/>
          <Route path="country/:id" element={<CountryDetails/>}/>
          {/* <CountryDetails/> */}
          {/* <CountriesWrap/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
