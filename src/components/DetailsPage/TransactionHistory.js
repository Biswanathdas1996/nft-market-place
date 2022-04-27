import React, { useState, useEffect } from "react";
import { Avatar, Tooltip, Stack, Typography } from "@mui/material";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TabPanel } from "@mui/lab";
import MaleImg from "../../assets/images/male1.png";
import FemaleImg from "../../assets/images/female1.png";
import EthIcon from "../../assets/icons/eth_icon.svg";
import CustomButton from "./CustomButton";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import Axios from "axios";
import axios from "axios";

const columns = [
  { id: "img" },
  { id: "from", label: "FROM", minWidth: 170 },
  { id: "to", label: "TO", minWidth: 100 },
  {
    id: "price",
    label: "PRICE",
    minWidth: 170,
    align: "center",
  },
  {
    id: "type",
    label: "TYPE",
    minWidth: 170,
    align: "center",
  },
];

function createData(from, date, to, priceEth, priceDol, type) {
  return { from, date, to, priceEth, priceDol, type };
}

const rows = [
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Transfer"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Offered"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Bid"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Sold"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Transfer"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Transfer"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Offered"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "1.166",
    "120.99",
    "Transfer"
  ),

  // createData('0x1a331b312143...', '0x1a331b312...', 1.166, 'Offered'),
];

const TransactionHistory = () => {
  return (
    <TabPanel
      value="1"
      sx={{
        //  border: "1px solid #EDEDED",
        padding: 0,
        mt: "0px",
      }}
    >
      <Card>
        <TableContainer sx={{ maxHeight: 382, width: "100%" }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{ border: "1px solid #EDEDED" }}
          >
            <TableHead sx={{}}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ fontWeight: "bold", backgroundColor: "#F1F7FD" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.from}
                  sx={{
                    "&:last-child td, &:last-child th": { marginBottom: 10 },
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: "bold" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      sx={{
                        width: 30,
                        height: 30,
                        border: "1px solid green",
                        borderRadius: "50%",
                      }}
                      src={MaleImg}
                    >
                      {/* <MaleImg /> */}
                    </Avatar>
                  </TableCell>
                  <TableCell align="left" sx={{ fontWeight: "bold" }}>
                    {/* {row.from} */}
                    <Stack
                      direction="column"
                      sx={{
                        alignItems: "flex-start",
                        justifyContent: "start",
                        display: "flex",
                      }}
                    >
                      <Tooltip title={row.from}>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            fontSize: "14px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: "8rem",
                            color: "#0578EC",
                          }}
                        >
                          {row.from}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontSize: "1px" }}>
                        {row.date}
                      </Typography>
                    </Stack>
                  </TableCell>

                  <TableCell align="center">
                    <Tooltip title={row.to}>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "14px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          width: "6rem",
                          color: "#0578EC",
                        }}
                      >
                        {row.to}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="left">
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: "flex-start",
                        justifyContent: "start",
                        display: "flex",
                      }}
                    >
                      <img
                        width="10px"
                        alt="ethimg"
                        height="16px"
                        src={EthIcon}
                        style={{
                          color: "black",
                          marginTop: "4px",
                          marginRight: "3px",
                        }}
                      />
                      <Typography sx={{ fontWeight: 600 }}>
                        {row.priceEth}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{
                        alignItems: "flex-start",
                        justifyContent: "start",
                        display: "flex",
                      }}
                    >
                      <MonetizationOnOutlined
                        fontSize="12px"
                        sx={{ marginTop: "4px" }}
                      />
                      <Typography sx={{ fontWeight: 600 }}>
                        {row.priceDol}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <CustomButton type={row.type} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </TabPanel>
  );
};

export default TransactionHistory;
