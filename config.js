import dotenv from "dotenv";

dotenv.config();

const config = {
  // environment Variables
  port: process.env.PORT || 5050,
  environment: process.env.ENVIRONMENT,
  baseURl: process.env.BASE_URL,

  // Calendaric Variables
  calendarific_base_url: process.env.CALENDARIFIC_BASE_URL,
  apiKey: process.env.API_KEY,

  // Cache Variables
  cacheDuration: process.env.CACHE_DURATION || 3600,
};

export default config;
