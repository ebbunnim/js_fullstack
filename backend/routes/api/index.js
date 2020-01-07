const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.send("최상단 api 경로입니다.");
});

module.exports = router;
