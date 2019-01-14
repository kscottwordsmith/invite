import axios from 'axios'
import store from '../store'

// axios.defaults.baseURL = '/api'

export function getPerson() {
  axios.get('/api/people').then(resp => {
    store.dispatch({
      type: 'GET_PERSON', 
      payload: resp.data.person
    })
  })
}

export function changeStatus(id, status) {
  axios.patch('/api/people', {
    id: id,
    status: status
  }).then(resp => {
    getPerson()
  })
}

export function getGoing() {
  axios.get('/api/going').then(resp => {
    store.dispatch({
      type: 'GET_GOING_LIST',
      payload: resp.data
    })
  })
}

export function getNotGoing() {
  axios.get('/api/notgoing').then(resp => {
    store.dispatch({
      type: 'GET_NOT_GOING_LIST',
      payload: resp.data
    })
  })
}

export function getGoingNums() {
  axios.get('/api/going').then(resp => {
    const numgoing = resp.data.length
    store.dispatch({
      type: 'GET_GOING_NUMS',
      payload: numgoing
    })
  })
}

export function getNotGoingNums() {
  axios.get('api/notgoing').then(resp => {
    const numnotgoing = resp.data.length
    store.dispatch({
      type: 'GET_NOTGOING_NUMS',
      payload: numnotgoing
    })
  })
}