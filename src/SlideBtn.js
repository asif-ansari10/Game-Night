import React, { Component } from 'react'
import './SlideBtnStyle.css'

export class SlideBtn extends Component {


  render() {
    let { url } = this.props;
    return (
        <div className='btnES'>
          <a className='btnS' href={url} > Swipe to start <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span> </a>

        </div>
    )
  }
}

export default SlideBtn
