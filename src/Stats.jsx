import React from 'react'

const Stats = ({text}) => {

  const numberOfCharacters = text.length;

  return (
    <div className='stats' >
      <Stat number={0} label="Words" />
      <Stat number={numberOfCharacters} label="Characters"/>
      <Stat number={280} label="Instagram"/>
      <Stat number={2200} label="Facebook"/>
      
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