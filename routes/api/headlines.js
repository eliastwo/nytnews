var router = require("express").Router();
var headlineNews = require("../../controllers/headline");

router.get("/", headlineNews.findAll);
router.delete("/:id", headlineNews.delete);
router.put("/:id", headlineNews.update);

module.exports = router;
