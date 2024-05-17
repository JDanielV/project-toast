import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (variant, message) => {
    const toast = {
      variant: variant,
      message: message,
      id: crypto.randomUUID(),
    };

    setToasts([...toasts, toast]);
  };

  const dismissToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  };

  const dismissAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
