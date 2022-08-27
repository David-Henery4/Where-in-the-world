import baseFetch from "./baseUrl";

export const fetchAllCountries = async (_, { rejectWithValue }) => {
  try {
    const res = await baseFetch("all");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const fetchSingleCountryData = async (name, { rejectWithValue }) => {
  try {
    const res = await baseFetch(`name/${name}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

export const fetchBordersFullName = async (names, { rejectWithValue }) => {
  try {
    const namesUrls = [];
    names.forEach((n) => {
      const str = baseFetch(`alpha/${n}?fields=name`);
      namesUrls.push(str);
    });
    const res = await Promise.all(namesUrls);
    const data = res.map((res) => res.data);
    return data.flat();
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
};

