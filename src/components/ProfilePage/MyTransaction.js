import React, { useState, useEffect } from "react";
import { TabPanel } from "@mui/lab";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Stack,
  Typography,
} from "@mui/material";
// import MonetizationOnOutlined from "@mui/icons-material/MonetizationOnOutlined";
// import MaleImg from "../../assets/images/female1.png";
import EthIcon from "../../assets/icons/eth_icon.svg";
import CustomTransactionStat from "./CustomTransactionStat";
import { _account } from "../../CONTRACT-ABI/connect";

const columns = [
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
    label: "HASH",
    minWidth: 170,
    align: "center",
  },
];

const MyTransaction = () => {
  const [transctions, settransctions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const account = await _account();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api-rinkeby.etherscan.io/api?module=account&action=txlist&address=${account}&sort=desc&page=1&offset=10&apikey=WCVDU52748WW4F7EKDEDB89HKH41BIA4N2`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        settransctions(result.result);
        console.log(result.result);
      })
      .catch((error) => console.log("error", error));
  };

  // console.log(
  //   new Intl.DateTimeFormat("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   }).format(1651308763)
  // );

  const date = 1651308763;
  const timeZone = "Asia/Kolkata";

  // Potential formatters to use to display date / time
  const formatters = [
    new Intl.DateTimeFormat("en-US", {
      timeStyle: "long",
      dateStyle: "short",
      timeZone,
    }),
    new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
      dateStyle: "medium",
      timeZone,
    }),
    new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
      dateStyle: "medium",
      hour12: false,
      timeZone,
    }),
    // Using an 'sv' locale will give an ISO-8601 output
    new Intl.DateTimeFormat("sv", {
      timeStyle: "medium",
      dateStyle: "short",
      timeZone,
    }),
    new Intl.DateTimeFormat("en-US", { timeStyle: "short", timeZone }),
    new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
      hour12: false,
      timeZone,
    }),
  ];

  formatters.forEach((fmt) => console.log(fmt.format(date)));

  return (
    <TabPanel
      value="2"
      sx={{ border: "1px solid #EDEDED", padding: 0, marginTop: 5 }}
    >
      <Card>
        <TableContainer
          sx={{
            maxHeight: "auto",
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
              {transctions?.map((data, i) => {
                var unixTimestamp = data?.timeStamp;
                var date = new Date(unixTimestamp * 1000);

                const txnDate =
                  date.getDate() +
                  "/" +
                  (date.getMonth() + 1) +
                  "/" +
                  date.getFullYear() +
                  " " +
                  date.getHours() +
                  ":" +
                  date.getMinutes() +
                  ":" +
                  date.getSeconds();
                return (
                  <TableRow
                    key={i}
                    sx={{
                      "&:last-child td, &:last-child th": { marginBottom: 10 },
                    }}
                  >
                    <TableCell align="center" sx={{ fontWeight: "bold" }}>
                      <Stack
                        direction="column"
                        sx={{
                          alignItems: "flex-start",
                          justifyContent: "start",
                          display: "flex",
                        }}
                      >
                        <Tooltip title={data?.from}>
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
                            {data?.from}
                          </Typography>
                        </Tooltip>
                        <Typography sx={{ fontSize: "11px" }}>
                          {txnDate}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Tooltip title={data?.to}>
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
                          {data?.to}
                        </Typography>
                      </Tooltip>
                    </TableCell>
                    {/* Status================= */}
                    <TableCell align="left">
                      <CustomTransactionStat
                        txtType={data?.isError === "1" ? "Failed" : "Completed"}
                      />
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
                          {" "}
                          {data?.value / 1000000000000000000}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Tooltip title={data?.hash}>
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
                          {data?.hash}
                        </Typography>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </TabPanel>
  );
};

export default MyTransaction;
