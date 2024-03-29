import React from 'react'
import { useContext } from 'react'
import notecontact from '../Contact/NoteContext'
notecontact

function About() {
    const data=useContext(notecontact)
  return (
    <div>
      <h1>.... This is About page in React JS </h1> <br />
      <h2>MY name is {data.name}</h2>

    </div>
  )
}

export default About
