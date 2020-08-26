import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'

class Inventory extends Component {
    constructor(props){  //to take values from login form, use the react STATE strategy  .
      super(props);
     }

      render() {
          return (
            <Container style={{ marginTop: '30px'}}>

              <h1 className="text-center"><Badge variant="secondary">POS APP</Badge></h1>

              <nav className="navbar navbar-expand-sm bg-dark">

                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link href="/home"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item active">
                    <Link href="/inventory"><a className="nav-link">Inventory</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/logout"><a className="nav-link">Logout</a></Link>
                    </li>
                </ul>

                </nav>

                <p>Inventory Listing</p>
                <table className="table">
                    <thead>
                        <th>item</th>
                        <th>Short Code</th>
                    </thead>
                </table>
             
         
            </Container>
          )
      }
  }

  export default Inventory