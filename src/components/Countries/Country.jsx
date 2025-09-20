


import React from 'react'

const Country = ({country}) => {

    console.log(country.flags.flags.png)

  return (
    <div style={{flexBasis: '200px', boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)', padding: '5px'}}>
     <img src={country.flags.flags.png} alt="" style={{width: '100%'}}/>
        <h3>{country.name.common}</h3>
        <p>{country.population.population}</p>
        <p>{country.area.area}</p>
    </div>
  )
}

export default Country