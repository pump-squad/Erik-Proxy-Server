const router = require('express').Router();


router.route('/search')
  .all((req, res) => {
    res.redirect("http://localhost:2001/api" + req.url);
  });
 
router.route('/viewer')
  .all((req, res) => {
    res.redirect("http://localhost:2002/api" + req.url);
  });  


  

    
  


module.exports = router;