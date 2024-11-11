import React, { useState } from "react";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = () => {
    setIsModalOpen(true);
  };
  const confirmDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Deleted");
      })
      .catch((error) => {
        alert(error.message);
      });
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.contacts}>
      <div className={css.inner}>
        <p className={css.descr}>👦 {name}</p>
        <p className={css.descr}>📱 {number}</p>
      </div>

      <button className={css.btn} onClick={handleDelete} type="button">
        Delete
      </button>
      {isModalOpen && (
        <DeleteConfirmationModal
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Contact;
