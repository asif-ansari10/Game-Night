import React, { Component } from 'react'

export class Help extends Component {
  render() {

    function popup(){
      alert("Complain number is deleverd by Email. We try to solve your problem as soon as posible");
       }
    
    return (
      <div className="container-md" style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop:"2%", paddingBottom:"2%", 
      marginTop:"3%",
      marginLeft:"8%",
      marginRight:"8%",
      marginBottom:"5%",
      borderStyle:"ridge",
      borderRadius: "30px",
      background: "#fff" }}>
        <h2 className='text-center' > Help</h2>

        <div style={{margin: '35px 0px'}}>
          <label  className="form-label">Name</label>
          <input type="text" className="form-control" id="Name" placeholder="Name"/>
        </div>
        <div style={{margin: '35px 0px'}}>
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3" style={{margin: '35px 0px'}}>
          <label className="form-label">Enter your query</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" onClick={popup} className="btn btn-primary">Submit</button>
      </div>
    )
  }
}

export default Help
