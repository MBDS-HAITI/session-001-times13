import data from "../data/items.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Etudiants() {
  // Récupérer seulement les étudiants uniques
  const students = data.map((item) => item.student);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>ID</b></TableCell>
            <TableCell><b>Prénom</b></TableCell>
            <TableCell><b>Nom</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((student, i) => (
            <TableRow key={i}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.firstname}</TableCell>
              <TableCell>{student.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}