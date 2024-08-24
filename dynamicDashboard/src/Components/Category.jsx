import React, { useState } from "react";
import { useWidgets } from "../context/WidgetContext";
import Widget from "./Widget";
import "./Category.css";

const Category = ({ category }) => {
  const { addWidget, removeWidget } = useWidgets();
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddWidget = () => {
    if (newWidgetName.trim() === "" || newWidgetText.trim() === "") {
      alert("Please enter both widget name and text.");
      return;
    }

    const newWidget = {
      id: `widget-${Date.now()}`,
      name: newWidgetName,
      text: newWidgetText,
    };

    addWidget(category.id, newWidget);
    setNewWidgetName("");
    setNewWidgetText("");
    setIsAdding(false);
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-wrapper">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            removeWidget={removeWidget}
          />
        ))}

        <div className="add-widget-wrapper">
          <button onClick={() => setIsAdding(!isAdding)}>
            {isAdding ? "Cancel" : "+ Add Widget"}
          </button>
          {isAdding && (
            <div className="add-widget-form">
              <input
                type="text"
                placeholder="Widget Name"
                value={newWidgetName}
                onChange={(e) => setNewWidgetName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Widget Text"
                value={newWidgetText}
                onChange={(e) => setNewWidgetText(e.target.value)}
              />
              <button onClick={handleAddWidget} className="category-btn">
                Add Widget
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
