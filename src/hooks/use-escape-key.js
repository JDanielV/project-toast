import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    const keydownHandler = (e) => {
      if (e.code === "Escape") {
        callback(e);
      }
    };

    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [callback]);
}

export default useEscapeKey;
