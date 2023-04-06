import React from "react";

export default function Title({ ttl1, ttl2 }) {
  return (
    <div className="pb-5">
      <h2 className="text-xl">
        {ttl1}
        <br />
        {ttl2}
      </h2>
    </div>
  );
}
