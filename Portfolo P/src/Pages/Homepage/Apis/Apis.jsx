import React from 'react'
import './Apis.css'
import FS from '../../../assets/FS.png'

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
    </div>
  )
}

export default Apis