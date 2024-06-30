import React, { Component } from 'react'
import './FrontBtnStyle.css'

export class FrontBtn extends Component {
  render() {
    return (
      <div className='frontbtnbox'>
        <a className='frontbtn' href='/Home'><span>Start Now <ion-icon name="arrow-forward-outline"></ion-icon></span> Start Now</a>
      </div>
    )
  }
}

export default FrontBtn
