  import React, { Component } from 'react';
  import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCDQMLxEzDOlQXa-PJz0-NtM2dTSROAbNU",
    authDomain: "list-app-c7c1e.firebaseapp.com",
    databaseURL: "https://list-app-c7c1e.firebaseio.com",
    projectId: "list-app-c7c1e",
    storageBucket: "",
    messagingSenderId: "570111385584"
  };
  firebase.initializeApp(config);

  class First extends Component {
  	render() {
  		console.log('firebase', firebase);
  		return <div> Hi </div>
  	}
  }

  export default First;