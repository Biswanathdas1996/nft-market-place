import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IconButton, Tooltip } from "@mui/material";
import Avatars from "./Avatars";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";
import { _fetch, _account } from "../../abi2/connect";
import Address from "../../abi2/Address.json";
import { buyNft } from "../../functions/buyNft";
import TransctionModal from "./TransctionModal";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";

export default function NFTCard({ tokenId, reload = () => null }) {
  const [nftData, setNftData] = useState(null);
  const [start, setStart] = useState(false);
  const [price, setPrice] = useState(null);
  const [response, setResponse] = useState(null);
  const [owner, setOwner] = useState(null);
  const [account, setAccount] = useState(null);
  const [fevToken, setFevToken] = useState([]);

  let history = useNavigate();

  useEffect(() => {
    fetchNftInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchNftInfo() {
    const getAllTokenUri = await _fetch("tokenURI", tokenId);
    const price = await _fetch("getNftPrice", tokenId);
    setPrice(price);
    const getOwner = await _fetch("ownerOf", tokenId);
    setOwner(getOwner);
    const account = await _account();
    setAccount(account);
    const myFev = await JSON.parse(localStorage.getItem("myFevTokens"));
    setFevToken(myFev);
    await fetch(getAllTokenUri)
      .then((response) => response.json())
      .then((data) => {
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

  const addToFev = (tokenId) => {
    let tokens = [];
    const myFev = JSON.parse(localStorage.getItem("myFevTokens"));
    if (myFev) {
      tokens = myFev;
      if (tokens.find((token) => token === tokenId)) {
        const index = tokens.indexOf(tokenId);
        if (index > -1) {
          tokens.splice(index, 1);
        }
      } else {
        tokens.push(tokenId);
      }
    } else {
      tokens.push(tokenId);
    }
    setFevToken(tokens);
    localStorage.setItem("myFevTokens", JSON.stringify(tokens));
    reload();
  };

  return (
    <>
      {start && <TransctionModal response={response} modalClose={modalClose} />}

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
                <IconButton onClick={() => addToFev(tokenId)}>
                  <FavoriteBorderRoundedIcon
                    style={{
                      borderRadius: "50%",
                      padding: "3px",
                      color: fevToken?.find((token) => token === tokenId)
                        ? "white"
                        : "#FD6412",
                      backgroundColor: fevToken?.find(
                        (token) => token === tokenId
                      )
                        ? "#FD6412"
                        : "white",
                    }}
                  />
                </IconButton>
              </Grid>
              <Grid xs={10} sx={{ textAlign: "right" }}>
                <a
                  href={`https://testnets.opensea.io/assets/${Address}/${tokenId}`}
                  target="_blank"
                  rel="noreferrer"
                  title="View on OpenSea"
                >
                  <IconButton>
                    <OfflineShareIcon
                      style={{
                        color: "#0578EC",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",
                        //   fontSize: "15px",
                      }}
                    />
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </div>
        </Tooltip>

        <CardContent style={{ paddingBottom: 0 }}>
          <Avatars />
          <Typography
            style={{ fontSize: 14, cursor: "pointer" }}
            variant="body2"
            paragraph
            item
            fontWeight="600"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "11rem",
            }}
            onClick={(e) => {
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              history(`/details/${tokenId}`);
              return;
            }}
          >
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
                height="17px"
                src={`https://ethereum.org/static/a183661dd70e0e5c70689a0ec95ef0ba/cdbe4/eth-diamond-purple.webp`}
                style={{ marginRight: 5 }}
              ></img>
            </Tooltip>
            <p>
              <span className="text-secondary" style={{ color: "grey" }}>
                Price{" "}
              </span>
              <strong style={{ fontSize: 12, fontWeight: "bold" }}>
                {price / 1000000000000000000} ETH
              </strong>
            </p>
          </div>
        </CardContent>

        {owner !== account && (
          <Button
            variant="outlined"
            size="small"
            sx={{
              marginX: "15px",
              marginBottom: "15px",
            }}
            onClick={() => buynow()}
            style={{
              border: "2px solid #1976d2",
              fontSize: 10,
              fontWeight: "bold",
              padding: 8,
            }}
          >
            Buy Now
          </Button>
        )}
      </Card>
    </>
  );
}
