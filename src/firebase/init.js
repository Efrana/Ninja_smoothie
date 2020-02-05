
import firebase from 'firebase'


  var firebaseConfig = {
    apiKey: "AIzaSyCFLqaMB1ftx3J8udDnxphYXvk8RIK-t5U",
    authDomain: "ninja-smoothies-ea359.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-ea359.firebaseio.com",
    projectId: "ninja-smoothies-ea359",
    storageBucket: "ninja-smoothies-ea359.appspot.com",
    messagingSenderId: "463023807296",
    appId: "1:463023807296:web:10e9ce6383ad5e37e478a5",
    measurementId: "G-SN70K5ZHRL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
//   firebaseApp.firestore().settings({timestampsInSnapshots:true})
//   firebase.analytics();
  export default firebaseApp.firestore()
 
