import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB00DmE4EcgvH0ST9VY_Blv6qqTgoHDw7E",
  authDomain: "react-dashboard-835c1.firebaseapp.com",
  databaseURL: "https://react-dashboard-835c1.firebaseio.com"
};

firebase.initializeApp(config);

//get a reference to the firebase database reference
var database = firebase.database();

//a function which returns a promise holding the value of the appConfig object
export function getUserAppConfig() {
  return database.ref('/appConfig').once('value').then((snapshot) => {
    return snapshot.val();
  });
};
