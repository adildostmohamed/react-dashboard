import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB00DmE4EcgvH0ST9VY_Blv6qqTgoHDw7E",
  authDomain: "react-dashboard-835c1.firebaseapp.com",
  databaseURL: "https://react-dashboard-835c1.firebaseio.com"
};

firebase.initializeApp(config);

//get a reference to the firebase database reference
const database = firebase.database();

//a function which returns a promise holding the value of the appConfig object
export function getAppConfigFromFirebase() {
  return database.ref('/appConfig').once('value').then((snapshot) => {
    return snapshot.val();
  });
};

export function getComponentsConfigFromFirebase() {
  return database.ref('/componentsConfig').once('value').then((snapshot) => {
    return snapshot.val();
  });
};
