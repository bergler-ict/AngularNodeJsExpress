const express = require('express');
const router = express.Router();
const rankings = require('../rankings/rankings.service');

/* GET drivers ranking of a specific year. The year needs to be passed in the URI query string like ?year=2020 */
router.get('/driver', async function (req, res, next) {
  try {
    const result = await rankings.driver(req.query['year']);
    res.send(result);
  } catch (error) {
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

/* GET teams ranking of a specific year. The year needs to be passed in the URI query string like ?year=2020 */
router.get('/team', async function (req, res, next) {
  try {
    const result = await rankings.team(req.query['year']);
    res.send(result);
  } catch (error) {
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;