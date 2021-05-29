import firebase from 'firebase/app';
import 'firebase/database';
  
  const firebaseConfig = {
    apiKey: "AIzaSyB6dkYVaUnn0Q23odCU1ncmcfdVfzeQF_0",
    authDomain: "drawdown-project.firebaseapp.com",
    databaseURL: "https://drawdown-project-default-rtdb.firebaseio.com",
    projectId: "drawdown-project",
    storageBucket: "drawdown-project.appspot.com",
    messagingSenderId: "4222992716",
    appId: "1:4222992716:web:048eaed3080ad695b74fe9"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
