import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users'
const loginUrl = 'http://localhost:3001/api/login'

const login = async credentials => {
  const { data } = await axios.post(loginUrl, credentials)
  return data
}

export { login }