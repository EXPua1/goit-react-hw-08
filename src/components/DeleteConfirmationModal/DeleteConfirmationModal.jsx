import css from "./DeleteConfirmationModal.module.css";

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className={css.modal}>
      <div className={css.modal_content}>
        <p>Are you sure you want to delete this contact?</p>
        <button className={css.btn} onClick={onConfirm}>
          Yes
        </button>
        <button className={css.btn_cancel} onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
