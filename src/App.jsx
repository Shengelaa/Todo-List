import React from "react";
import AppRoutes from "./routes";
import { AuthProvider } from "./AuthProvider";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
