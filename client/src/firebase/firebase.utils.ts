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
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  // if the user logged of, the userAuth will be null, so we will return from this method
  if (!userAuth) return;
  console.log("once");

  // if we have the object from the onAuthStateChanged method in the App componenet
  // first will check if the user exists in our database
  // will call the ref rence that will have some method that we can perform to our data
  // we could have .get() .add() .delete()
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // we also have a snap shot of the data so we can have information about the data we get
  const snapshot = await userRef.get();

  // snapshot will have a property exists that will give us true if the user exists in iur database
  if (!snapshot.exists) {
    // to create the document in our database we have to use the userRef Object, not the snapshot object
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // will return the user ref so we can use it for other thing on the app
  return userRef;
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
