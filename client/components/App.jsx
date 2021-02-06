import React, { useState, useEffect } from 'react'

import Users from './Users'
import { getUsers } from '../api'

const App = () => {
  // state
  const [user, setUser] = useState([])

  // useEffect to re render when state has been updated
  useEffect(() => {
    getUsers()
      .then(result => {
        setUser(result)
      })
  }, [])

  console.log('user', user)

  return (
    <>
      <h1>BOYS GROCERIES BOYS GROCERIES</h1>
      {user.map(res => <Users key={res.id} data={res}/>)}

    </>
  )
}

export default App
