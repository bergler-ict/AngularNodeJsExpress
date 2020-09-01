const express = require('express');
const router = express.Router();
const countries = require('../countries/countries.service');

/* GET teams listing. */
router.get('/', async function (req, res, next) {
  try {
    const result = await countries.all();
    res.send(result);
  } catch (error) {
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;
