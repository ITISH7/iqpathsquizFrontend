import React, {useState, useEffect} from "react";
import styles from "./NoteModal.module.css";

const NoteModal = ({ isOpen, closeModal, onSave, initialNote, problemId }) => {
  const [note, setNote] = useState(initialNote || "");

  useEffect(() => {
    setNote(initialNote || "");
  }, [initialNote, problemId]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSave = () => {
    if (note.trim() !== "") {
      onSave(problemId ,note);
    }
    else {
      onSave(problemId, "");
    }
    closeModal();
  };

  if (!isOpen) return null;
  // useEffect(() => {
  //   localStorage.setItem("notes", JSON.stringify(todos))
  // }, [todos])


  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>
          Close 
        </button>
        <p className={styles.noteHeading}>Save Notes</p>
        <textarea
          className={styles.noteInput}
          placeholder="Write your note here..."
          value={note}
          onChange={handleNoteChange}
        ></textarea>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={closeModal}>
            Cancel
          </button>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
