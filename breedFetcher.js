const request = require('request');


const fetchBreedDescription = (breedName, callback) => {
  let link = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(link + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (!body.includes(breedName)) {
      callback("breed not found", null);
      return;
    }

    if (body) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }

  });
};

module.exports = { fetchBreedDescription };