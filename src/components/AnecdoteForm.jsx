import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/action'
// import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const [newAnecdote, setNewAnecdote] = useState('')

  const dispatch = useDispatch()

  const createAnecdoteHandler = (event) => {
    event.preventDefault()
    dispatch(createAnecdote(newAnecdote))
    setNewAnecdote('')
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdoteHandler}>
        <div>
          <input
            type="text"
            value={newAnecdote}
            onChange={(e) => setNewAnecdote(e.target.value)}
          />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
