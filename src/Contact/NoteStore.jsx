import React from 'react'
import notecontact from './NoteContext'

function NoteStore(props) {
    const store={
        "name":"hmzuuu",
        "age":"15"
    }
  return (
    <notecontact.Provider value={store}>
        {props.children}

</notecontact.Provider>
  )
}

export default NoteStore
