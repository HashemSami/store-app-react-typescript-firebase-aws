import { FC } from "react";
import "./HomePage.styles.scss";
import Directory from "../../components/menu/directory/Directory.component";

const HomePage: FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
