const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.paylod
    default:
      return state
  }
}

export default reducer
