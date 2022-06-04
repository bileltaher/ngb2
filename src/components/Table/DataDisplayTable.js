import React from "react";
import "./Table.css";
import Table from "./Table";
import { tableData } from "./Data";

function DataDisplayTable() {
  return (
    <div className="data-display-table">
      <h2>React-App</h2>
      <h4>Building a Reusable Table Component</h4>
      <Table data={tableData} columns={columns} hover={true} striped={true} />
    </div>
  );
}

export default DataDisplayTable;
