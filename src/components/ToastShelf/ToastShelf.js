import React from "react";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import useEscapeKey from "../../hooks/use-escape-key";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, dismissAllToasts } = React.useContext(ToastContext);

  const handleEscapeKey = React.useCallback(() => {
    dismissAllToasts([]);
  }, [dismissAllToasts]);

  useEscapeKey(handleEscapeKey);

  return (
    <ol
      role={"region"}
      className={styles.wrapper}
      aria-live="polite"
      aria-label="Notification"
    >
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
