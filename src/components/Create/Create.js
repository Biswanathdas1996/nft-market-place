import React, { useState } from "react";
// import "../../App.css";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  //   TextField,
} from "@material-ui/core";

import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { Alert } from "@material-ui/lab";
import { useCreateTokenAndSellArt } from "../../hooks/DigitalArtHooks";
import { create } from "ipfs-http-client";
import { TextField, Stack } from "@mui/material";

const CreateNft = (props) => {
  const { response: createTokenAndSellArtResponse, createTokenAndSellArt } =
    useCreateTokenAndSellArt();
  const [file, setFile] = useState("");
  const [buffer, setBuffer] = useState("");
  const [state, setState] = useState({
    isFetching: false,
    imageValue: "",
    description: "",
    title: "",
    authorName: "",
    price: 0,
    date: "",
    error: undefined,
  });
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    console.log(event.target.files[0]);
    const client = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
    });
    try {
      const uploadResult = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${uploadResult.path}`;
      console.log(url);
      setState({ ...state, imageValue: url });
    } catch (e) {
      console.log(e);
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { imageValue, description, title, authorName, price, date } = state;
    if (
      isNotEmpty(title) &&
      isNotEmpty(description) &&
      isNotEmpty(authorName) &&
      isNotEmpty(date) &&
      isNotEmpty(price)
    ) {
      publishArt({ title, description, date, authorName, price, imageValue });
    } else {
      setState((prevState) => ({
        ...prevState,
        error: "Input data incorrect.",
      }));
    }
  };

  const isNotEmpty = (val) => val && val.length > 0;
  const handleFormChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const publishArt = async (tokenArt) => {
    await createTokenAndSellArt(tokenArt);
    props.history.push(`/home`);
    window.location.reload();
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <section className="text-center">
        <Container
          maxWidth="md"
          style={{
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          {!!createTokenAndSellArtResponse?.error && (
            <Alert severity="error">
              {" "}
              {createTokenAndSellArtResponse?.error}
            </Alert>
          )}
          {!!state.error && <Alert severity="error"> {state.error}</Alert>}
          <form
            className="text-center border border-light p-5"
            noValidate
            onSubmit={handleSubmit}
          >
            <Card
              style={{
                padding: "20px 50px 50px 50px",
                boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.08)",
              }}
            >
              <CardContent>
                <Typography
                  style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    marginBottom: "20px",
                  }}
                >
                  Create Your Art
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="title"
                      name="title"
                      label="Title"
                      placeholder="Title"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.title}
                    /> */}
                    <Stack>
                      <Typography>
                        Title <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="title"
                        name="title"
                        placeholder="Title"
                        autoComplete="off"
                        autoFocus
                        onChange={handleFormChange}
                        value={state.title}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="authorName"
                      name="authorName"
                      label="Author Name"
                      placeholder="Author Name"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.authorName}
                    /> */}

                    <Stack>
                      <Typography>
                        Author Name <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="authorName"
                        name="authorName"
                        placeholder="Author Name"
                        autoComplete="off"
                        autoFocus
                        onChange={handleFormChange}
                        value={state.authorName}
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="price"
                      name="price"
                      label="Price (ETH)"
                      placeholder="Price (ether)"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.price}
                    /> */}
                    <Stack>
                      <Typography>
                        Price (ETH) <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="price"
                        name="price"
                        placeholder="Price (ether)"
                        autoComplete="off"
                        autoFocus
                        onChange={handleFormChange}
                        value={state.price}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      type="date"
                      margin="dense"
                      required
                      fullWidth
                      id="date"
                      name="date"
                      label="Date"
                      placeholder="Date"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.date}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    /> */}
                    <Stack>
                      <Typography>
                        Date <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        type="date"
                        margin="dense"
                        required
                        fullWidth
                        id="date"
                        name="date"
                        placeholder="Date"
                        autoComplete="off"
                        autoFocus
                        onChange={handleFormChange}
                        value={state.date}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="description"
                      name="description"
                      label="Description"
                      placeholder="Description"
                      autoComplete="off"
                      autoFocus
                      onChange={handleFormChange}
                      value={state.description}
                    /> */}
                    <Stack>
                      <Typography>
                        Choose File <span style={{ color: "red" }}>*</span>
                      </Typography>
                      {/* <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="title"
                        name="imageValue"
                        type="file"
                        placeholder=""
                        autoComplete="off"
                        autoFocus
                        sx={{ height: "60px" }}
                        onChange={handleImageChange}
                      /> */}

                      <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <input
                        type="file"
                        name="imageValue"
                        onChange={handleImageChange}
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {/* <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <input
                      type="file"
                      name="imageValue"
                      onChange={handleImageChange}
                    /> */}
                    <Stack>
                      <Typography>
                        Description <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="title"
                        name="title"
                        multiline
                        rows={2}
                        maxRows={4}
                        placeholder=" Description"
                        autoComplete="off"
                        autoFocus
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  style={{
                    marginTop: "20px",
                  }}
                  size="large"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
          </form>
        </Container>
      </section>
    </div>
  );
};

export default CreateNft;
