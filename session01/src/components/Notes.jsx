import { useState } from "react";
import data from "../data/items.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Notes() {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Étudiant</b></TableCell>
            <TableCell><b>Cours</b></TableCell>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Note</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.unique_id}>
              <TableCell>{item.unique_id}</TableCell>
              <TableCell>
                {item.student.firstname} {item.student.lastname}
              </TableCell>
              <TableCell>{item.course}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

export default Notes;
