import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { authUser } from "../reducers/userReducer"

export default function Login() {
  const [nick, setNick] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    dispatch(authUser({ nick, password }))

    setNick('')
    setPassword('')

    navigate('/notes')
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type='text'
        value={nick}
        name='nick'
        placeholder="nick"
        onChange={({ target }) => setNick(target.value)} />

      <input
        type='password'
        value={password}
        name='password'
        placeholder="password"
        onChange={({ target }) => setPassword(target.value)} />
      <button>Login</button>
    </form>
  )
}