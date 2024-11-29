import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './views/Detail/Detail'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Detail />


    </>
  )
}

export default App
