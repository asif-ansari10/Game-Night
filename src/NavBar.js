import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from "react-router-dom";
import Help from './Help';
import About from './About';
import GuessTheNumber from "./GuessTheNumber";
import GuessTheWord from "./GuessTheWord";
import TicTacToe from "./TicTacToe";
import NumberGameStart from './NumberGameStart';
import FrontPage from './FrontPage';
import './NavBarStyle.css'
import Home from './Home';
import Slides from './Slides';

export class NavBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" key="home" to="/" >Game Night</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" key="home" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" key="about" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" key="help" to="/help">Help</Link>
                                    </li>

                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline " type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>

                </div>

                <Routes>
                <Route exact path="/" element={<FrontPage key="front" />} />
                    <Route exact path="/Home" element={
                        <React.Fragment>
                            <Home/>
                        </React.Fragment>
                    } />
                    <Route exact path="/about" element={<About key="about" />} />
                    <Route exact path="/help" element={<Help key="help" />} />
                    <Route exact path="/Guessthenumber" element={<GuessTheNumber />} />
                    <Route exact path="/Tictactoe" element={<TicTacToe />} />
                    <Route exact path="/Guesstheword" element={<GuessTheWord />} />
                    <Route exact path="/Guessthenumber/start" element={<NumberGameStart />} />
                </Routes>
            </Router>
        )
    }
}

export default NavBar
