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
      <h1>our :Groceries</h1>
      <div className="container">
        {user.map(res => <Users key={res.id} data={res}/>)}
      </div>

    </>
  )
}

export default App
