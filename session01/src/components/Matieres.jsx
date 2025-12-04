import data from "../data/items.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Matieres() {
  // Regrouper par cours
  const courses = {};

  data.forEach((item) => {
    if (!courses[item.course]) {
      courses[item.course] = [];
    }
    courses[item.course].push(item.grade);
  });

  // Transformer en tableau exploitable
  const rows = Object.entries(courses).map(([course, grades]) => {
    const avg = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
    return {
      course,
      count: grades.length,
      avg,
    };
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Matière</b></TableCell>
            <TableCell><b>Nombre de notes</b></TableCell>
            <TableCell><b>Moyenne</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.course}>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.count}</TableCell>
              <TableCell>{row.avg}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}
