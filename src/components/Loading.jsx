import { useState, useEffect } from "react";
import LoadingDark from "../assets/loading/loading-dark.gif";
import LoadingWhite from "../assets/loading/loading-white.gif";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  const html = document.querySelector("html");
  const [src, setSrc] = useState("");

  useEffect(() => {
    function srcLoading() {
      if (html.className === "dark") {
        setSrc(LoadingDark);
      } else {
        setSrc(LoadingWhite);
      }
    }
    srcLoading();
  }, [html.className]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="bg-white dark:bg-dark" id="loading">
        <img className="h-36 w-36" src={src} alt="loading" />
      </div>
    )
  );
}
