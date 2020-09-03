const express = require('express');
const router = express.Router();
const countries = require('../countries/countries.service');

/* GET countries listing. */
router.get('/', async function (req, res, next) {
  try {
    const result = await countries.all();
    res.send(result.map());
  } catch (error) {
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

/* GET country select items. */
router.get('/compact', async function (req, res, next) {
  try {
    const result = await countries.all();
    res.send(result.map(r => { return { label: r.name, value: r.id } }));
  } catch (error) {
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;
