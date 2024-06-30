import React, { Component } from 'react'
import  "./AboutStyle.css"

export class About extends Component {
  render() {
    return (

      <div class="container-md" className='text-center' style={{paddingLeft:"5%", paddingRight:"5%",paddingTop:"0%", paddingBottom:"0%",
      marginTop:"3%",
      marginLeft:"8%",
      marginRight:"8%",
      marginBottom:"5%",
      borderStyle:"ridge",
      borderRadius: "30px",
      background: "#fff"
       }}>
        <h1 className="AHiigh" style={{ margin: '35px 0px' }}>About</h1>
        <h4 className="AHigh" style={{ margin: '20px 0px' }}>Welcom to our Gaming Website</h4>
        <p className="para"><strong>Our Aim : </strong> To Bring Gaming Online in platfrom to safe our mobile storage. By this Website anyone can play game at any time.</p>
        <p className="para"><strong>Target Audience: </strong> Mainly our target Audience are childrens and teenagers. Who enjoy game at any time with their friends without installing any aplication and without sharing any personal data. </p>
        <p className="para"><strong>User Benefits: </strong> Playing games from our Website, your personal data is security. Your internet usage is low but your experience of Playing game is always <b>HIGH</b>. </p>
        <p className="para"><strong>Content Overview: </strong> Currently our website have 3 Games </p>
        <p className="para">
           <li style={{ margin: '20px 0px' }}><strong>Guess The Number:  </strong> A number guessing game is a simple guessing game where a user is supposed to guess a number between 0 and 100 in a maximum of 10 attempts. The game will end after 10 attempts and if the player failed to guess the number, and then he loses the game.</li>
            <li style={{ margin: '20px 0px' }}><strong>Tic Tac Toe: </strong> Tic Tac Toe is a two-player game in which the objective is to take turns and mark the correct spaces in a 3x3 grid.</li>
            <li style={{ margin: '20px 0px' }}><strong>Guess The Words: </strong> A number guessing game is a simple guessing game where a user is supposed to guess the word to complete the letter in a maximum of 10 attempts. The game will end after 10 attempts and if the player failed to guess the number, and then he loses the game. </li>
            </p>

      </div>
    )
  }
}

export default About
