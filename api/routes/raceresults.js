const express = require('express');
const router = express.Router();
const raceResults = require('../race-results/race-results.service');

/* GET race results listing. */
router.get('/:id', async function (req, res, next) {
  try {
    const result = await raceResults.all(req.params['id']);
    res.send(result);
  } catch (error) {
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;