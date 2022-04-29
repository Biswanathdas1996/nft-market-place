import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import BackgroundImg from "../../assets/images/bckimg.png";
import MyProfileCard from "./MyProfileCard";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import MyTransaction from "./MyTransaction";
import MyWallet from "./MyWallet";
import MyCollections from "./MyCollections";
import MyFavorites from "./MyFavorites";

const ProfilePage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div
        style={{
          height: 200,
          width: "100%",
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <Container>
          <Typography
            variant="h5"
            component="h6"
            sx={{ color: "#FFFFFF", pt: 6 }}
          >
            My Profile
          </Typography>
        </Container>
      </div>
      <Container>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid xs={12} md={3.5}>
            <MyProfileCard />
          </Grid>
          <Grid xs={12} md={8.5} mt={5} mb={10}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      label="My Wallet"
                      value="1"
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    />
                    <Tab
                      label="My Transactions"
                      value="2"
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    />
                    <Tab
                      label="My Collections"
                      value="3"
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                    />
                    <Tab
                      label="My Favourites"
                      value="4"
                      sx={{
                        textTransform: "none",
                        fontWeight: "bold",
                        color: "#000000",
                      }}
                      disabled
                    />
                  </TabList>
                </Box>
                {/* <TabPanel value="1">My Wallet</TabPanel> */}
                <MyWallet />
                {/* <TabPanel value="2">My Transactions</TabPanel> */}
                <MyTransaction />
                {/* <TabPanel value="3">My Collections</TabPanel> */}
                <MyCollections />
                {/* <TabPanel value="4">My Favourites</TabPanel> */}
                <MyFavorites />
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProfilePage;
