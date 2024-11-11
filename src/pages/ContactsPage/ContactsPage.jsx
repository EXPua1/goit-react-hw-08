import {
  ContactList,
  SearchBox,
  ContactForm,
  Section,
  Container,
} from "../../components";

import { useDispatch, useSelector } from "react-redux";
import {} from "../../redux/filters/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";
import {
  selectContactsList,
  selectError,
  selectLoading,
} from "../../redux/contacts/selectors";

import { apiRefreshUser } from "../../redux/auth/operations";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
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
        <div>
          <ContactForm />
          <SearchBox />
          {loading && <p>Loading contacts...</p>}
          {error && <p>{error}</p>}

          {Array.isArray(contacts) && <ContactList />}
        </div>
        <div>
          <Toaster />
        </div>
      </Container>
    </Section>
  );
};

export default ContactsPage;
