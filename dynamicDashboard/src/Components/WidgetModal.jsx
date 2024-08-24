import React from "react";
import "./WidgetModal.css";

const WidgetModal = ({
  isOpen,
  onClose,
  onAddWidget,
  newWidgetName,
  setNewWidgetName,
  newWidgetText,
  setNewWidgetText,
}) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Add Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
        />
        <button onClick={onAddWidget}>Add</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default WidgetModal;
