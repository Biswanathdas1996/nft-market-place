import {
  Grid,
  Button,
  Typography,
  CardContent,
  Card,
  CardMedia,
} from "@mui/material";
import React, { useState } from "react";
import { useFindArtTokens, useResellArt } from "../../hooks/DigitalArtHooks";
import { TabPanel } from "@mui/lab";
import "../../App.css";

// import Avatars from "../../components/Body/Avatars";
import EthIcon from "../../assets/icons/eth_icon.svg";

import {
  Container,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const MyCollections = (props) => {
  const [state, setState] = useState({
    message: "",
    tokenId: "",
    price: 0,
    showModal: false,
  });

  const artTokens = useFindArtTokens({ filter: "mine" });
  const { response: resellArtResponse, resellArt } = useResellArt();

  const handleChangePrice = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSellArt = (tokenId) => {
    try {
      //open  popup window
      setState({ tokenId: tokenId, showModal: true });
    } catch (e) {
      console.log("Error", e);
    }
  };

  const handleCloseDialog = () =>
    setState((prevState) => ({ ...prevState, showModal: false }));

  const handleResellArt = async () => {
    await resellArt({ tokenId: state.tokenId, price: state.price });
    if (resellArtResponse?.error !== null) {
      window.location.reload();
    }
  };

  return (
    <TabPanel value="3" sx={{ padding: 0, mt: 5 }}>
      {!!resellArtResponse?.error && (
        <Alert severity="error"> {resellArtResponse?.error}</Alert>
      )}
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {artTokens.map((artToken) => (
            <Grid item xs={12} sm={6} md={4} key={artToken.id}>
              {/* <ArtTokenCard
                title={artToken.title}
                tokenId={artToken.id}
                image={artToken.image}
                price={artToken.price}
                author={artToken.author}
                publishDate={artToken.publishDate}
                desc={artToken.desc}
                onSellArt={handleSellArt}
                status={artToken.status}
              /> */}
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "white",
                  border: "0.01px solid rgba(0, 0, 0, 0.09)",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={artToken.image}
                  alt="Paella dish"
                />

                <CardContent sx={{ flexGrow: 1 }}>
                  {/* <Avatars /> */}
                  <Typography gutterBottom variant="h7" component="h4">
                    {artToken.title}
                  </Typography>

                  <Grid container spacing={0.15}>
                    <Grid item xs={1}>
                      <img
                        width="10px"
                        height="20px"
                        src={EthIcon}
                        style={{ color: "black", marginTop: "1px" }}
                        alt="img"
                      ></img>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography style={{ textAlign: "left" }}>
                        <strong>{artToken.price} ETH</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>

                {(artToken.status === "Publish" || handleSellArt) && (
                  <Button
                    variant="outlined"
                    // size="large"
                    // fullWidth
                    sx={{
                      marginX: "15px",
                      marginBottom: "15px",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSellArt(artToken.id);
                    }}
                    data-target=".sell-modal"
                    data-toggle="modal"
                  >
                    {artToken.status}
                  </Button>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Dialog
        onClose={handleCloseDialog}
        aria-labelledby="customized-dialog-title"
        open={state.showModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
          Sell Art
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            id="price"
            name="price"
            label="Price (ether)"
            placeholder="Price (ether)"
            onChange={handleChangePrice}
            value={state.price}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseDialog} color="secondary">
            Close
          </Button>
          <Button
            autoFocus
            onClick={(e) => {
              e.preventDefault();
              handleResellArt();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </TabPanel>
  );
};

export default MyCollections;
