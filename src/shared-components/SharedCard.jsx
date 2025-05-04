import React from "react";

export default function SharedCard({ title, className, ...props }) {
  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center">{title}</h2>
        <div className={`text-center mb-3 alert ${className}`}>
          {props.children}
        </div>
      </div>
    </>
  );
}
