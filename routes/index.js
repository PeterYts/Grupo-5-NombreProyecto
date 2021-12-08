var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");


router.get("/", indexController.home);
router.get('/info', indexController.info );
router.get('/blog', indexController.blog ) ;



module.exports = router;