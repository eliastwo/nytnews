var router = require("express").Router();
var clearNews = require("../../controllers/clear");

router.get("/", clearNews.clearDB);

module.exports = router;
