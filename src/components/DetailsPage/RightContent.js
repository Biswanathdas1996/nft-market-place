import {
  Typography,
  Box,
  Avatar,
  Stack,
  Button,
  Grid,
  Container,
  Tab,
  Link,
  Tooltip,
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

const countData = ["05", "08", "35", "12"];

const RightContent = ({ nftData, owner, price }) => {
  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { name, attributes } = nftData;
  return (
    <Container>
      <Typography sx={{ fontSize: 30, fontWeight: "bold" }}>{name}</Typography>
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
            <Tooltip title="Contrct Address">
              <Link
                href="https://rinkeby.etherscan.io/address/0xdfc34335664a0c2c548cf0c837e9b0a9315eeda2"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  paragraph
                  item
                  fontWeight="600"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "11rem",
                  }}
                  style={{ fontSize: 10 }}
                >
                  {owner}
                </Typography>
              </Link>
            </Tooltip>
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
              alt="nft"
            />
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              {price / 1000000000000000000} ETH
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
        >
          Buy for {price / 1000000000000000000} ETH
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
          <Attributes attributes={attributes} />
          <TransactionHistory />
          <Bid />
        </TabContext>
      </Box>
    </Container>
  );
};

export default RightContent;
