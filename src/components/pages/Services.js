import React from "react";
import "../../App.css";
import Form from "../../components/Form";
import Documents from "./Documents";
import Reports from "./Reports";
import Stage from "./Stage";

export default function Services() {
  return (
    <div>
      <h1 className="services">SERVICES</h1>;
      <Form />;
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
