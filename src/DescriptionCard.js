import React, { useState } from "react";
import { useFindArtTokens } from "./hooks/DigitalArtHooks";
import { styled } from "@mui/material/styles";
import ethIcon from "./assets/eth_icon.svg";
import {
  Button,
  Stack,
  Grid,
  CardActionArea,
  Paper,
  Box,
  Card,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const DescriptionCard = ({ match }) => {
  const artTokens = useFindArtTokens({ filter: "pending" });

  const [data, setData] = useState([]);

  // console.log(data);

  // console.log(artTokens);

  const id = match.params.id;

  let filteredData = artTokens.filter((item) => item.id === id);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      {filteredData.map((item, index) => (
        <Box key={index} m={2} pt={3} sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid spacing={1} item xs={6}>
              <Item>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="340"
                      image={`../${item.image}`}
                      alt={item.title}
                    />
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <div className="align">
                  <h1>{item.title}</h1>
                  <Divider />
                  <p>Owned by {item.authorName}</p>
                  <Divider />
                  <p>Created on {item.date}</p>
                  <Divider />
                  <p>Curent Price</p>

                  <Grid container spacing={1}>
                    <Grid item xs={1}>
                      <img
                        width="25"
                        height="25"
                        src={ethIcon}
                        style={{ marginTop: "25px" }}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <h1>{(item.price / 2680.12).toFixed(6)}</h1>
                    </Grid>
                    <Grid item xs={1}>
                      <p style={{ fontSize: "20px", marginTop: "25px" }}>
                        (${item.price})
                      </p>
                    </Grid>
                  </Grid>
                  <Stack direction="row" spacing={4}>
                    <Button variant="contained">Buy Now</Button>
                    <Button variant="outlined">Make Offer</Button>
                  </Stack>
                </div>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <div className="align">
                  <h2>Description</h2>
                  <Divider />
                  <p>{item.desc}</p>
                  <Divider />
                  <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <ListItem>
                      <ListItemText>Contract Address</ListItemText>
                      <ListItemText className="Description">
                        {item.owner}
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>Token ID</ListItemText>
                      <ListItemText className="Description">
                        {item.author}
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>Token Standard</ListItemText>
                      <ListItemText className="Description">
                        ERC-721
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>Blockchain</ListItemText>
                      <ListItemText className="Description">
                        Ethereum
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemText>Metadata</ListItemText>
                      <ListItemText className="Description">
                        Editable
                      </ListItemText>
                    </ListItem>
                  </List>
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default DescriptionCard;
