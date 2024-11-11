import React, { useState, useEffect, lazy } from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import { Container, Layout, Section } from "./components";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/homePage";
import RegisterPage from "./pages/RegisterPage/registerPage";
import ContactsPage from "./pages/ContactsPage/contactsPage";
import LoginPage from "./pages/LoginPage/loginPage";
import { RestrictedRoute } from "./RestrictedRoute";
import { apiRefreshUser } from "./redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>; // Можно заменить на компонент загрузки или индикатор
  }

  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
  const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
  const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

  return (
    <Section>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
            }
          />
        </Routes>
      </Layout>
    </Section>
  );
};

export default App;
