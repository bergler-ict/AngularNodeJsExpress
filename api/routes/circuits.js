const express = require('express');
const router = express.Router();
const circuits = require('../circuits/circuits.service');
const validator = require('../circuits/circuit.validator');

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

router.post('/', async (req, res, next) => {
  try {
    const newCircuit = req.body;
    if(validator.validate(newCircuit)) {
      const result = await circuits.create(req.body);
      res.send(result);
    } else {
      res.status(400); // Set http status code 400 Bad request.
      res.send('Invalid request. One ore more required properties are missing or containing invalid values.');
    }
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

router.put('/', async (req, res, next) => {
  try {
    const circuit = req.body;
    if (validator.validate(circuit)) {
      const result = await circuits.modify(req.body);
      res.send(result);
    } else {
      res.status(400); // Set http status code 400 Bad request.
      res.send('Invalid request. One ore more required properties are missing or containing invalid values.');
    }
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await circuits.delete(req.params['id']);
    res.send(JSON.stringify(result));
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;