import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Adjust the import path based on your actual file structure

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element.');
}
