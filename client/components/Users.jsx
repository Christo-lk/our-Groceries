import React, { useEffect, useState } from 'react'
import { apiGetUserItems, apiGetAllItems } from '../api'

function Users (props) {
  // STATE
  const [items, setItems] = useState([])

  // USEEFFECT
  // useEffect(() => {
  //   apiGetUserItems(props.data.id)
  //     .then((res) => setItems(res))
  // }, [])

  // GET ALL ITEMS TEST
  useEffect(() => {
    apiGetAllItems(props.data.id)
      .then(result => setItems(result))
  }, [])

  return (
    <>
      <h2>{props.data.name}</h2>
      {items.map(result => <li key={result.id}>{result.item}</li>)}
    </>
  )
}

export default Users
