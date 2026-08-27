import {
  useEffect,
  useState,
} from "react";

// ======================================================
// Get Initial Browser Network State
// ======================================================

const getInitialOnlineStatus =
  (): boolean => {
    if (
      typeof navigator ===
      "undefined"
    ) {
      return true;
    }

    return navigator.onLine;
  };

// ======================================================
// Online Status Hook
// ======================================================

export default function useOnlineStatus() {
  const [
    isOnline,
    setIsOnline,
  ] = useState<boolean>(
    getInitialOnlineStatus,
  );

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener(
      "online",
      handleOnline,
    );

    window.addEventListener(
      "offline",
      handleOffline,
    );

    return () => {
      window.removeEventListener(
        "online",
        handleOnline,
      );

      window.removeEventListener(
        "offline",
        handleOffline,
      );
    };
  }, []);

  return isOnline;
}