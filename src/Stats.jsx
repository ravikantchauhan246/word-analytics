import React from 'react'

const Stats = ({text}) => {
  //Characters
  const numberOfCharacters = text.length;

  //Words
  const numberOfWords = text.split(/\s/).filter((word)=>word !=="").length

  // Instagram 

  const instagramCharactersLeft = 280 - text.length

  //Facebook 

  const facebookCharactersLeft = 2200 - text.length

  return (
    <div className='stats' >
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters"/>
      <Stat number={instagramCharactersLeft <=280 ? instagramCharactersLeft : 0} label="Instagram"/>
      <Stat number={facebookCharactersLeft} label="Facebook"/>
      
    </div>
  )
}

function Stat({label,number}){
  return(
    <section className="stat">
        <span className='stat_number'>{number}</span>
        <h2 className='second-heading'>{label}</h2>
      </section>
  )
}

export default Stats