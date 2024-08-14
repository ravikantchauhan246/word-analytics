import { useState } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Container/>
      <Footer/>
    </>
  )
}

export default App
