// src/App.jsx
import React, { useEffect } from "react";
import { WidgetProvider } from "./context/WidgetContext";
import SearchWidget from "./Components/SearchWidget";
import Dashboard from "./Components/Dashboard";
import initialData from "./json/data.json";
import "./App.css";

function App() {
  return (
    <WidgetProvider>
      <div className="app-container">
        <SearchWidget />
        <Dashboard />
      </div>
    </WidgetProvider>
  );
}

export default App;
