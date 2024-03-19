import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, notification } from '../reducers/action'
// import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes).sort(
    (a, b) => b.votes - a.votes
  )

  const filterSearch = useSelector((state) => state.filter)
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterSearch.toLowerCase())
  )
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(notification(`You voted "${anecdote.content}"`))
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
