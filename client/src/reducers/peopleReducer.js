const initialState = {
  people: [],
  currentperson: {},
  numgoing: 0,
  numnotgoing: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_PEOPLE':
      return {...state, people: action.payload}
    case 'GET_PERSON':
      return {...state, currentperson: action.payload}
    case 'GET_GOING_NUMS':
      return {...state, numgoing: action.payload}
    case 'GET_NOTGOING_NUMS':
      return {...state, numnotgoing: action.payload}
    default:
      return state
  }
}