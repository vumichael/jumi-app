import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBV3yQhK_Nq30f6YlZZVY2OpMuy0OW5yXg",
    authDomain: "travel-42e03.firebaseapp.com",
    databaseURL: "https://travel-42e03.firebaseio.com",
    projectId: "travel-42e03",
    storageBucket: "travel-42e03.appspot.com",
    messagingSenderId: "177343977370",
    appId: "1:177343977370:web:2f5bfff15f358cc1cc0c23"
  };

  firebase.initializeApp(config);
export default firebase;