import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { Tab, Tabs, Stack } from "@mui/material";
import HomeCard from "./HomeCard";
import { useFindArtTokens, useBuySellArt } from "../../hooks/DigitalArtHooks";
import { Alert } from "@material-ui/lab";
import CustomCard from "./CustomCard";
import FilterListIcon from "@mui/icons-material/FilterList";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function HomePage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const artTokens = useFindArtTokens({ filter: "pending" });
  const { response: buyArtResponse, buyArt } = useBuySellArt();

  const handleBuyArt = async (tokenId, price) => {
    await buyArt({ tokenId, price });
    console.log(buyArtResponse);

    if (buyArtResponse?.error !== null) {
      window.location.reload();
    }
  };

  return (
    <>
      <Container sx={{ pt: 4, pb: 2 }}>
        {/* <Typography
          component="h1"
          variant="h7"
          align="center"
          color="text.primary"
          fontSize="40px"
        >
          Buy & Sell Digital NFT
        </Typography> */}
      </Container>

      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h2"
            variant="h7"
            textAlign="left"
            color="text.primary"
            gutterBottom
          >
            Top Selling
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Button
            disabled
            variant="outlined"
            startIcon={<FilterListIcon />}
            sx={{ textTransform: "none" }}
          >
            Filter & Sort
          </Button>
        </Stack>
      </Container>
      <Container
        sx={{ py: 2, marginBottom: "50px" }}
        // maxWidth="md"
      >
        {!!buyArtResponse?.error && (
          <Alert severity="error"> {buyArtResponse?.error}</Alert>
        )}

        {artTokens.length > 0 && (
          <Grid container spacing={4}>
            {artTokens.map((artToken, index) => (
              <HomeCard
                title={artToken.title}
                tokenId={artToken.id}
                image={artToken.image}
                price={artToken.price}
                author={artToken.author}
                publishDate={artToken.publishDate}
                desc={artToken.desc}
                status={artToken.status}
                onBuyArt={handleBuyArt}
              />
            ))}
          </Grid>
        )}
        {!artTokens.length > 0 && (
          <Alert severity="info">
            Publish your digital arts in blockchain today!
          </Alert>
        )}

        {/* <Button
          variant="outlined"
          sx={{
            borderRadius: "25px",
            border: "2px solid",
            marginTop: 4,
            width: "100%",
            textTransform: "none",
          }}
          disabled
        >
          Load more
        </Button> */}
      </Container>
      {/* //Next Partition================================================ //End */}

      {/* <Container sx={{ marginTop: 8 }}>
        <Typography
          component="h2"
          variant="h7"
          textAlign="left"
          color="#ABB2B9"
          gutterBottom
        >
          Recent Activity
        </Typography>
      </Container> */}

      {/* Recent Activity Partition================================================================ */}

      {/* <Container sx={{ marginBottom: 4 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          TabScrollButtonProps={{ direction: "left" | "right" }}
          scrollButtons="true"
          indicatorColor="none"
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {cards.map((item) => (
            <Tab label={<CustomCard item={item} />} />
          ))}
        </Tabs>
      </Container> */}
    </>
  );
}
