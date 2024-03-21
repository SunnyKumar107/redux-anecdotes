import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (content) => {
  const getId = () => (Math.random() * 10000).toFixed()

  const newAnecdote = {
    id: getId,
    content: content,
    votes: 0,
  }
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const update = async (anecdote) => {
  const updateAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, updateAnecdote)
  return response.data
}

export default {
  getAll: getAll,
  create: create,
  update: update,
}
