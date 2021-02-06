import React from 'react'

export default function AddItem () {
  function onSubmit (event) {

  }

  function onChange (event) {
    const { item } = event.target.value
    console.log(item)
  }
  return (
    <>

      <form onSubmit={onSubmit}>
        <label htmlFor="item">Item:
          <input type="text" name="item" onChange={onChange}></input>
        </label>
        <button>Add</button>
      </form>

    </>

  )
}
