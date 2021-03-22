import { FC } from "react";
import "./Header.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

import { useTypedSelector } from "../../hooks/useTypedSeletor";
import { useActions } from "../../hooks/useActions";
import { createSelector } from "reselect";

const getUserId = createSelector(
  (userId: any) => userId,
  (userId: any) => userId
);
const getHedden = createSelector(
  (hidden: any) => hidden,
  (hidden: any) => hidden
);

const Header: FC = () => {
  const { signOutCurrentUser } = useActions();
  const userId = useTypedSelector(({ currentUser: { userId } }) =>
    getUserId(userId)
  );
  const hidden = useTypedSelector(({ cart: { hidden } }) => getHedden(hidden));
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
