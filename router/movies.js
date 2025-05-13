const express = require('express');
const router = express.Router();

const movieController = require('../controller/movieController');

//index;
router.get('/', movieController.index);

router.post('/id/reviews', movieController.starReview)

//show;
router.get('/:id', movieController.show);

module.exports = router;