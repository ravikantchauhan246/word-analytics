import React, { useState } from 'react'
import Textarea from './Textarea'
import Stats from './Stats'

const Container = () => {
  const [text, setText] = useState("");
  return (
    <main className='container'>
      <Textarea text={text} setText={setText}/>
      <Stats text={text}/>
      
    </main>
  )
}

export default Container