import CacheService from "../services/cache.service.js";
import CalendarificService from "../services/calendarific.service.js";

const HolidaysController = {
  async getCountries(req, res) {
    const cacheData = await CacheService.getCache({ key: "countries" });

    if (cacheData) {
      return res.status(200).json({
        success: true,
        message: "Cache Data",
        countries: cacheData || [],
      });
    }

    const [result, error] = await CalendarificService.fetchCountries();

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    const { response } = result;

    await CacheService.setCache({
      key: "countries",
      data: response?.countries || [],
    });

    return res.status(200).json({
      success: true,
      countries: response?.countries || [],
    });
  },

  async getHolidays(req, res) {
    const { country, year } = req.query;

    console.log({ country, year });

    if (!country || !year) {
      return res.status(400).json({
        success: false,
        message: "Please Provide Valid Parameters",
      });
    }

    const cacheData = await CacheService.getCache({ key: country });

    if (cacheData) {
      return res.status(200).json({
        success: true,
        message: "Cache Data",
        holidays: cacheData || [],
      });
    }

    const [result, error] = await CalendarificService.fetchCountryHolidays({
      country,
      year,
    });

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    const { response } = result;

    await CacheService.setCache({
      key: country,
      data: response?.holidays || [],
    });

    return res.status(200).json({
      success: true,
      holidays: response?.holidays || [],
    });
  },
};

export default HolidaysController;
