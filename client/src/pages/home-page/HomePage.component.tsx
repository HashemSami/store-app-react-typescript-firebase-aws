import { FC } from "react";
import "./HomePage.styles.scss";
import Directory from "../../components/directory/Directory.component";

const HomePage: FC = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
