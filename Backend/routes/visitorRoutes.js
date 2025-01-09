const express = require('express');
const { getVisitorProgress, trackVisitor } = require('../controllers/visitorController');
const router = express.Router();

router.get('/', getVisitorProgress);
router.post('/track-visitor', trackVisitor);

module.exports = router;
