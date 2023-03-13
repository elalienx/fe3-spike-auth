// Node modules
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import { UserProvider } from "./state/UserState";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider storageKey="user-uid">
      <App />
    </UserProvider>
  </React.StrictMode>
);
