import axios from "axios";

const baseFetch = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export default baseFetch