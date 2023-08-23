const { promisifyRequest } = require('./util')

async function fetchWeatherData(citycode) {
    const options = {
      host: `jisutqybmf.market.alicloudapi.com`,
      path: `/weather/query?citycode=${citycode}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'APPCODE bde917cd8ec04ed69451ea05d48fae39',
      }
    };
    try {
      const data = await promisifyRequest(options);
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  module.exports = {
    fetchWeatherData
}