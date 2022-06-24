import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../services/UserContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Table.css";
import axios from "axios";

const Table = ({
  data = null,
  columns = null,
  hover = true,
  striped = true,
}) => {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  const handleDelete = async (_id) => {
    await axios
      .get("http://localhost:5000/rapport/supprimer/" + _id)
      .then((response) => {
        window.location.reload(false);
      });
  };
  const userContext = useContext(UserContext);
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row) => (
              <tr className={`${hover && "hover"} ${striped && "striped"}`}>
                {columns.map((col) =>
                  row[col.field].split("@")[0] === "link" ? (
                    <td>
                      <a href={row[col.field].split("@")[1]} className="button">
                        Download
                      </a>
                      {userContext.user && (
                        <IconButton
                          color="primary"
                          aria-label="delete"
                          component="span"
                        >
                          <DeleteIcon onClick={() => handleDelete(row._id)} />
                        </IconButton>
                      )}
                    </td>
                  ) : (
                    <td>{row[col.field]}</td>
                  )
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
};

export default Table;
