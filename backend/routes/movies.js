var express = require("express");
var router = express.Router();
var movies = require("../movies.json");

router.get("/", function(req, res, next) {
  res.send(movies);
});
router.get("/:id", function(req, res, next) {
  var id = parseInt(req.params.id, 10);
  var movie = movies.filter(function(movie) {
    return movie.id === id;
  });
  res.send(movie);
});

module.exports = router;

// var express = require("express");
// var request = require("request");
// var cheerio = require("cheerio");
// var router = express.Router();

// var numOfMovies = 50;
// var parsedResults = new Array();

// /* GET home page. */
// router.get("/", function(req, res, next) {
//   console.log("test");
//   request(
//     "http://movie.naver.com/movie/running/current.nhn?order=reserve",
//     function(error, response, html) {
//       if (!error && response.statusCode == 200) {
//         var $ = cheerio.load(html);

//         parsedResults = [];

//         var cnt = 0;

//         $("dt.tit").each(function(i, element) {
//           if (cnt < numOfMovies) {
//             var movie_list = $(this);
//             var movie_title = movie_list
//               .children()
//               .eq(1)
//               .text();

//             var star = movie_list.next();
//             var infoStar = star.children().eq(0);
//             var dd = infoStar.children().eq(1);
//             var star_t1 = dd.children().eq(0);
//             var a_href = star_t1.children().eq(0);
//             var num = a_href.children().eq(1);

//             var movie_rating = num.text();

//             // Our parsed meta data object
//             var metadata = {
//               movieTitle: movie_title,
//               movieRating: movie_rating
//             };

//             // Push meta-data into parsedResults array
//             parsedResults.push(metadata);
//           }

//           cnt++;
//         });

//         res.render("movie", {
//           title: "Movie Page Web Scraping",
//           metadata: parsedResults
//         });
//       }
//     }
//   );
// });

// module.exports = router;
