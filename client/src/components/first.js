  import React, { Component } from 'react';
  import firebase from '../firebase';

  class First extends Component {
  	render() {
  		console.log('firebase', firebase);
  		return <div> Hi </div>
  	}
  }

  export default First;