import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import Container from "../Container/Container";

const AppBar = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <Container>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </Container>
  );
};

export default AppBar;
