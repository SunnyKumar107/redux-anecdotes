import { useReducer, createContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'DISPLAY_MESSAGE':
      return action.paylod
    case 'HIDDEN_MESSAGE':
      return null
    default:
      return state
  }
}

const notificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  )
  if (notification) {
    setTimeout(() => {
      notificationDispatch({ type: 'HIDDEN_MESSAGE' })
    }, 3000)
  }

  return (
    <notificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </notificationContext.Provider>
  )
}

export default notificationContext
