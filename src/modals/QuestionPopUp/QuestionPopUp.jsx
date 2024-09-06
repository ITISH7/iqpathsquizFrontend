
import './QuestionPopUp.module.css'; // Create a CSS file for styling the popup

const Popup = ({ isVisible, questionData, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>X</button>
        <h2>{questionData.name}</h2>
        <p><strong>Question:</strong> {questionData.question}</p>
        <p><strong>Options:</strong> {questionData.options.join(', ')}</p>
        <p><strong>Explanation:</strong> {questionData.explanation}</p>
      </div>
    </div>
  );
};

export default Popup;
