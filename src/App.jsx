import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "modern-normalize";
import "./index.css";
import {
  Container,
  Section,
  ContactList,
  SearchBox,
  ContactForm,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContactsList,
  selectError,
  selectLoading,
} from "./redux/selectors";
import { fetchContacts } from "./redux/contactsOps";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <ContactForm />
        <SearchBox />
        {loading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {Array.isArray(contacts) && <ContactList />}
      </Container>
    </Section>
  );
};

export default App;
