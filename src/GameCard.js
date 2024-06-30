import React, { Component } from 'react'
import './GameCardStyle.css'


export class GameCard extends Component {
   

    render() {
        let{img,tital,description,url}=this.props;
        return (
            
            <div className="container-lg" style={{paddingTop:"50px", paddingBottom:"50px", height:"10%",width:"90%"}}>
                <div className='card-img'> <a href={url} target="_blank" rel="noreferrer"><img src={img}className="card-img-top" alt="..."style={{height:"200px",}}/> </a> </div>
                <div className="card"  style={{backgroundColor:"black", border:"solid 2px"}}>
                        <div className="card-body">
                        <a href={url} target="_blank" rel="noreferrer" className='title'> <h5 className="card-title">{tital}</h5> </a> 
                            <p className="card-text">{description}</p>
                        </div>
                </div>
            </div>



        )
    }
}

export default GameCard
