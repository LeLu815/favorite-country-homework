import axios from "axios";

import { CountryObj } from "./country.type";

const BASE_URL = "https://restcountries.com/v3.1";

class API {
  #client;
  #baseUrl;
  constructor() {
    this.#baseUrl = BASE_URL;
    this.#client = axios.create({
      baseURL: this.#baseUrl,
    });
  }
  async getCountryAll() {
    const response = await this.#client.get<CountryObj[]>("/all");
    return response.data;
  }
}

const countryApi = new API();
export default countryApi;
