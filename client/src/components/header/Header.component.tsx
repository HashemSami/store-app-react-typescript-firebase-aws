import React, { FC } from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import { useTypedSelector } from "../../hooks/useTypedSeletor";

interface HeaderProps {
  currentUser: any;
}

const Header: FC<HeaderProps> = ({ currentUser }) => {
  const { userId } = useTypedSelector((state) => state.currentUser);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {userId ? (
          <div
            className="option"
            onClick={async () => {
              auth.signOut();
              // creater an action creaator to dispatch a user to null
              // await auth.updateCurrentUser();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
