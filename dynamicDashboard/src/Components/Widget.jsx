import React from "react";

const Widget = ({ widget, categoryId, removeWidget }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={() => removeWidget(categoryId, widget.id)}>
        Remove
      </button>
    </div>
  );
};

export default Widget;
