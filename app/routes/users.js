var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies);
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies);

  // Session
  if (req.session.views) {
    req.session.views++;
    res.end(JSON.stringify({
        views: req.session.views,
        expires: (req.session.cookie.maxAge / 1000)
    }));
  } else {
    req.session.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});

module.exports = router;
