import { FC } from "react";
// import "./HomePage.styles.scss";
import { HomePageContainer } from "./HomePage.styles";
import Directory from "../../components/menu/directory/Directory.component";

const HomePage: FC = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
