import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { IconButton, Tooltip } from "@mui/material";
import Avatars from "./Avatars";
import EthIcon from "../../assets/icons/eth_icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActions } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";

const HomeCard = (props) => {
  return (
    <Grid item key={props.tokenId} xs={12} sm={6} md={2.4}>
      {/* <CardActionArea component="a" href="#"> */}
      <Grid
        item
        key={props.tokenId}
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Card
          sx={{
            // maxWidth: "50%",
            border: "1px solid #E2E2E2",
            boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Tooltip title={props.title + " by Pablo Picasso"}>
              <Link
                href={`/descPage/${props.tokenId}`}
                style={{ textDecoration: "none" }}
              >
                <CardMedia component="img" height="200" image={props.image} />
              </Link>
            </Tooltip>
            <Box
              sx={{
                position: "absolute",
                bottom: 160,
                left: 0,
                width: "100%",

                color: "white",
                padding: "0px",
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Grid item>
                  <IconButton disabled>
                    <FavoriteBorderRoundedIcon
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",

                        fontSize: "25px",
                        color: "#FD6412",
                      }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton aria-label="more" disabled color="primary">
                    <MoreVertIcon
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",
                        fontSize: "25px",
                        color: "#0578EC",
                      }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <CardContent>
            <Grid container justify="flex-start">
              <Avatars author={props.author} />
            </Grid>
            <Typography variant="h7" component="h4">
              {props.title}
            </Typography>

            <div style={{ display: "flex" }}>
              <img
                width="10px"
                height="20px"
                src={EthIcon}
                style={{
                  color: "black",
                  marginTop: "1px",
                  marginRight: "4px",
                }}
                alt="img"
              />
              <Typography>
                <strong>{props.price} ETH</strong>
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            {props.onBuyArt && (
              <Button
                variant="outlined"
                size="small"
                sx={{
                  width: "100%",
                  marginX: "10px",
                  marginBottom: "10px",
                  textTransform: "none",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  props.onBuyArt(props.tokenId, props.price);
                }}
              >
                Buy Now
              </Button>
            )}
          </CardActions>
        </Card>
      </Grid>
      {/* </CardActionArea> */}
    </Grid>
  );
};

export default HomeCard;
