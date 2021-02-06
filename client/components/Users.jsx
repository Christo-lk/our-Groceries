import React, { useEffect, useState } from 'react'
import { apiGetUserItems } from '../api'

// Components
import AddItem from './AddItem'

function Users (props) {
  // STATE
  const [items, setItems] = useState([])

  // GET ALL ITEMS TEST
  useEffect(() => {
    apiGetUserItems(props.data.id)
      .then(result => setItems(result))
  }, [])

  return (
    <>
      <div className="user-box">
        <div className="user-list">
          <h2>{props.data.name}</h2>
          {items.map(result => <li key={result.id}>{result.item}</li>)}
          <AddItem/>
        </div>
      </div>
    </>
  )
}

export default Users
