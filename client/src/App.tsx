import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage.component";
import ShopPage from "./pages/shop/ShopPage.componenet";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUpPage.component";
import Header from "./components/header/Header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // make an effect that will be terigered when the auth changes
  // this way we can check the authed user to our firebase
  useEffect(() => {
    // this is a firebase auth method that can listen to auth state changes
    // and will fire up  every time the auth changes
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // this is another listner similar to the onAuthStateChanged
        // which will be invoked every time userRef changes
        // with this we will check if the database has updated with that new user we entered
        // or we get the data of the user from our database
        userRef.onSnapshot((snapshout) => {
          // to get the data propeties from the snapshot we have to call data() method on it
          // here will update the state with ther user stored in our database
          if (!currentUser || currentUser.id !== snapshout.id) {
            setCurrentUser({
              id: snapshout.id,
              ...snapshout.data(),
            });
          }
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    // console.log(currentUser);
    // we want to clean this method every time this component unmouted
    return () => unsubscribeFromAuth();
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/shop">
          <ShopPage />
        </Route>

        <Route exact path="/signIn">
          <SignInAndSignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
