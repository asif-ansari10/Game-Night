import React, { Component } from 'react'
import "./GameFrontStyle.css"
import Typewriter from "typewriter-effect";
import SlideBtn from './SlideBtn';

export class TicTacToe extends Component {
  render() {
    return (
      <div className='pageG'>
        <div className='firstp'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Tic Tac Toe")
                .start();
            }}
          />
        </div>
        <SlideBtn/>
      </div>
    )
  }
}

export default TicTacToe
