import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notification(state, action) {
      state = action.payload
    },
  },
})

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_MESSAGE':
//       return action.paylod
//     default:
//       return state
//   }
// }

export default reducer
