// src/components/Dashboard.jsx
import React from "react";
import Category from "./Category";
import { useWidgets } from "../context/WidgetContext";

const Dashboard = () => {
  const { categories, addWidget, removeWidget } = useWidgets();

  return (
    <div className="dashboard">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      ))}
    </div>
  );
};

export default Dashboard;
