import React, { Component } from 'react'
import "./GameFrontStyle.css"
import Typewriter from "typewriter-effect";
import SlideBtn from './SlideBtn';

export class GuessTheWord extends Component {
  render() {
    return (
      <div className='pageG'>
        <div className='firstp'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Guess The Word")
                .start();
            }}
          />
        </div>
        <SlideBtn/>
      </div>
    )
  }
}

export default GuessTheWord
