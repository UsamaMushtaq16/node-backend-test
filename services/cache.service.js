import NodeCache from "node-cache";
import config from "../config.js";

const myCache = new NodeCache();

const { cacheDuration } = config;

const CacheService = {
  async setCache({ key, data }) {
    myCache.set(key, data, cacheDuration);
  },

  async getCache({ key }) {
    const value = myCache.get(key);
    return value;
  },
};

export default CacheService;
