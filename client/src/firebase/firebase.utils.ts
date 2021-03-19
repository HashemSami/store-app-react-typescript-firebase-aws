// importing firebase main app and put them in variable
// this will make us have access to the firebase functionality
// with this variable
import firebase from "firebase/app";

// next we need to attach what we need from google sevices to this variable we created
// for example will attach the firestore na auth to our variable
import "firebase/firestore";
import "firebase/auth";

// setup the confiruratuion
// console.log("api key", process.env.REACT_APP_FIREBASE_API_KEY);
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "store-app-react-b5c13.firebaseapp.com",
  databaseURL: "https://store-app-react-b5c13.firebaseio.com",
  projectId: "store-app-react-b5c13",
  storageBucket: "store-app-react-b5c13.appspot.com",
  messagingSenderId: "837550542270",
  appId: "1:837550542270:web:fcae87168187b4c2c0bdef",
  measurementId: "G-B3Z046ZVEV",
};

// will create a function that will take out authed user data
// and store it in our database in the users collection
export const createUserProfileDocument = async (
  userAuth: firebase.User | null
) => {
  // if the user logged of, the userAuth will be null, so we will return from this method
  if (!userAuth) return;
  console.log(userAuth);

  const token = await userAuth.getIdToken();
  console.log(token);

  const { uid, email } = userAuth;

  return { token, uid, email };
};

// init app
firebase.initializeApp(config);

// expotring auth to use it in our app
export const auth = firebase.auth();

// expotring firestore to use it in our app
export const firestore = firebase.firestore();

// now will setup google auth configs
// git the provider object
const provider = new firebase.auth.GoogleAuthProvider();

// setup a custom parameters
// this example means that we need to treger the google popup when ever
// we use this google auth
provider.setCustomParameters({ prompt: "select_account" });

// exporting google auth to use it in our app
// signInWithPopup can implement also other types of auth like facebook or twitter
// for now we pass it our google providor
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// will export the hole libary in case we need it
export default firebase;

// after signing up the user with firebase will get the id token and save it to send with the header of every request we make to our server

// we can ge the id token by call getIdToken() after signing up the user
