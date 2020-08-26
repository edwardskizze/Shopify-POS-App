import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { FaAlignJustify } from 'react-icons/fa';

class Home extends Component {
    constructor(props){  //to take values from login form, use the react STATE strategy  .
      super(props);
      this.state = { movetoindex: false, username: '' }
     }

     process_logout() {
      console.log('clicked logout'); 
      this.setState({ movetoindex: true});
    }

    componentDidMount() {
      var loggeduser = localStorage.getItem('username');
      this.setState({ username: loggeduser })
    }

      render() {
        if (this.state.movetoindex === true) {
          localStorage.removeItem('sessionkey');
          localStorage.removeItem('username');
          document.getElementById("indexbtn").click();
        }
          return (
            <Container>
             <div className="row">
                <div className="col" style={{ backgroundColor:"#1C2260", height:"50px"}}>
                    <p style={{ marginTop: '10px'}}><FaAlignJustify style= {{ fontSize:'24px', color:'darkgray' }}/>
                 <span style={{ color:'white',float: 'right'}}>{ this.state.username }</span>
                    </p>
                </div>
              </div>
              <h1>Frontflip POS</h1>
              <br></br>
              <div className="row">
                <div className="col" style={{ backgroundColor:"lightgray", height:"70px"}}>
                    <p style={{ marginTop: '20px', textAlign:'center', fontWeight:'bold' }}>View Product</p>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col" style={{ backgroundColor:"lightgray", height:"70px"}}>
                    <p style={{ marginTop: '20px', textAlign:'center', fontWeight:'bold' }}>View Consigner</p>
                </div>
              </div>

              
              <div className="row"><div className="col" style={{ marginTop:'60%',marginBottom:'20%' }}><button type="button" style={{ backgroundColor:"#1C2260" }} className="btn btn-primary btn-block">Scan Item</button></div></div>
              <a href="/"><button id="indexbtn" style={{ display: 'none' }}>index</button></a>
            </Container>
          )
      }
  }

  export default Home