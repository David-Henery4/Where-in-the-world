import {Navbar, SearchAndFilter, CountriesWrap, CountryDetails} from "./layout";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchAndFilter/>
      <CountryDetails/>
      {/* <CountriesWrap/> */}
    </div>
  );
}

export default App;
