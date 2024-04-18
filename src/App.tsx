import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState('Loading')

  useEffect(() => {
    fetch('https://craft-purse-backend.vercel.app/')
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => { console.log(error) });
  }, [])

  return (
    <>
      {title}
    </>
  )
}

export default App
