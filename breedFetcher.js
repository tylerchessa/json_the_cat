const request = require('request');

const cla = process.argv.splice(2);
let typeOfCat = "";
typeOfCat = cla;
let link = "https://api.thecatapi.com/v1/breeds/search?q=";
// let link = "https://tapi.com/v1/breeds/search?q="
const body = request(link + typeOfCat, (error, response, body) => {
  if (error) {
    console.log("error ",);
    return;
  }

  if (!body.includes(cla)) {
    console.log("breed not found");
    return;
  }

  if (body) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }

  // console.log(data[0].description)

});