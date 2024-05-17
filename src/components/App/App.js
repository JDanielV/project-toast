import React, { StrictMode } from "react";
import ToastProvider from "../ToastProvider/ToastProvider";
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

function App() {
  return (
    <StrictMode>
      <ToastProvider>
        <ToastPlayground />
        <Footer />
      </ToastProvider>
    </StrictMode>
  );
}

export default App;
