// src/components/SearchWidget.jsx
import React, { useState } from "react";
import { useWidgets } from "../context/WidgetContext";
import "./SearchWidget.css";

const SearchWidget = () => {
  const { categories } = useWidgets();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWidgets = categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <div className="app">
        <h1>CNPP Dashboard</h1>
        <div className="search-widget">
          <input
            type="text"
            placeholder="Search Widgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="search-results">
        {searchTerm && filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <div key={widget.id}>
              <h4>{widget.name}</h4>
              <p>{widget.text}</p>
            </div>
          ))
        ) : searchTerm ? (
          <p>No results found</p>
        ) : null}
      </div>
    </>
  );
};

export default SearchWidget;
