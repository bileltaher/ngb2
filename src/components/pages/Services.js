import React from "react";
import "../../App.css";

import Documents from "./Documents";
import Reports from "./Reports";
import Stage from "./Stage";

export default function Services() {
  return (
    <div>
      <div id="documents">
        <Documents />
      </div>
      <div id="stage">
        <Stage />
      </div>
      <div id="reports">
        <Reports />
      </div>
    </div>
  );
}
