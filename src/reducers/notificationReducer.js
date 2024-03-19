const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.paylod
    default:
      return state
  }
}

export default reducer
