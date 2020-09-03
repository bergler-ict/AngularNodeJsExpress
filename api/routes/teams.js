const express = require('express');
const router = express.Router();
const teams = require('../teams/teams.service');
const validator = require('../teams/teams.validator');

/* GET teams listing. */
router.get('/', async (req, res, next) => {
  try {
    const result = await teams.all();
    res.send(result);
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({error});
  }
});

/* GET team select items. */
router.get('/compact', async (req, res, next) => {
  try {
    const result = await teams.all();
    res.send(result.map(r => { return { label: r.fullname, value: r.id }}));
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

/* POST Create new team resource. */
router.post('/', async (req, res, next) => {
  try {
    // Model validation
    if(validator.validate(req.body)) {
      const newTeam = { ...req.body };
      const result = await teams.create(newTeam);
      newTeam.id = result;
      res.status(201); // Set http status code 201 Created.
      res.send(newTeam); // return created resource (team) as response.
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

/* PUT Update team resource. */
router.put('/', async (req, res, next) => {
  try {
    // Model validation
    if (validator.validate(req.body)) {
      const result = await teams.modify({ ...req.body });
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

/* DELETE Remove team resource by its ID. */
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await teams.delete(req.params['id']);
    res.send(JSON.stringify(result));
  } catch (error) { // Catch error thrown by database action (see bin/database.js)
    console.log('Error: ', error);
    res.status(error.status).send({ error });
  }
});

module.exports = router;
