import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Servitem({ icons, title, text }) {
  return (
    <>
      <div className="box">
        <FontAwesomeIcon icon={icons} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
