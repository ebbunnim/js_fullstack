const express = require("express");
const request = require("request");
const router = express.Router();

// 영화검색 api
const client_id = "Dx6sf0aDtjHZRAslLLLH";
const client_secret = "gpVbGbtqUN";

router.get("/", function(req, res, next) {
  const api_url =
    "https://openapi.naver.com/v1/search/movie?query=" + req.query;
  const request = require("request");
  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret
    },
    qs: {
      display: 10,
      start: 1,
      query: "킹"
    }
  };
  request.get(options, function(error, response, body) {
    // console.log(response);
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});

module.exports = router;
