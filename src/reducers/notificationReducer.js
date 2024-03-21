import { createSlice } from '@reduxjs/toolkit'

let initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showMessage(state, action) {
      return action.payload
    },
    hideMessage(state, action) {
      return null
    },
  },
})

export const { showMessage, hideMessage } = notificationSlice.actions

export const setNotification = (message, time) => {
  return async (dispatch) => {
    dispatch(showMessage(message))

    setTimeout(() => {
      dispatch(hideMessage())
    }, 1000 * time)
  }
}

export default notificationSlice.reducer
