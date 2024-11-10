import React from "react";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contacts}>
      <div className={css.inner}>
        <p className={css.descr}>👦 {name}</p>
        <p className={css.descr}>📱 {number}</p>
      </div>

      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
