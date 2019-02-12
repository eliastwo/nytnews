var router = require("express").Router();
var fetchNews = require("../../controllers/fetch");

router.get("/", fetchNews.scrapeHeadlines);

module.exports = router;
