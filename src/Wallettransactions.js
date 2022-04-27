

import React ,{useState, useContext}from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import { ArtTokenCard, WalletCard } from "./components/";
import {useFindArtTokens, useResellArt} from "./hooks/DigitalArtHooks";
import Web3Context  from "./Web3Context";



export default function Wallettransactions(props) {
    const web3Context = useContext(Web3Context);
    console.log(web3Context)
  const [state, setState] =  useState({
    message: "",
    tokenId: "",
    price: 0,
    showModal: false,
  });

  const artTokens  = useFindArtTokens({filter: 'mine'});
  const {response: resellArtResponse , resellArt } = useResellArt();









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

          
          { artTokens.map((row) => (
            <TableRow
              key={web3Context.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
           
              <TableCell >{row.status}</TableCell>
              <TableCell >{row.owner}</TableCell>
              <TableCell >{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


