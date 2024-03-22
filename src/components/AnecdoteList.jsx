import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import notificationContext from '../notificatioContext'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes }) => anecdotes).toSorted(
    (a, b) => b.votes - a.votes
  )

  const [notification, notificationDispatch] = useContext(notificationContext)

  const filterSearch = useSelector((state) => state.filter)
  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filterSearch.toLowerCase())
  )

  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(addVote(anecdote))
    notificationDispatch({
      type: 'DISPLAY_MESSAGE',
      paylod: `You voted "${anecdote.content}"`,
    })
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
