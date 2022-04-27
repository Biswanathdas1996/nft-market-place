import {
  Typography,
  Box,
  Avatar,
  Stack,
  Button,
  Grid,
  Container,
  Tab,
} from "@mui/material";
import React from "react";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Profile1 from "../../assets/images/profile1.jpg";
import Profile2 from "../../assets/images/profile2.jpg";
import EthIcon from "../../assets/icons/eth_icon.svg";
import Bid from "./Bid";
import Attributes from "./Attributes";
import TransactionHistory from "./TransactionHistory";
import { useFindArtTokens, useBuySellArt } from "../../hooks/DigitalArtHooks";

const countData = ["05", "08", "35", "12"];

const RightContent = (props) => {
  console.log("right content props:", props);
  const artTokens = useFindArtTokens({ filter: "pending" });
  const { response: buyArtResponse, buyArt } = useBuySellArt();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleBuyArt = async (tokenId, price) => {
    await buyArt({ tokenId, price });
    console.log(buyArtResponse);

    if (buyArtResponse?.error !== null) {
      window.location.reload();
    }
  };

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <Container>
      <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>
        {props.rightitem.title}
      </Typography>
      <Stack direction="row" spacing={12} marginTop="20px">
        <Stack direction="row">
          <Avatar
            alt="Remy Sharp"
            sx={{ width: 30, height: 30 }}
            src={Profile1}
          />
          <div style={{ marginLeft: 10 }}>
            <Typography
              sx={{ fontSize: 10, fontWeight: "bold", color: "#858585" }}
            >
              Creator
            </Typography>
            <Typography sx={{ fontSize: 11, fontWeight: "bold" }}>
              Remy Sharp
            </Typography>
          </div>
        </Stack>

        <Stack direction="row">
          <Avatar
            alt="Paul Sharp"
            sx={{ width: 30, height: 30 }}
            src={Profile2}
          />
          <div style={{ marginLeft: 10 }}>
            <Typography
              sx={{ fontSize: 10, fontWeight: "bold", color: "#858585" }}
            >
              Owner
            </Typography>
            <Typography sx={{ fontSize: 11, fontWeight: "bold" }}>
              Paul Sharp
            </Typography>
          </div>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginTop="30px"
      >
        <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
          Price
        </Typography>
        <Typography
          sx={{ fontWeight: "600", fontSize: "14px", color: "#ABB2B9" }}
        >
          Ends in
        </Typography>
      </Stack>
      <Grid container marginTop="10px">
        <Grid xs={6}>
          <Stack direction="row" spacing={1}>
            <img
              width="10px"
              height="20px"
              src={EthIcon}
              style={{ marginTop: "4px" }}
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              {props.rightitem.price} ETH
            </Typography>
          </Stack>
        </Grid>

        <Grid xs={6} sx={{ textAlign: "right" }}>
          {countData.map((card) => (
            <Box
              key={card}
              component="span"
              sx={{
                backgroundColor: "#ABB2B9",
                padding: "5px",
                borderRadius: "5px",
                marginLeft: "5px",
                color: "#FFFFFF",
                alignContent: "center",
                fontWeight: "bold",
              }}
            >
              {card}
            </Box>
          ))}
        </Grid>
      </Grid>
      {/* =============BUTTON======================================================== */}
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            width: "220px",
            height: "40px",
            fontSize: "12px",
            textAlign: "center",
            margin: 1,
          }}
          onClick={() =>
            handleBuyArt(props.rightitem.id, props.rightitem.price)
          }
        >
          Buy for {props.rightitem.price} ETH
        </Button>
        <Button
          variant="outlined"
          sx={{
            textTransform: "none",
            width: "220px",
            height: "40px",
            fontSize: "12px",
            textAlign: "center",
            margin: 1,
          }}
          disabled
        >
          Make an Offer
        </Button>
      </div>

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Attributes"
                disabled
                value="2"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              />
              <Tab
                label="Transaction history"
                value="1"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              />
              <Tab
                label="Bid"
                value="3"
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  color: "#000000",
                }}
              />
            </TabList>
          </Box>
          {/* <TabPanel value="1" sx={{ mt: "20px" }}>
            Attributes
          </TabPanel> */}
          <Attributes />
          <TransactionHistory />

          <Bid />

          {/* <Attributes />
          <TransactionHistory />
          <Bid /> */}
        </TabContext>
      </Box>
    </Container>
  );
};

export default RightContent;
