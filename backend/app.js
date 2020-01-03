var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var moviesRouter = require("./routes/movies");
var getDatasRouter = require("./routes/getDatas");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 각 router의 처음 진입 url을 여기서 이렇게 설정한다.
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/movies", moviesRouter);
// getDatas라는 라우터 파일에서 전달하는 로직을 사용한다.
app.use("/api/getDatas", getDatasRouter);

// naver api get data - 반드시 app.js에서 해야하나?
const client_id = "Dx6sf0aDtjHZRAslLLLH";
const client_secret = "gpVbGbtqUN";
app.get("/search/movie", function(req, res) {
  const api_url =
    "https://openapi.naver.com/v1/search/movie?query=" +
    encodeURI(req.query.query);
  const request = require("request");
  const options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret
    },
    qs: {
      display: 9,
      title: "백두산"
    }
  };
  console.log("query test");
  request.get(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(response);
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
// app.listen(3000, function() {
//   console.log(
//     "http://127.0.0.1:3000/search/movie?query=검색어 app listening on port 3000!"
//   );
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
