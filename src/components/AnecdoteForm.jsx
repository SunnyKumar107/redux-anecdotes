import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import notificationContext from '../notificatioContext'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')

  const [notification, notificationDispatch] = useContext(notificationContext)

  const dispatch = useDispatch()

  const createAnecdoteHandler = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(content))
    notificationDispatch({
      type: 'DISPLAY_MESSAGE',
      paylod: `New anecdote ${content}`,
    })

    setContent('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdoteHandler}>
        <div>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
