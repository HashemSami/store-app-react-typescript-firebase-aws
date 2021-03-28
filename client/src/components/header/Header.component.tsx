import { FC } from "react";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./Header.styles";

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
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {userId ? (
          <OptionLink
            as="div"
            onClick={async () => {
              auth.signOut();
              // creater an action creaator to dispatch a user to null
              // await auth.updateCurrentUser();
              signOutCurrentUser();
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
