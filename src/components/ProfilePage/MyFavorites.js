import {
  Grid,
  Button,
  Typography,
  IconButton,
  CardActionArea,
  CardContent,
  Card,
  CardMedia,
  Box,
  Stack,
} from "@mui/material";
import { TabPanel } from "@mui/lab";
import RetrolImg from "../../assets/images/retro.jpg";
import Avatars from "../../components/Body/Avatars";
import EthIcon from "../../assets/icons/eth_icon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import FilterListIcon from "@mui/icons-material/FilterList";

const collectionCards = [1, 2, 3, 4, 5, 6];

const MyFavorites = () => {
  return (
    <TabPanel value="4" sx={{ padding: 0, mt: 5 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="10px"
      >
        <Typography
          component="h5"
          variant="h7"
          textAlign="left"
          color="#ABB2B9"
          gutterBottom
        >
          2,321 Items
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          size="small"
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{ textTransform: "none" }}
          disabled
        >
          Filter & Sort
        </Button>
      </Stack>
      <Grid container spacing={4}>
        {collectionCards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <CardActionArea component="a" href="#">
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
                  image={RetrolImg}
                  alt="Paella dish"
                />
                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <IconButton>
                    <FavoriteBorderRoundedIcon
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",
                        color: "#FD6412",
                        // fontSize: "15px",
                      }}
                    />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "5px",
                        color: "#0578EC",
                        // fontSize: "15px",
                      }}
                    />
                  </IconButton>
                </div>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Avatars />
                  <Typography gutterBottom variant="h7" component="h4">
                    Cube Rubber #2332
                  </Typography>

                  <Grid container spacing={0.15}>
                    <Grid item xs={1}>
                      <img
                        width="10px"
                        height="20px"
                        src={EthIcon}
                        style={{ color: "black", marginTop: "1px" }}
                      ></img>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography style={{ textAlign: "left" }}>
                        Price <strong>1.116 ETH</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    marginX: "15px",
                    marginBottom: "15px",
                  }}
                  disabled
                >
                  Buy Now
                </Button>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
      <Box width="100%" textAlign="center">
        <Button
          sx={{ marginY: "20px", textTransform: "none" }}
          variant="contained"
          endIcon={<ChevronRightOutlinedIcon />}
          disabled
        >
          Load More
        </Button>
      </Box>
    </TabPanel>
  );
};

export default MyFavorites;
