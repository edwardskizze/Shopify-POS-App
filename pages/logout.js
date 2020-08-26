import React, { Component } from 'react'
import Index from './index'

class Logout extends Component {
    constructor(props){  //to take values from login form, use the react STATE strategy  .
      super(props);
     }

      render() {
          return (
           <Index />
          )
      }
  }

  export default Logout