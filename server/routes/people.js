const express = require('express')
const Router = express.Router()
const axios = require('axios')


var people = []
const shortid = require('shortid')
if(people.length === 0) {
  axios.get('https://randomuser.me/api/?results=100&?inc=name,phone,email,picture?').then(resp => {
    people = resp.data.results.map(person => (
      {
        id: shortid.generate(),
        fname: person.name.first,
        lname: person.name.last,
        phone: person.phone,
        email: person.email,
        picture: person.picture.thumbnail,
        status: "pending"
      })
    )
  })
}

Router.post('/people', (req, res, next) => {
  people.push(req.body.name)
  res.json({
    message: 'Person added'
  })
})

Router.get('/people', (req, res, next) => {
  res.json({
    person: people.find(p => p.status === "pending")
  })
})

Router.get('/going', (req, res, next) => {
  const goingPeople = people.filter(person => person.status === "going")

  res.json(goingPeople)
})

Router.get('/notgoing', (req, res, next) => {
  const notgoingPeople = people.filter(person => person.status === "notgoing")

  res.json(notgoingPeople)
})

Router.patch('/people', (req, res, next) => {
  const id = req.body.id
  const status = req.body.status

  people = people.map(person => {
    if (person.id == id) {
      return {...person, status}
    } else {
      return person
    }
  })

  res.json(people)
})

module.exports = Router