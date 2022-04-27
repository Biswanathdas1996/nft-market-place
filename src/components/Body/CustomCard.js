import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButterImg from "../../assets/images/coolimg.png";
import {
  IconButton,
  CardActionArea,
  Tooltip,
  Box,
  CardMedia,
} from "@mui/material";
import Avatars from "./Avatars";
import EthIcon from "../../assets/icons/eth_icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const CustomCard = ({ item }) => {
  return (
    <Grid
      item
      key={item}
      // spacing={{ xs: 2, md: 2 }}
      // columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Card
        sx={{
          maxWidth: 200,
          border: "1px solid #E2E2E2",
          boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="200" image={ButterImg} />
          <Box
            sx={{
              position: "absolute",
              bottom: 130,
              left: 0,
              width: "94%",
              // bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: "white",
              padding: "10px",
            }}
          >
            <Grid container>
              <Grid xs={2}>
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
              <Grid xs={10} sx={{ textAlign: "right" }}>
                <IconButton disabled>
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
            <Avatars />
          </Grid>
          <Typography variant="h7" component="h4">
            Cube Rubber #2332
          </Typography>

          {/* <Grid
            container
            spacing={0.15}
            sx={{ margin: 0, background: '', height: '45px' }}
          >
            <Grid item xs={1}> */}
          <div style={{ display: "flex" }}>
            <img
              width="10px"
              height="20px"
              src={EthIcon}
              style={{ color: "black", marginTop: "1px", marginRight: "4px" }}
              alt="img"
            />
            {/* </Grid>
            <Grid item xs={10}> */}
            <Typography style={{}}>
              <span style={{ textTransform: "none" }}>Price</span>{" "}
              <strong>1.116 ETH</strong>
            </Typography>
            {/* </Grid>
          </Grid> */}
          </div>
        </CardContent>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            marginX: "5px",
            marginBottom: "15px",
            textAlign: "center",
            width: "90%",
          }}
          disabled
        >
          Buy Now
        </Button>
      </Card>
    </Grid>
  );
};

export default CustomCard;
