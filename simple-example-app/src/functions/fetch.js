var axios = require("axios");

var config = {
  method: "post",
  url: "localhost:8080",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
