import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import {Navbar, SearchAndFilter, CountriesWrap, CountryDetails} from "./layout";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <SearchAndFilter/>
        <Routes>
          <Route path="/" element={<CountriesWrap/>}/>
          <Route path="country-details" element={<CountryDetails/>}/>
          {/* <CountryDetails/> */}
          {/* <CountriesWrap/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
