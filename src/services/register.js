import axios from 'axios'

const baseUrl = '/api/register/'

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const registerService = {
  create,
}

export default registerService
