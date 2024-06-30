import React, { Component } from 'react'
import Slides from './Slides'
import Game from './Game'

export class Home extends Component {
  render() {
    return (
      <div 
      style={{
        backgroundColor:'white',
        backgroundSize: 'cover',
        width:"100%",
        height: "150%",
        backgroundRepeat: "no-repeat",
    }}
        >
        <Slides/>
        <Game/>
      </div>
    )
  }
}

export default Home
