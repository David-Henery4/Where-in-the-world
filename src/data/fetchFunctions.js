import baseFetch from "./baseUrl";

export const fetchAllCountries = async (_, { rejectWithValue }) => {
  try {
    const res = await baseFetch("all");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const fetchSingleCountryData = async ({name, borders}, { rejectWithValue }) => {
  try {
    const urls = [];
    urls.push(baseFetch(`name/${name}`))
    borders.forEach((n) => {
      const str = baseFetch(`alpha/${n}?fields=name,borders`);
      urls.push(str);
    });
    const res = await Promise.all(urls)
    const data = res.map(res => res.data)
    return data.flat()
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const fetchCountriesBySearch = async (searchQuery, {rejectWithValue}) => {
    try {
        const res = await baseFetch(`name/${searchQuery}?fields=name,population,flags,region,capital,borders`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
}


