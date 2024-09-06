import React, { useRef, useEffect } from "react";
import styles from "./NoteModal.module.css"; // Importing CSS module

const NoteModal = ({ isOpen, closeModal }) => {
  const textareaRef = useRef(null);

  // Focus on the textarea when modal opens
  useEffect(() => {
    if (isOpen && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null; // Don't render anything if modal is closed

  const handleSave = () => {
    // Add logic to save the note here
    closeModal(); // Close the modal after saving
  };

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button className={styles.closeButton} onClick={closeModal}>
          &times;
        </button>
        <h2>Note</h2>
        <textarea
          ref={textareaRef} // Use ref for focusing
          className={styles.noteInput}
          placeholder="Write your note here..."
        ></textarea>
        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteModal;
