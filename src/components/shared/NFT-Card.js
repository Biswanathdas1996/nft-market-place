import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { IconButton, Tooltip } from "@mui/material";
import Avatars from "./Avatars";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import { _fetch, _account, _paid_transction } from "../../abi2/connect";

export default function NFTCard({ tokenId }) {
  const [nftData, setNftData] = useState(null);
  const [start, setStart] = useState(false);
  const [owner, setOwner] = useState(null);
  const [account, setAccount] = useState(null);
  const [price, setPrice] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetchNftInfo();
  }, []);

  async function fetchNftInfo() {
    const getAllTokenUri = await _fetch("tokenURI", tokenId);
    const getOwner = await _fetch("ownerOf", tokenId);
    setOwner(getOwner);
    const account = await _account();
    setAccount(account);
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
    const responseData = await _paid_transction(
      Number(price),
      "buyNft",
      owner,
      account,
      Number(tokenId)
    );
    setResponse(responseData);
  };

  const modalClose = () => {
    setStart(false);
    setResponse(null);
  };

  return (
    <Grid item xs={12} sm={6} md={2.4}>
      <Card
        sx={{
          height: "100%",
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          border: "0.01px solid rgba(0, 0, 0, 0.09)",
        }}
      >
        <Tooltip title="Nefrofeel by Pablo Picasso">
          <div
            style={{
              backgroundImage: `url(${nftData?.image})`,
              height: "150px",
              borderRadius: 5,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: "15px 15px 0px 15px",
            }}
          >
            <Grid container>
              <Grid xs={2}>
                <IconButton>
                  <FavoriteBorderRoundedIcon
                    style={{
                      color: "#FD6412",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "5px",
                      //   fontSize: "15px",
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid xs={10} sx={{ textAlign: "right" }}>
                <IconButton>
                  <MoreVertIcon
                    style={{
                      color: "#0578EC",
                      backgroundColor: "white",
                      borderRadius: "50%",
                      padding: "5px",
                      //   fontSize: "15px",
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </Tooltip>
        <CardContent sx={{ flexGrow: 1 }}>
          <Avatars />
          <Typography gutterBottom variant="h7" component="h4">
            {nftData?.name} #{tokenId}
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Tooltip title="Ethereum">
              <img
                alt="nft"
                width="10px"
                height="20px"
                src={`https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/cdbe4/eth-diamond-purple.webp`}
                style={{
                  color: "black",
                  marginTop: 12,
                  marginRight: 8,
                }}
              ></img>
            </Tooltip>
            <p>
              <span className="text-secondary" style={{ color: "grey" }}>
                Price{" "}
              </span>
              <strong>{price / 1000000000000000000} ETH</strong>
            </p>
          </div>
        </CardContent>

        <Button
          variant="outlined"
          size="medium"
          sx={{
            marginX: "15px",
            marginBottom: "15px",
          }}
          onClick={() => buynow()}
        >
          Buy Now
        </Button>
      </Card>
    </Grid>
  );
}
