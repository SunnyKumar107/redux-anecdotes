import { useContext } from 'react'
import notificationContext from '../notificatioContext'

const Notification = () => {
  const [notification] = useContext(notificationContext)
  console.log(notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  }
  if (notification) {
    return <div style={style}>{notification}</div>
  }
}

export default Notification
