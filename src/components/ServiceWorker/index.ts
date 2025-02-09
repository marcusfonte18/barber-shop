"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registrado:", registration);
        })
        .catch((error) => {
          console.error("Erro ao registrar o Service Worker:", error);
        });

      navigator.serviceWorker
        .register("/sw-next.js")
        .then((registration) => {
          console.log("Service Worker registrado:", registration);
        })
        .catch((error) => {
          console.error("Erro ao registrar o Service Worker:", error);
        });
    }
  }, []);

  return null;
}
