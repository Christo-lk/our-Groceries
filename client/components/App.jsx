import React, { useState, useEffect } from 'react'

import Users from './Users'
import { getUsers } from '../api'

const App = () => {
  console.log('hello')

  const [user, setUser] = useState([])

  getUsers()
    .then((res) => console.log(res))

  return (
    <>
      <h1>React development has begun!</h1>
      <Users/>
    </>
  )
}

export default App
