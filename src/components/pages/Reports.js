import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import "../Table/Table.css";

const columns = [
  ,
  { field: "nom", header: "Title" },
  { field: "doc", header: "Document" },
  ,
];

export default function Documents() {
  const [reports, setReports] = useState([]);

  const getReports = async () => {
    const { data } = await axios.get(
      "https://notregrandbleu.herokuapp.com/rapport/"
    );
    data.forEach((row) => {
      row.doc = "link@http://notregrandbleu.org/assets/img/rapport/" + row.doc;
    });
    setReports(data);
  };

  useEffect(() => {
    getReports();
  }, []);
  return (
    <>
      <h1 className="services">REPORTS</h1>
      <div className="data-display-table">
        <Table data={reports} columns={columns} hover={true} striped={true} />
      </div>
    </>
  );
}
