import baseFetch from "./baseUrl";

export const fetchAllCountries = async (_, { rejectWithValue }) => {
  try {
    const res = await baseFetch("all");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const fetchSingleCountryData = async ({code, borders}, { rejectWithValue }) => {
  try {
    const urls = [];
    urls.push(baseFetch(`alpha/${code}`));
    if (borders){
      borders.forEach((n) => {
        const str = baseFetch(`alpha/${n}?fields=name,borders,ccn3`);
        urls.push(str);
      });
    }
    const res = await Promise.all(urls)
    const data = res.map(res => res.data)
    return data.flat()
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const fetchCountriesBySearch = async (searchQuery, {rejectWithValue}) => {
    try {
        const res = await baseFetch(
          `name/${searchQuery}?fields=name,population,flags,region,capital,borders,ccn3`
        );
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
}


