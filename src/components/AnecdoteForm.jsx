import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const createAnecdoteHandler = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(content))
    dispatch(setNotification(`New anecdote ${content}`, 5))
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
