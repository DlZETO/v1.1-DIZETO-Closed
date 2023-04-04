import { useState, useEffect } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div id="preloader">
        <img src={require("../assets/page-loading.gif")} alt="Preloader" />
      </div>
    )
  );
}

export default Preloader;
