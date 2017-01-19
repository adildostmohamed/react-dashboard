import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import store from '../store';

//==================================
//EXPORT ACTION CREATORS
//==================================
export const GET_APP_CONFIG = 'GET_APP_CONFIG';
export const SET_APP_CONFIG = 'SET_APP_CONFIG';
export const GET_COMPONENTS_CONFIG = 'GET_COMPONENTS_CONFIG';
export const SET_COMPONENTS_CONFIG = 'SET_COMPONENTS_CONFIG';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

//===================================
//FIREBASE config
//===================================

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

//==================================
//ACTION CREATORS
//==================================

//an action using redux-thunk to fetch the app config object from firebase, then call the setAppConfig action to set it to the app state
export function getAppConfig() {
  return function(dispatch) {
    return getAppConfigFromFirebase().then((data) => {
      const appConfig = data;
      dispatch(setAppConfig(appConfig));
    });
  }
}

export function setAppConfig(config){
  return {
    type: SET_APP_CONFIG,
    payload: config
  }
}

//an action using redux-thunk to fetch the components config object from firebase, then call the setComponentsConfig to set it to the app state
export function getComponentsConfig() {
  return function(dispatch) {
    return getComponentsConfigFromFirebase().then((data) => {
      const componentsConfig = data;
      dispatch(setComponentsConfig(componentsConfig));
    });
  }
}

export function setComponentsConfig(config) {
  return {
    type: SET_COMPONENTS_CONFIG,
    payload: config
  }
}

export function setLoggedInUser(user) {
  return {
    type: SET_LOGGED_IN_USER,
    payload: user
  }
}

//function to sign up a new user with firebase and thunk
export function signUpUser(credentials) {
  return function(dispatch) {
    firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser());
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

//function to sign in an existing user
export function signInUser(credentials) {
  return function(dispatch) {
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(response => {
        dispatch(authUser(response));
        browserHistory.push('/');
      })
      .catch(error => {
        dispatch(authError(error));
      });
  }
}

//function to sign out a user from firebase
export function signOutUser() {
  firebase.auth().signOut();
  browserHistory.push('/signin');
  return {
    type: SIGN_OUT_USER
  }
}

//function to check if the user is logged in from firebase
export function verifyAuth() {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser());
      } else {
        dispatch(signOutUser());
      }
    });
  }
}

//action to dispatch to authenticate a user if successfully signed in or signed up
export function authUser(user) {
  return {
    type: AUTH_USER,
    payload: user
  }
}

//action to dispatch if an error is returned when a user tries to sign in or sign up
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

//function to check if the user is currently logged in checking both the application state as well as the localStorage if the user refreshes the page
export function checkAuthStatus() {
  return function(dispatch) {
    //get the current state from the redux store
    const currentState = store.getState();
    //create a variable to hold the user property in the user object from state if it exists
    const currentUserFromState = currentState.auth;
    //check whether the user currently exists in the application state, and if not proceed to check if it exists in localStorage or return
    if(!currentUserFromState.authenticated) {
      // //set a flag to say that the user is not currently found in localStorage
      // let userInLocalStorage = false;
      //iterate over the keys in the localStorage object
      for (let key in localStorage) {
        //for each key in the object check if the key starts with 'firebase:authUser' which is the value of the item stored in localStorage if they were successfully authenticated from Firebase
        if(key.startsWith("firebase:authUser")) {
          // //set the value of the flag to true
          // userInLocalStorage = true;
          //if the key matches, get the value stored for that key and set it equal to a variable, remember to parse it into json because it will come back as a string
          const currentUserFromLocalStorage = JSON.parse(localStorage.getItem(key));
          //call the setLoggedInUser action with the value of the user from the localStorage so that the user is also set in the application
          dispatch(authUser(currentUserFromLocalStorage));
        }
      }
      // //if the flag for finding the user is still set to false then push the browser to the login route to get the user to sign up
      // if(!userInLocalStorage) {
      //   browserHistory.push('/login');
      // }
    }
    return;
  }
}
