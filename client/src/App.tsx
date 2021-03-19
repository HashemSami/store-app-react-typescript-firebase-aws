import { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page/HomePage.component";
import ShopPage from "./pages/shop-page/ShopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUpPage.component";
import Header from "./components/header/Header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useActions } from "./hooks/useActions";

function App() {
  const { setCurrentUser } = useActions();
  // make an effect that will be terigered when the auth changes
  // this way we can check the authed user to our firebase
  useEffect(() => {
    // this is a firebase auth method that can listen to auth state changes
    // and will fire up  every time the auth changes
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userData = await createUserProfileDocument(userAuth);
        if (!userData) {
          return;
        }
        const { token, uid, email } = userData;

        setCurrentUser(uid, token);
      } else {
        // setCurrentUser(userAuth);
      }
    });

    // console.log(currentUser);
    // we want to clean this method every time this component unmouted
    return () => unsubscribeFromAuth();
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
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
