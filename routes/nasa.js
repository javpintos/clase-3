const express = require('express');
const router = express.Router();
const nasaController = require('../controllers/nasa.controller');

/* GET home page. */
router.get('/', async function(req, res) {
  nasaController.getIndex(req, res);
});

/* GET Nasa page. */
router.get('/apod', async function(req, res) {
    nasaController.getPictureOfTheDay(req, res);
  });

module.exports = router;