import { useState, useEffect } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="bg-white dark:bg-dark" id="loading">
        <img src={require("../assets/page-loading.gif")} alt="loading" />
      </div>
    )
  );
}
