import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const initialCredentials = {
  username: '',
  password: '',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialCredentials)
  let history = useHistory()

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      history.push('/protected')
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <form onSubmit={login}>
        <input 
        type='text'
        name='username'
        value={credentials.username}
        onChange={handleChanges}
        placeholder='Username'
        />
        <input 
        type='password'
        name='password'
        value={credentials.password}
        onChange={handleChanges}
        placeholder='Password'
        />
        <button>Login</button>        
      </form>
    </div>
  )
}
    
    
  


export default Login;
