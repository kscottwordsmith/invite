const initialState = {
    going: [],
    notgoing: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_GOING_LIST':
            return {...state, going: action.payload}
        case 'GET_NOT_GOING_LIST':
            return {...state, notgoing: action.payload}
        default:
            return state
    }
}