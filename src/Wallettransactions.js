import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";
import { useFindArtTokens } from "./hooks/DigitalArtHooks";

export default function Wallettransactions() {
  const artTokens = useFindArtTokens({ filter: "mine" });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Author</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">AuthorName</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artTokens.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.author}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.desc}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.authorName}
              </TableCell>

              <TableCell>{row.status}</TableCell>
              <TableCell>{row.owner}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
