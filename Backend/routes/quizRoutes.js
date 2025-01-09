const express = require('express');
const { getQuiz, submitQuiz } = require('../controllers/quizController');
const router = express.Router();

router.get('/:artifactId', getQuiz);
router.post('/submit-quiz', submitQuiz);

module.exports = router;
