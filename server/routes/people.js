const express = require('express')
const Router = express.Router()
const axios = require('axios')


const people = []

Router.post('/people', (req, res, next) => {
  people.push(req.body.name)
  res.json({
    message: 'Person added'
  })
})

Router.get('/people', (req, res, next) => {
  const shortid = require('shortid')
  axios.get('https://randomuser.me/api/?results=100&?inc=name,phone,email,picture?').then(resp => {
    resp.data.results.map(person => (
      people.push({
        id: shortid.generate(),
        name: person.name,
        phone: person.phone,
        email: person.email,
        picture: person.picture
      })
    ))
    res.json({
      people: people
    })
  })
})

module.exports = Router