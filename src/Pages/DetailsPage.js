import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Container, Grid } from "@mui/material";
import RightContent from "../components/DetailsPage/RightContent";
import LeftConrent from "../components/DetailsPage/LeftConrent";
import { _fetch } from "../abi2/connect";
import { useParams } from "react-router-dom";
import RecentActivity from "../components/shared/RecentActivity";

import { buyNft } from "../functions/buyNft";
import TransctionModal from "../components/shared/TransctionModal";

const theme = createTheme();

export default function DetailsPage({ match }) {
  const [nftData, setNftData] = useState(null);
  const [start, setStart] = useState(false);
  const [owner, setOwner] = useState(null);
  // const [account, setAccount] = useState(null);
  const [price, setPrice] = useState(null);
  const [response, setResponse] = useState(null);

  const { tokenId } = useParams();

  useEffect(() => {
    fetchNftInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchNftInfo() {
    const getAllTokenUri = await _fetch("tokenURI", tokenId);
    const getOwner = await _fetch("ownerOf", tokenId);
    setOwner(getOwner);
    // const account = await _account();
    // setAccount(account);
    const price = await _fetch("getNftPrice", tokenId);
    setPrice(price);

    await fetch(getAllTokenUri)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNftData(data);
      });
  }

  const buynow = async () => {
    setStart(true);
    const responseData = await buyNft(Number(tokenId));
    setResponse(responseData);
  };

  const modalClose = () => {
    setStart(false);
    setResponse(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {start && <TransctionModal response={response} modalClose={modalClose} />}
      <CssBaseline />
      <Container>
        <main style={{ marginBottom: 30 }}>
          {nftData && (
            <Grid
              justifyContent="space-between"
              container
              spacing={4}
              marginY="50px"
            >
              <Grid item xs={12} md={5}>
                <LeftConrent nftData={nftData} tokenId={tokenId} />
              </Grid>

              <Grid item xs={12} md={7}>
                <RightContent
                  nftData={nftData}
                  owner={owner}
                  price={price}
                  buynow={buynow}
                />
              </Grid>
            </Grid>
          )}
          <RecentActivity />
        </main>
      </Container>
    </ThemeProvider>
  );
}
