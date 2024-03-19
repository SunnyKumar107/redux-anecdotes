import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes).toSorted(
    (a, b) => b.votes - a.votes
  )

  const removeNotification = () => {
    setInterval(() => {
      dispatch(notification(''))
    }, 3000)
  }

  const filterSearch = useSelector((state) => state.filter)
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterSearch.toLowerCase())
  )
  console.log(filteredAnecdotes)
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(notification(`You voted "${anecdote.content}"`))
    removeNotification()
  }
  return (
    <div>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
