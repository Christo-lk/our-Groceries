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

  // test box change color on check

  // STATE
  const [button, showButton] = useState({ background: 'none' })
  const [buttonText, setButtonText] = useState('')

  // CLICKHANDLER
  function clickHandler () {
    console.log('clicked')

    showButton({ background: '#00BFE4' })
    setButtonText('clear')
  }

  // ON CLEAR BUTTON CLICK
  function clearButton () {
    setButtonText('')
    showButton({ background: 'none' })
  }

  return (
    <>
      <div className="user-box">
        <div className="user-list">
          <h2>{props.data.name}</h2>
          {items.map(result =>
            <>
              <ul>
                <li>
                  <label htmlFor={result.item}> {result.item}</label>
                  <input type="checkbox" onClick={clickHandler} id={result.item} name={result.item}/>
                </li>
              </ul>
            </>
          )}
          <AddItem/>
          <button style={button} onClick={clearButton} >{buttonText}</button>
        </div>
      </div>

    </>

  )
}

export default Users

{ /* <li key={result.id}>{result.item}</li> */ }
