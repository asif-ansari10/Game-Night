import React, { Component } from 'react'
import "./Front.css"
import FrontBtn from './FrontBtn'

export class FrontPage extends Component {
  render() {
    return (
      <>
        <div className='frontp'>
        <div className='textbox'>
        <h3 className='textfh3'>Welcome To</h3>
        <h1 className='textfh1'>Game Night</h1>
        <p className='textfp'><b>GAMING WEB APP. PLAYING GAME WITH FRIENDS AND FAMILY</b></p>
        <div className='btn'>
            <FrontBtn/>
        </div>
        </div>
      </div>
      </>
    )
  }
}

export default FrontPage
