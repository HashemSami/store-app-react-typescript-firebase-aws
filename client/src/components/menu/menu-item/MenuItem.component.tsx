import { FC } from "react";
import "./MenuItem.styles.scss";
// this hook will help us pass the information of the URL we need from the main Component
// instead of sending it to through the props
import { useHistory, useRouteMatch, useLocation, useParams } from "react-router-dom";
// import { MenuSection } from "../../models";

interface MenuItemProps {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

const MenuItem: FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const location = useLocation();
  const prm = useParams();
  const match = useRouteMatch();
  // console.log(history);
  // console.log(location);
  return (
    <div className={`${size ? size : ""} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      {/* will add a div seperate div for hendling the background image */}
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
