import React from 'react'

const Textarea = () => {
  return (
    <textarea placeholder="Enter your text " spellCheck="false" onChange={(e)=>{
        console.log(e.target.value)
    }} className='textarea'/>
  )
}

export default Textarea