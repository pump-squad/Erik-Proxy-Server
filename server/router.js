const router = require('express').Router();


router.route('/search')
  .all((req, res) => {
    res.redirect("http://localhost:2001/api" + req.url);
  });

router.route('/viewer/products')
  .all((req, res) => {
    console.log(req.url);
    res.redirect("http://localhost:2002/api" + req.url);
  });

router.route('/product/:id')
.all((req, res) => {
    res.redirect("http://localhost:2003/api" + req.url)
  });

router.route('/text/:id')
  .all((req, res) => {
    res.redirect("http://localhost:2003/api" + req.url)
  });

router.route('/qanda/:id')
  .all((req, res) => {
    res.redirect("http://localhost:2003/api" + req.url)
  });

router.route('/gallery/:id')
  .all((req, res) => {
    res.redirect("http://localhost:2003/api" + req.url)
  });







module.exports = router;