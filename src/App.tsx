import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('Loading')

  return (
    <>
      {title}
    </>
  )
}

export default App
