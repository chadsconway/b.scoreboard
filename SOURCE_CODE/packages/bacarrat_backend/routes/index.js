// routes/index.js and users.js
import express from 'express';
var router = express.Router();
// ..stuff below
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
