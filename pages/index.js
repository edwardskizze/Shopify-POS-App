import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Link from 'next/link'
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);
import { FaAlignJustify } from 'react-icons/fa';


class Index extends Component {
    constructor(props){  //to take values from login form, use the react STATE strategy  .
      super(props);

       this.state = { //define empty variables like fields
            fields: {},
            toProfile: false,
            changemount: false,
            loading: false,
            loginerror: false,
            isLoggedIn: false,
            }
        
     }

     componentDidMount() {
      if (localStorage.getItem('sessionkey')) {
         this.setState({ isLoggedIn: true });
      }
    }


      handleChange(field, e){   // to get the values from input fields.    
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }

       checklogin(e) {
        e.preventDefault();  // preventDefault() prevents browser's default behaviour to submit the data. 
        var username = this.state.fields["username"];
        var password = this.state.fields["password"];
        this.setState({loading: true });
        Auth.signIn(username, password)
          .then(user => {
            console.log("login successful");
            console.log(user)
            localStorage.setItem('sessionkey', user['Session']);
            localStorage.setItem('username', user['username']);
            this.setState({changemount: true});
            }).catch(err => {
  
              console.log(err);
              this.setState({ loading: false });
              this.setState({ loginerror: true });
            });
      }

      render() {
        if (this.state.isLoggedIn === true) {
          document.getElementById("homebtn").click();
        }
        if (this.state.changemount === true) {
           document.getElementById("homebtn").click();
        }
        if (this.state.loading === true) {
          return (
            <Container>
               <div className="row">
                <div className="col" style={{ backgroundColor:"#1C2260", height:"50px"}}>
                    <p style={{ marginTop: '10px'}}><FaAlignJustify style= {{ fontSize:'24px', color:'darkgray' }}/>
                    </p>
                </div>
              </div>
              <h1>Frontflip POS</h1>
              <div className="jumbotron" style={{ marginTop: '50px'}}>
              <h4 className="text-center">Loading...</h4>    
              </div>
              <Link href="/home"><button id="homebtn" style={{ display: 'none' }}>Home</button></Link>
            </Container>
          )
       }
       if (this.state.loginerror === true) {
        return (
          <Container>
              <div className="row">
                <div className="col" style={{ backgroundColor:"#1C2260", height:"50px"}}>
                    <p style={{ marginTop: '10px'}}><FaAlignJustify style= {{ fontSize:'24px', color:'darkgray' }}/>
                       <span style={{ color:'white',float: 'right'}}>Please login</span>
                    </p>
                </div>
              </div>
              <h1>Frontflip POS</h1>
              <div className="jumbotron" style={{ marginTop: '50px'}}>
              <img src="cognito.png" className="rounded mx-auto d-block" alt="aws cognito png" style={{ width:'100px', height:'100px' }}></img> 
              <form onSubmit={this.checklogin.bind(this)}>
              <div className="form-group">
                  <label htmlFor="username">User Name:</label>
                  <input type="text" className="form-control" placeholder="Enter username" refs="username" id="username" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]} required></input>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" refs="password" id="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required></input>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
              </form>
              <p className="text-danger">Incorrect username or password</p>
              </div>
              <Link href="/home"><button id="homebtn" style={{ display: 'none' }}>Home</button></Link>
          </Container>
        )
        }
          return (
            <Container>
              <div className="row">
                <div className="col" style={{ backgroundColor:"#1C2260", height:"50px"}}>
                    <p style={{ marginTop: '10px'}}><FaAlignJustify style= {{ fontSize:'24px', color:'darkgray' }}/>
                       <span style={{ color:'white',float: 'right'}}>Please login</span>
                    </p>
                </div>
              </div>
              <h1>Frontflip POS</h1>
              <div className="jumbotron" style={{ marginTop: '50px'}}>
              <img src="cognito.png" className="rounded mx-auto d-block" alt="aws cognito png" style={{ width:'100px', height:'100px' }}></img>  
              <form onSubmit={this.checklogin.bind(this)}>
              <div className="form-group">
                  <label htmlFor="username">User Name:</label>
                  <input type="text" className="form-control" placeholder="Enter username" refs="username" id="username" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]} required></input>
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" refs="password" id="password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} required></input>
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
              </form>
      
              </div>
              <Link href="/home"><button id="homebtn" style={{ display: 'none' }}>Home</button></Link>
            </Container>
          )
      }
  }

  export default Index