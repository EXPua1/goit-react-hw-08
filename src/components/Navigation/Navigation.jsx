import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;