import React from 'react'
import Home from './components/Home'
import About from './components/About'
import NoteStore from './Contact/NoteStore'
function App() {
  return (
    <NoteStore>
      <Home headhome="Hello Welcome to home page"/>
      <About/>

    </NoteStore>
  )
}

export default App
