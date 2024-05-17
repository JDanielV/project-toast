import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);

  React.useEffect(() => {
    const keydownHandler = (e) => {
      console.log(e.code);
      if (e.code === "Escape") {
        dismissAllToasts();
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [dismissAllToasts]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast toast={toast}>{toast.message}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
