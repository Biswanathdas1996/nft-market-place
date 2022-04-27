import React from "react";
import { TabPanel } from "@mui/lab";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Tooltip,
  Stack,
  Typography,
} from "@mui/material";
import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
import MaleImg from "../../assets/images/female1.png";
import EthIcon from "../../assets/icons/eth_icon.svg";
import CustomButton from "../DetailsPage/CustomButton";
import CustomTransactionStat from "./CustomTransactionStat";

const columns = [
  { id: "img" },
  { id: "from", label: "FROM", minWidth: 170 },
  { id: "to", label: "TO", minWidth: 100 },
  { id: "status", label: "STATUS", minWidth: 100 },
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

function createData(from, date, to, status, priceEth, priceDol, type) {
  return { from, date, to, status, priceEth, priceDol, type };
}

const rows = [
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Completed",
    "1.166",
    "120.99",
    "Transfer"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Pending",
    "1.166",
    "120.99",
    "Offered"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Cancelled",
    "1.166",
    "120.99",
    "Bid"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Completed",
    "1.166",
    "120.99",
    "Sold"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Completed",
    "1.166",
    "120.99",
    "Transfer"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Completed",
    "1.166",
    "120.99",
    "Transfer"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Pendind",
    "1.166",
    "120.99",
    "Offered"
  ),
  createData(
    "0x06F94D875F57822886143c033cf17C461423096b",
    "On 24/3/2022, 2:06 pm",
    "0x06F94D875F57822886143c033cf17C461423095c",
    "Completed",
    "1.166",
    "120.99",
    "Transfer"
  ),
];

const MyTransaction = () => {
  return (
    <TabPanel
      value="2"
      sx={{ border: "1px solid #EDEDED", padding: 0, marginTop: 5 }}
    >
      <Card>
        <TableContainer
          sx={{
            maxHeight: 390,
            width: "100%",
            // border: "1px solid #EDEDED",
          }}
        >
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
                  {/* Avatar */}
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
                  {/* From================= */}
                  <TableCell align="center" sx={{ fontWeight: "bold" }}>
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
                            width: "6rem",
                            color: "#0578EC",
                          }}
                        >
                          {row.from}
                        </Typography>
                      </Tooltip>
                      <Typography sx={{ fontSize: "11px" }}>
                        {row.date}
                      </Typography>
                    </Stack>
                  </TableCell>
                  {/* To================= */}

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
                  {/* Status================= */}
                  <TableCell align="left">
                    <Tooltip title={row.status}>
                      <CustomTransactionStat txtType={row.status} />
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

export default MyTransaction;
