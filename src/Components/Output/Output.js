import React from "react";
import CustomerData from "../../JSON Files/customers.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./Output.css";

function Output() {
  const rows = CustomerData;
  return (
    <div className="output">
      <TableContainer sx={{ maxHeight: 490, minWidth: 650 }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead
            sx={{
              "& th": {
                color: "#fff",
                backgroundColor: "#212121",
                fontWeight: "bold",
              },
            }}
          >
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Postal Code</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.customerID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.contactName}
                </TableCell>
                <TableCell>{row.address.city}</TableCell>
                <TableCell>{row.address.postalCode}</TableCell>
                <TableCell>{row.address.country}</TableCell>
                <TableCell>{row.address.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Output;
