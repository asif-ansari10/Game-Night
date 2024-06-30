import React, { Component } from 'react'
import "./GameFrontStyle.css"
import Typewriter from "typewriter-effect";
import SlideBtn from './SlideBtn';


export class GuessTheNumber extends Component {



  render() {

    return (
      <div className='pageG'>
        <div className='firstp'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Guess The Number")
                .start();
            }}
          />
        </div>
        <SlideBtn url={"/Guessthenumber/start"}/>
      </div>
    )
  }
}

export default GuessTheNumber
