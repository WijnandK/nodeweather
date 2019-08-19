const request = require("request");

const forecast = (longTude, latiTude, callback) => {
  const url = `https://api.darksky.net/forecast/ac6677f86e38644a7e5adc5d29f6fd2e/${encodeURIComponent(
    longTude
  )},${encodeURIComponent(latiTude)}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
