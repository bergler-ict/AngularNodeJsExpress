const express = require('express');
const router = express.Router();
const grandprixs = require('../grandprixs/grandprixs.service');

/* GET grand prixs listing. */
router.get('/:year', async (req, res, next) => {
  try {
    const result = await grandprixs.all(req.params['year']);
    res.send(result);
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;