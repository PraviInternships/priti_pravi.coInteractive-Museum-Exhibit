const express = require('express');
const { getArtifacts, addArtifact } = require('../controllers/artifactController');
const router = express.Router();

router.get('/', getArtifacts);
router.post('/add-artifact', addArtifact);

module.exports = router;
