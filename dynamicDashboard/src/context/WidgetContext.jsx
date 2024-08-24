// src/context/WidgetContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import initialData from "../json/data.json";

const WidgetContext = createContext();

export const useWidgets = () => {
  return useContext(WidgetContext);
};

export const WidgetProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Set initial categories from JSON data if no categories are set
    setCategories(initialData.categories);
  }, []);

  const addWidget = (categoryId, widget) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, widgets: [...category.widgets, widget] }
          : category
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  return (
    <WidgetContext.Provider
      value={{
        categories,
        addWidget,
        removeWidget,
        setCategories,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};
