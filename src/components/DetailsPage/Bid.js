import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Avatar,
  Tooltip,
  Stack,
} from "@mui/material";
import { TabPanel } from "@mui/lab";
import MaleImg from "../../assets/images/male1.png";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
// import FemaleImg from '../../assets/images/female.jpg';

function createData(amount, from, date, timeElapsed) {
  return { amount, from, date, timeElapsed };
}

const rows = [
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "19/3/2022, 2:15 pm",
    "3 Days ago"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "On 24/3/2022, 2:06 pm",
    "2h 3m 20s"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "19/3/2022, 2:15 pm",
    "3 Days ago"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "On 24/3/2022, 2:06 pm",
    "2h 3m 20s"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "19/3/2022, 2:15 pm",
    "3 Days ago"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "On 24/3/2022, 2:06 pm",
    "2h 3m 20s"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "19/3/2022, 2:15 pm",
    "3 Days ago"
  ),
  createData(
    "0.0025 ETH",
    "0x1a331b312143621dc86...bdfd",
    "On 24/3/2022, 2:06 pm",
    "2h 3m 20s"
  ),
];

const Bid = () => {
  return (
    <TabPanel
      value="3"
      sx={{ backgroundColor: "#F0F6FF", width: "100%", height: 380 }}
    >
      <Stack
        direction="Column"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "Center",
          p: 5,
        }}
      >
        <SpeakerNotesOffIcon sx={{ color: "#ABB2B9", fontSize: 60 }} />
        <Typography
          sx={{
            color: "#ABB2B9",
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 5,
          }}
        >
          No active bids yet. Be the first to make a bid!
        </Typography>
      </Stack>
    </TabPanel>

    // <TabPanel
    //   value="3"
    //   sx={{
    //     padding: 0,
    //     // width: "100%",
    //     // maxHeight: 355,
    //     // backgroundColor: "#F0F6FF",
    //     border: "1px solid #EDEDED",
    //   }}
    // >
    //   <TableContainer sx={{ maxHeight: 257, width: "100%" }}>
    //     <Table>
    //       <TableBody>
    //         {rows.map((row) => (
    //           <TableRow
    //             key={row.from}
    //             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //           >
    //             <TableCell component="th" scope="row">
    //               <Avatar
    //                 alt="Remy Sharp"
    //                 sx={{
    //                   width: 30,
    //                   height: 30,
    //                   border: "1px solid green",
    //                   borderRadius: "50%",
    //                 }}
    //                 src={MaleImg}
    //               ></Avatar>
    //             </TableCell>
    //             <TableCell sx={{}}>
    //               {/* {row.from} */}
    //               <Stack
    //                 direction="column"
    //                 sx={{
    //                   alignItems: "flex-start",
    //                   justifyContent: "start",
    //                   display: "flex",
    //                 }}
    //               >
    //                 <Tooltip title={row.from}>
    //                   <Typography
    //                     sx={{
    //                       fontWeight: "bold",
    //                       fontSize: "14px",
    //                       overflow: "hidden",
    //                       textOverflow: "ellipsis",
    //                       color: "#000000",
    //                     }}
    //                   >
    //                     {`${row.amount} by  ${row.from}`}
    //                   </Typography>
    //                 </Tooltip>
    //               </Stack>

    //               <Typography
    //                 sx={{
    //                   fontSize: "14px",
    //                   overflow: "hidden",
    //                   textOverflow: "ellipsis",
    //                   color: "#000000",
    //                 }}
    //               >
    //                 {row.date}
    //               </Typography>
    //             </TableCell>
    //             <TableCell align="center">
    //               <Tooltip title={row.timeElapsed}>
    //                 <Typography
    //                   sx={{
    //                     fontWeight: "bold",
    //                     fontSize: "14px",
    //                     overflow: "hidden",
    //                     textOverflow: "ellipsis",
    //                     width: "6rem",
    //                     color: "#000000",
    //                   }}
    //                 >
    //                   {row.timeElapsed}
    //                 </Typography>
    //               </Tooltip>
    //             </TableCell>
    //             <TableCell></TableCell>
    //           </TableRow>
    //         ))}
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    //   <TableContainer>
    //     <Table>
    //       <TableBody>
    //         <TableRow sx={{ background: "#F0F6FF", height: 100 }}>
    //           <TableCell component="th" scope="row">
    //             <Stack
    //               direction="row"
    //               spacing={4}
    //               sx={{
    //                 alignItems: "flex-start",
    //                 justifyContent: "start",
    //                 display: "flex",
    //               }}
    //             >
    //               <Avatar
    //                 alt="Remy Sharp"
    //                 sx={{
    //                   width: 30,
    //                   height: 30,

    //                   borderRadius: "50%",
    //                 }}
    //                 src={MaleImg}
    //               ></Avatar>

    //               <Tooltip title={rows[0].from}>
    //                 <Typography
    //                   sx={{
    //                     fontWeight: "bold",
    //                     fontSize: "14px",
    //                     overflow: "hidden",

    //                     color: "#000000",
    //                   }}
    //                 >
    //                   {`Highest Bid by  ${rows[0].from}`}
    //                 </Typography>
    //               </Tooltip>
    //             </Stack>

    //             <Typography
    //               sx={{
    //                 fontSize: "18px",
    //                 fontWeight: "bold",
    //                 overflow: "hidden",
    //                 textOverflow: "ellipsis",
    //                 pl: "65px",
    //                 color: "#000000",
    //               }}
    //             >
    //               {rows[0].amount}
    //             </Typography>
    //           </TableCell>
    //         </TableRow>
    //       </TableBody>
    //     </Table>
    //   </TableContainer>
    // </TabPanel>
  );
};

export default Bid;
