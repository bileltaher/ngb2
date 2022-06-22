import React from "react";
import Table from "../Table/Table";
import { tableData } from "../Table/Data";
import "../Table/Table.css";

const columns = [
  { field: "title", header: "Title" },
  { field: "document", header: "Document" },
];

export default function Documents() {
  return (
    <>
      <h1 className="services">DOCUMENTS</h1>
      <div className="data-display-table">
        <Table data={tableData} columns={columns} hover={true} striped={true} />
      </div>
    </>
  );
}
