import React from 'react'
import './Apis.css'
import FS from '../../../assets/FS.png'
import UL1 from '../../../assets/UL-1.png'
import PokemonExample from '../../../assets/Pokemon-ss.png'

function Apis() {
  return (
    <div className="api-page">
        <h1>Showcase of my API use</h1>
        <div className="FS-example">
    <img src = {FS} className="SHexample" alt="Fakestore Example" />
    <div className="example-info">
          <p>Fakesore Page</p>
          <p>Using an API from open API</p>
    </div>
         </div>
         <div className="FS-example">
          <div className="example-info">
            
          <p>UniLife Page</p>
          <p>Using an API from open API</p>
    </div>
          <img src = {UL1} className='SHexample' alt="Unilife Example" />


         </div>
         <a href='https://ollie-claridge.github.io/pokemon/'>
          <div className="FS-example">
    <img src = {PokemonExample} className="SHexample" alt="Pokemon Example" />
    <div className="example-info">
          <p>Pokemon Genorator</p>
          <p className='pokemon-info'>
            Using Pokiapi I've pokemon genorator which displays all the informaation
            on whatever pokemon is randomly selected.</p>
    </div>
         </div>
         </a>
    </div>
  )
}

export default Apis