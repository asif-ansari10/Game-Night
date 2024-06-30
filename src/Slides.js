import React, { Component } from 'react'
import guess_number from './image/guess_number.jpg';
import tic_tac_toe from './image/tic_tac_toe.png';
import guess_letters from'./image/guess_letters.png';

export class Slides extends Component {
  render() {
    return (
        <div  style={{
            backgroundImage: `url("https://www.orfonline.org/wp-content/uploads/2022/03/Indian-gaming-landscape.jpg")`,
            backgroundSize: 'cover',
            width:"100%",
            backgroundRepeat: "no-repeat",
        }}>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{marginLeft:"13%", marginRight:"13%",}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" >
                    <div className="carousel-item active" >
                        <img src={guess_number}  className="d-block w-100" alt="..." style={{height:"32rem", width:"50rem" }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Guess The Number</h5>
                            <p>Here you have to guess the number between 1 to 100</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={tic_tac_toe} className="d-block w-100" alt="..." style={{height:"32rem", width:"50rem"}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Tic Tac Toe</h5>
                                <p>Its 2 player game. Here you have to make countious line</p>
                            </div>
                    </div>

                    <div className="carousel-item">
                        <img src={guess_letters} className="d-block w-100" alt="..." style={{height:"32rem", width:"50rem"}} />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Guess The Letters</h5>
                                <p>Here you have to guess the letters to complete the word</p>
                            </div>
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
  }
}

export default Slides
