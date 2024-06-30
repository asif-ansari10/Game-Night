import React, { Component } from 'react'
import GameCard from './GameCard'

export class Game extends Component {

    GameProperties = [
        {
            "id": "guessthenumber",
            "img": "https://content.instructables.com/FKF/3M2G/K1NVASKL/FKF3M2GK1NVASKL.jpg?auto=webp&frame=1&fit=bounds&md=f603152d3711f5092071d170620548c6",
            "tital": "Guess The Number",
            "description": "Here you have to guess the number between 1 to 100",
            "url": "/Guessthenumber"
        },
        {
            "id": "tictactoe",
            "img": "https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU=w240-h480-rw",
            "tital": "Tic Tac Toe",
            "description": "Its 2 player game. Here you have to make countious line",
            "url": "/Tictactoe"
        },
        {
            "id": "guesstheword",
            "img": "https://m.media-amazon.com/images/I/71OIam723KL.png",
            "tital": "Guess The Words",
            "description": "Here you have to guess the letters to complete the word",
            "url": "/Guesstheword"
        }
    ]
    constructor() {
        super();
        this.state = {
            GameProperties:this.GameProperties,
        }
    }

    render() {
        return (
            <div className="container-lg">
                <div className="row">
                {this.state.GameProperties.map((element)=>{
                   return <div className='col-md-4' key={element.id} >
                    <GameCard img={element.img} tital={element.tital} description={element.description} url={element.url} Key={element.id}/>

                    </div>
                })}
                </div>

        
            </div>
        )
    }
}

export default Game
