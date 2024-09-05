import React from "react";
import styles from "./NoteModal.module.css"; // Importing CSS module

const NoteModal = ({ isOpen, closeModal }) => {
  if (!isOpen) return null; // Don't render anything if modal is closed

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <h2>Note</h2>
        <textarea
          className={styles.noteInput}
          placeholder="Write your note here..."
        ></textarea>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
};

export default NoteModal;
