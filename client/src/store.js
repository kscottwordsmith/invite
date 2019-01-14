import { createStore, combineReducers } from 'redux'

import peopleReducer from './reducers/peopleReducer'
import goingReducer from './reducers/goingReducer'
// import all reducers here

const rootReducer = combineReducers({
  peopleReducer,
  goingReducer
  // put reducers here
})

const store = createStore(rootReducer)

export default store