const express = require('express');
const router = express.Router();
const drivers = require('../drivers/drivers.service');
const validator = require('../drivers/drivers.validator');

/* GET teams listing. */
router.get('/', async (req, res, next) => {
  try {
    const result = await drivers.all();
    res.send(result);
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({error});
  }
});

/* POST Create new team resource. */
router.post('/', async (req, res, next) => {
  try {
    // Model validation
    if(validator.validate(req.body)) {
      const newDriver = { ...req.body };
      const result = await drivers.create(newDriver);
      res.status(201); // Set http status code 201 Created.
      res.send(result); // return created resource (team) as response.
    } else {
      res.status(400); // Set http status code 400 Bad request.
      res.send('Invalid request. One ore more required properties are missing or containing invalid values.');
    }
  }
  catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

/* PUT Update driver resource. */
router.put('/', async (req, res, next) => {
  try {
    // Model validation
    if (validator.validate(req.body)) {
      const result = await drivers.modify({ ...req.body });
      res.send(JSON.stringify(result)); // return created resource (team) as response.
    } else {
      res.status(400); // Set http status code 400 Bad request.
      res.send('Invalid request. One ore more required properties are missing or containing invalid values.');
    }
  }
  catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

/* DELETE Remove driver resource by its ID. */
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await drivers.delete(req.params['id']);
    res.send(JSON.stringify(result));
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;
