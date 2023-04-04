import React, { useState } from "react";

function IMGFallback(props) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ height: loaded ? "auto" : "300px" }}
      onLoad={handleLoad}
    />
  );
}

export default IMGFallback;
