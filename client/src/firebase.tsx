import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCDQMLxEzDOlQXa-PJz0-NtM2dTSROAbNU",
  authDomain: "list-app-c7c1e.firebaseapp.com",
  databaseURL: "https://list-app-c7c1e.firebaseio.com",
  projectId: "list-app-c7c1e",
  storageBucket: "",
  messagingSenderId: "570111385584"
};

firebase.initializeApp(config);

export default firebase;