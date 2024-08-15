import axios from "axios";
import config from "../config.js";

const { calendarific_base_url, apiKey } = config;

const CalendarificService = {
  async fetchCountries() {
    try {
      const result = await axios.get(
        `${calendarific_base_url}/countries?api_key=${apiKey}`
      );
      return [result.data, null];
    } catch (error) {
      console.log(error.message);
      return [null, error];
    }
  },

  async fetchCountryHolidays({ country, year }) {
    try {
      const result = await axios.get(
        `${calendarific_base_url}/holidays?api_key=${apiKey}&country=${country}&year=${year}`
      );
      return [result.data, null];
    } catch (error) {
      console.log(error.message);
      return [null, error];
    }
  },
};

export default CalendarificService;
