const express = require('express'),
userModel = require('../Models/userModel'),
router = express.Router();


router.get('/', async function(req, res, next) {

  res.render('template', { 
    locals: {
      title: 'App Track', 
  },

    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;