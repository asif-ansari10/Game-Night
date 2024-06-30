import React, { Component } from 'react'
import './NumberGameStyle.css'
import guessimg from './image/guessimg.png'

export class NumberGameStart extends Component {
  render() {
    return (
      <div className='Container-NumberG'>
        <h2>Guess The Number</h2>
        <p>Guess the number butween 0 to 100</p>
        <p>You have only 10 chances to guess correctly.</p>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Enter the number</label>
          <input type="number" class="form-control" id="numberinput" />
        </div>
        <div className='buttonNumberG'>
          <button className='btnNumG'>Submit</button>
        </div>
        <div className='container-img'>
          <img src={guessimg} className='guessimage' alt=''></img>
          </div>
      </div>
    )
  }
}

export default NumberGameStart
