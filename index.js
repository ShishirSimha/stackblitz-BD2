const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

// Import the routes from arrays.js
const arraysRoutes = require('./arrays');

// Use the routes
app.use(arraysRoutes);

/**
 * Sending a JSON in the response
 */
let person = {
  firstName: 'Amit',
  lastName: 'Sharma',
  gender: 'male',
  age: 30,
  isMember: true,
};

/**
 * End point to return a json object
 */
app.get('/person', (req, res) => {
  res.json(person);
});

/**
 * End point to return full-name
 */
app.get('/person/full-name', (req, res) => {
  let fullName = getFullName(person);
  res.json(fullName);
});

/**
 * Method to return full-name against the person object
 */
function getFullName(person) {
  return { fullName: person.firstName + ' ' + person.lastName };
}

/**
 * End point to return the firstName and gender of the person
 */
app.get('/person/firstName-gender', (req, res) => {
  let responseObj = {
    firstName: person.firstName,
    gender: person.gender,
  };
  res.json(responseObj);
});

/**
 * End point to update the age of the person
 */
app.get('/person/increment-age', (req, res) => {
  person.age += 1;
  res.json(person);
});

/**
 * Listener to Port
 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
