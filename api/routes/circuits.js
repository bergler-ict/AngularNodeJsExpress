const express = require('express');
const router = express.Router();
const circuits = require('../circuits/circuits.service');

/* GET circuits listing. */
router.get('/', async (req, res, next) => {
  try {
    const result = await circuits.all();
    res.send(result);
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

/* GET circuit select items */
router.get('/compact', async (req, res, next) => {
  try {
    const result = await circuits.compact();
    res.send(result);
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;