import { FC } from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart/cart-icon/CartIcon.component";
import CartDropdown from "../cart/cart-dropdown/CartDropdown.component";

import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { useActions } from "../../hooks/useActions";
import { useCreateSelector } from "../../hooks/useCreateSelector";

const Header: FC = () => {
  const { signOutCurrentUser } = useActions();

  const { userCreateSelector, hiddenCreateSelector } = useCreateSelector();

  const userId = useTypedSelector(({ currentUser: { userId } }) => userCreateSelector(userId));

  const hidden = useTypedSelector(({ cart: { hidden } }) => hiddenCreateSelector(hidden));

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
              signOutCurrentUser();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
